import type { Metadata } from "next"
import Image from "next/image"
import { PageIntro } from "@/components/page-intro"
import { TextLink } from "@/components/text-link"
import { site } from "@/lib/content"

export const metadata: Metadata = {
  title: "About",
  description:
    "E.D.E Studio — handmade handbags and related forms, considered as objects first.",
}

export default function AboutPage() {
  return (
    <div className="pb-24 md:pb-32">
      <PageIntro kicker="Studio" title="About">
        A practice of handmade handbags, and of works that share the same quiet
        language.
      </PageIntro>

      <div className="mx-auto mt-14 grid max-w-[1400px] items-center gap-12 px-6 lg:mt-20 lg:grid-cols-12 lg:gap-16 md:px-10">
        <div className="relative aspect-[2/3] overflow-hidden bg-[#e8e0d0] lg:col-span-5">
          <Image
            src={site.about.portrait}
            alt="The studio"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-5 text-sm leading-7 text-muted-foreground md:text-[15px]">
            {site.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <TextLink href="/work">View the work</TextLink>
            <TextLink href="/contact">Inquiries</TextLink>
          </div>
        </div>
      </div>
    </div>
  )
}
