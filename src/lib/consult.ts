export interface ConsultFormData {
  name: string
  phone: string
  occupation?: string
  course?: string
  message?: string
}

export async function submitConsult(form: ConsultFormData): Promise<{ success: boolean; message: string }> {
  const res = await fetch("/api/consult", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  })

  const data = (await res.json()) as { success?: boolean; message?: string; error?: string }

  if (!res.ok) {
    throw new Error(data.error ?? "提交失败，请稍后重试")
  }

  return { success: data.success ?? true, message: data.message ?? "提交成功" }
}
