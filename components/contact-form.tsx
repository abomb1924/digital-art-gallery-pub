"use client"

import { useActionState } from "react"
import { submitInquiry, type ContactState } from "@/app/contact/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const initialState: ContactState = { ok: false }

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState)

  if (state.ok) {
    return (
      <p className="max-w-md text-sm leading-7 text-muted-foreground">
        Thank you. A note has been received, and the studio will reply when it
        can give the inquiry proper attention.
      </p>
    )
  }

  return (
    <form action={formAction} className="flex max-w-md flex-col gap-6">
      <div className="space-y-2">
        <Label
          htmlFor="name"
          className="text-[11px] font-normal tracking-[0.22em] uppercase text-muted-foreground"
        >
          Name
        </Label>
        <Input
          id="name"
          name="name"
          required
          autoComplete="name"
          maxLength={200}
          className="h-11 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0"
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-[11px] font-normal tracking-[0.22em] uppercase text-muted-foreground"
        >
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-11 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0"
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-[11px] font-normal tracking-[0.22em] uppercase text-muted-foreground"
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          className="min-h-28 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0"
        />
      </div>
      {state.error ? (
        <p className="text-sm leading-6 text-destructive">{state.error}</p>
      ) : null}
      <div>
        <Button
          type="submit"
          variant="ghost"
          disabled={pending}
          className="h-auto rounded-none px-0 py-2 text-[11px] tracking-[0.24em] uppercase underline decoration-foreground/25 underline-offset-[6px] hover:bg-transparent hover:decoration-foreground/70"
        >
          {pending ? "Sending" : "Send"}
        </Button>
      </div>
    </form>
  )
}
