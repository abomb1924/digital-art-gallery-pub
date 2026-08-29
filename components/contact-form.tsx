"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <p className="max-w-md text-sm leading-7 text-muted-foreground">
        Thank you. A note has been received, and the studio will reply when it
        can give the inquiry proper attention.
      </p>
    )
  }

  return (
    <form
      className="flex max-w-md flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault()
        setSent(true)
      }}
    >
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
          className="min-h-28 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0"
        />
      </div>
      <div>
        <Button
          type="submit"
          variant="ghost"
          className="h-auto rounded-none px-0 py-2 text-[11px] tracking-[0.24em] uppercase underline decoration-foreground/25 underline-offset-[6px] hover:bg-transparent hover:decoration-foreground/70"
        >
          Send
        </Button>
      </div>
    </form>
  )
}
