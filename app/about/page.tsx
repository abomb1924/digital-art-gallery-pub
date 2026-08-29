import type { Metadata } from "next"
import Image from "next/image"
import { TextLink } from "@/components/text-link"
import { site } from "@/lib/content"

export const metadata: Metadata = {
  title: "About",
  description: site.about.lead[0],
}

export default function AboutPage() {
  const [salon, bendel, times] = site.about.photos

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

      {salon ? (
        <section className="mx-auto mt-20 max-w-[1100px] px-6 md:mt-28 md:px-10">
          <p className="mb-8 text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
            Press
          </p>
          <figure>
            <div
              className="relative bg-[#ece6d8]"
              style={{ aspectRatio: `${salon.width} / ${salon.height}` }}
            >
              <Image
                src={salon.src}
                alt={salon.alt}
                fill
                priority
                sizes="(min-width: 1100px) 1100px, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              {salon.caption}
            </figcaption>
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

      {bendel && times ? (
        <section className="mx-auto mt-20 grid max-w-[1400px] items-start gap-12 px-6 md:mt-28 md:grid-cols-12 md:gap-10 md:px-10">
          <figure className="md:col-span-5">
            <div
              className="relative bg-[#ece6d8]"
              style={{ aspectRatio: `${bendel.width} / ${bendel.height}` }}
            >
              <Image
                src={bendel.src}
                alt={bendel.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              {bendel.caption}
            </figcaption>
          </figure>
          <figure className="md:col-span-7 md:mt-24">
            <div
              className="relative bg-[#ece6d8]"
              style={{ aspectRatio: `${times.width} / ${times.height}` }}
            >
              <Image
                src={times.src}
                alt={times.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              {times.caption}
            </figcaption>
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
