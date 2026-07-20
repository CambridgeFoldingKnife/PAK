import type { VercelRequest, VercelResponse } from "@vercel/node"

type CourseStatus = "open" | "upcoming" | "closed"

interface Course {
  name: string
  status: CourseStatus
  module: string
  instructor: string
  part1: string
  part2: string
  location: string
  seats: number
  price: string
  earlyBird: string
}

interface FeishuText {
  text?: string
}

interface FeishuSelect {
  text?: string
}

function getText(value: unknown): string {
  if (value === null || value === undefined) return ""
  if (typeof value === "string") return value
  if (typeof value === "number") return String(value)
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === "string") return item
        if (item && typeof item === "object") {
          return (item as FeishuText).text ?? ""
        }
        return ""
      })
      .filter(Boolean)
      .join(", ")
  }
  if (typeof value === "object") {
    return (value as FeishuText).text ?? (value as FeishuSelect).text ?? String(value)
  }
  return String(value)
}

function getNumber(value: unknown): number {
  if (typeof value === "number") return value
  if (typeof value === "string") {
    const parsed = Number(value.replace(/[^0-9.-]/g, ""))
    return Number.isNaN(parsed) ? 0 : parsed
  }
  return 0
}

function formatPrice(value: unknown): string {
  if (value === null || value === undefined || value === "") return ""
  if (typeof value === "string" && value.startsWith("¥")) return value
  const num = getNumber(value)
  if (num === 0) return getText(value)
  return `¥${num.toLocaleString("zh-CN")}`
}

function mapStatus(statusText: string): CourseStatus | "cancelled" | null {
  switch (statusText.trim()) {
    case "开放报名":
      return "open"
    case "即将开放":
      return "upcoming"
    case "已截止":
      return "closed"
    case "已取消":
      return "cancelled"
    default:
      return null
  }
}

async function getTenantAccessToken(appId: string, appSecret: string): Promise<string> {
  const res = await fetch("https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      app_id: appId,
      app_secret: appSecret,
    }),
  })

  const data = (await res.json()) as { code: number; msg?: string; tenant_access_token?: string }

  if (data.code !== 0 || !data.tenant_access_token) {
    throw new Error(`Feishu auth failed: ${data.msg ?? "unknown error"}`)
  }

  return data.tenant_access_token
}

async function fetchFeishuRecords(token: string, appToken: string, tableId: string): Promise<Record<string, unknown>[]> {
  const url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${appToken}/tables/${tableId}/records?page_size=500`
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  })

  const data = (await res.json()) as {
    code: number
    msg?: string
    data?: { items?: { fields: Record<string, unknown> }[] }
  }

  if (data.code !== 0) {
    throw new Error(`Feishu records failed: ${data.msg ?? "unknown error"}`)
  }

  return data.data?.items?.map((item) => item.fields) ?? []
}

function mapCourse(fields: Record<string, unknown>): Course | null {
  const name = getText(fields["课程名称"])
  const statusText = getText(fields["报名状态"])
  const status = mapStatus(statusText)

  if (!name || !status || status === "cancelled") return null

  return {
    name,
    status,
    module: getText(fields["模块"]),
    instructor: getText(fields["讲师"]),
    part1: getText(fields["Part I 时间"]),
    part2: getText(fields["Part II 时间"]),
    location: getText(fields["地点"]),
    seats: getNumber(fields["名额"]) || 30,
    price: formatPrice(fields["原价"]),
    earlyBird: formatPrice(fields["早鸟价"]),
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET")
    return res.status(405).json({ error: "Method not allowed" })
  }

  const FEISHU_APP_ID = process.env.FEISHU_APP_ID
  const FEISHU_APP_SECRET = process.env.FEISHU_APP_SECRET
  const FEISHU_APP_TOKEN = process.env.FEISHU_APP_TOKEN
  const FEISHU_TABLE_ID = process.env.FEISHU_TABLE_ID

  if (!FEISHU_APP_ID || !FEISHU_APP_SECRET || !FEISHU_APP_TOKEN || !FEISHU_TABLE_ID) {
    return res.status(500).json({ error: "Missing Feishu configuration" })
  }

  try {
    const token = await getTenantAccessToken(FEISHU_APP_ID, FEISHU_APP_SECRET)
    const records = await fetchFeishuRecords(token, FEISHU_APP_TOKEN, FEISHU_TABLE_ID)
    const courses = records.map(mapCourse).filter((c): c is Course => c !== null)

    res.setHeader("Content-Type", "application/json")
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300")
    return res.status(200).json({ data: courses })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error"
    console.error("[courses api error]", message)
    return res.status(500).json({ error: message })
  }
}
