import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { PageIntro } from "@/components/page-intro"
import { TextLink } from "@/components/text-link"
import { site } from "@/lib/content"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Inquiries, commissions, exhibitions, and collaborations with E.D.E Studio.",
}

export default function ContactPage() {
  return (
    <div className="pb-24 md:pb-32">
      <PageIntro title="Contact">
        For inquiries, commissions, exhibitions, or collaborations, please get
        in touch.
      </PageIntro>

      <div className="mx-auto mt-14 grid max-w-[1400px] gap-16 px-6 lg:mt-20 lg:grid-cols-12 md:px-10">
        <div className="space-y-8 lg:col-span-4">
          <div>
            <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              Studio
            </p>
            <p className="mt-2 text-sm leading-7">
              {site.name}
              <br />
              {site.location}
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              Email
            </p>
            <p className="mt-2">
              <a
                href={`mailto:${site.email}`}
                className="text-sm underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground/60"
              >
                {site.email}
              </a>
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              Instagram
            </p>
            <div className="mt-2">
              <TextLink href={site.instagram.href} external>
                {site.instagram.handle}
              </TextLink>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="mb-8 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            Write
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
