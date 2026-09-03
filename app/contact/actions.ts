"use server"

import { site } from "@/lib/content"

export type ContactState = {
  ok: boolean
  error?: string
}

function readField(formData: FormData, name: string) {
  const value = formData.get(name)
  return typeof value === "string" ? value.trim() : ""
}

export async function submitInquiry(
  _previous: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = readField(formData, "name")
  const email = readField(formData, "email")
  const message = readField(formData, "message")

  if (!name || !email || !message) {
    return { ok: false, error: "Please complete every field." }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || name.length > 200 || message.length > 5000) {
    return { ok: false, error: "Please check the name, email, and message." }
  }

  const response = await fetch(site.formspree, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _replyto: email,
      _subject: `E.D.E Studio inquiry from ${name}`,
    }),
  })

  const payload = (await response.json().catch(() => null)) as
    | { ok?: boolean }
    | null

  if (!response.ok || payload?.ok === false) {
    return {
      ok: false,
      error:
        "The studio could not receive that note. Please try again, or write directly.",
    }
  }

  return { ok: true }
}
