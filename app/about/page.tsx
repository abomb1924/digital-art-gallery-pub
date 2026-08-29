import type { Metadata } from "next"
import Image from "next/image"
import { TextLink } from "@/components/text-link"
import { site } from "@/lib/content"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About",
  description: site.about.lead[0],
}

export default function AboutPage() {
  const [first, second, third, fourth, fifth, sixth] = site.about.photos

  return (
    <div className="pb-24 md:pb-32">
      <header className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <p className="font-sans text-[0.8rem] font-semibold tracking-[0.38em] uppercase">
          E.D.E.
        </p>
        <p className="mt-2 font-sans text-[0.7rem] tracking-[0.42em] uppercase text-muted-foreground">
          NYC
        </p>
        <h1 className="sr-only">About E.D.E Studio</h1>
      </header>

      <section className="mx-auto mt-14 max-w-[42rem] px-6 md:mt-20 md:px-10">
        <div className="space-y-8 text-[15px] leading-8 text-foreground/85 md:text-base md:leading-8">
          {site.about.lead.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {first && second && third ? (
        <section className="mx-auto mt-20 grid max-w-[1400px] gap-4 px-6 sm:grid-cols-12 sm:gap-6 md:mt-28 md:px-10">
          <figure className="relative aspect-[2/3] overflow-hidden bg-[#e8e0d0] sm:col-span-5">
            <Image
              src={first.src}
              alt={first.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </figure>
          <figure className="relative aspect-[3/2] overflow-hidden bg-[#e8e0d0] sm:col-span-7 sm:mt-16">
            <Image
              src={second.src}
              alt={second.alt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </figure>
          <figure className="relative aspect-[2/3] overflow-hidden bg-[#e8e0d0] sm:col-span-6 sm:col-start-4">
            <Image
              src={third.src}
              alt={third.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
        </section>
      ) : null}

      <section className="mx-auto mt-20 max-w-[42rem] px-6 md:mt-28 md:px-10">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
          The studio
        </p>
        <p className="mt-6 text-[15px] leading-8 text-foreground/85 md:text-base md:leading-8">
          {site.about.story}
        </p>
      </section>

      {fourth && fifth && sixth ? (
        <section className="mx-auto mt-20 grid max-w-[1400px] gap-4 px-6 sm:grid-cols-2 sm:gap-6 md:mt-28 md:px-10">
          <figure
            className={cn(
              "relative overflow-hidden bg-[#e8e0d0]",
              "aspect-[2/3] sm:row-span-2"
            )}
          >
            <Image
              src={fourth.src}
              alt={fourth.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
          <figure className="relative aspect-[3/2] overflow-hidden bg-[#e8e0d0]">
            <Image
              src={fifth.src}
              alt={fifth.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
          <figure className="relative aspect-[3/2] overflow-hidden bg-[#e8e0d0]">
            <Image
              src={sixth.src}
              alt={sixth.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
        </section>
      ) : null}

      <section className="mx-auto mt-20 max-w-[42rem] px-6 text-center md:mt-28 md:px-10">
        <p className="font-serif text-xl leading-8 tracking-wide text-foreground md:text-2xl md:leading-9">
          {site.about.close}
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
          <TextLink href="/work">View the work</TextLink>
          <TextLink href="/contact">Inquiries</TextLink>
        </div>
      </section>
    </div>
  )
}
