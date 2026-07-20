import type { VercelRequest, VercelResponse } from "@vercel/node"

interface ConsultPayload {
  name: string
  phone: string
  occupation?: string
  course?: string
  message?: string
}

function parseBody(req: VercelRequest): ConsultPayload {
  if (typeof req.body === "string") {
    return JSON.parse(req.body) as ConsultPayload
  }
  return (req.body ?? {}) as ConsultPayload
}

function isValidPhone(phone: string): boolean {
  return /^1[3-9]\d{9}$/.test(phone)
}

async function getTenantAccessToken(appId: string, appSecret: string): Promise<string> {
  const res = await fetch("https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
  })

  const data = (await res.json()) as { code: number; msg?: string; tenant_access_token?: string }

  if (data.code !== 0 || !data.tenant_access_token) {
    throw new Error(`Feishu auth failed: ${data.msg ?? "unknown error"}`)
  }

  return data.tenant_access_token
}

async function createFeishuRecord(
  token: string,
  appToken: string,
  tableId: string,
  fields: Record<string, unknown>
): Promise<void> {
  const url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${appToken}/tables/${tableId}/records`
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ fields }),
  })

  const data = (await res.json()) as { code: number; msg?: string }

  if (data.code !== 0) {
    throw new Error(`Feishu create record failed: ${data.msg ?? "unknown error"}`)
  }
}

function formatDateTime(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0")
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    return res.status(204).end()
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Method not allowed" })
  }

  const FEISHU_APP_ID = process.env.FEISHU_APP_ID
  const FEISHU_APP_SECRET = process.env.FEISHU_APP_SECRET
  const FEISHU_CONSULT_APP_TOKEN = process.env.FEISHU_CONSULT_APP_TOKEN
  const FEISHU_CONSULT_TABLE_ID = process.env.FEISHU_CONSULT_TABLE_ID

  if (!FEISHU_APP_ID || !FEISHU_APP_SECRET || !FEISHU_CONSULT_APP_TOKEN || !FEISHU_CONSULT_TABLE_ID) {
    return res.status(500).json({ error: "Missing Feishu configuration" })
  }

  try {
    const payload = parseBody(req)

    if (!payload.name?.trim() || !payload.phone?.trim()) {
      return res.status(400).json({ error: "姓名和手机号不能为空" })
    }

    if (!isValidPhone(payload.phone.trim())) {
      return res.status(400).json({ error: "手机号格式不正确" })
    }

    const token = await getTenantAccessToken(FEISHU_APP_ID, FEISHU_APP_SECRET)

    const fields: Record<string, unknown> = {
      "姓名": payload.name.trim(),
      "手机号": payload.phone.trim(),
      "职业背景": payload.occupation?.trim() || "",
      "意向课程": payload.course?.trim() || "",
      "咨询内容": payload.message?.trim() || "",
      "创建时间": formatDateTime(new Date()),
    }

    await createFeishuRecord(token, FEISHU_CONSULT_APP_TOKEN, FEISHU_CONSULT_TABLE_ID, fields)

    return res.status(200).json({ success: true, message: "提交成功" })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error"
    console.error("[consult api error]", message)
    return res.status(500).json({ error: message })
  }
}
