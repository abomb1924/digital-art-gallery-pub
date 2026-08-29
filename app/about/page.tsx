import type { Metadata } from "next"
import Image from "next/image"
import { TextLink } from "@/components/text-link"
import { site } from "@/lib/content"

export const metadata: Metadata = {
  title: "About",
  description: site.about.lead[0],
}

type PressPhoto = (typeof site.about.photos)[number]

function PressPlate({
  photo,
  priority,
}: {
  photo: PressPhoto
  priority?: boolean
}) {
  return (
    <figure className="mx-auto w-full max-w-[17.5rem] md:mx-0 md:max-w-[19rem]">
      <div
        className="relative bg-[#ece6d8]"
        style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes="304px"
          className="object-contain"
        />
      </div>
      <figcaption className="mt-3 text-[10px] tracking-[0.16em] uppercase text-muted-foreground">
        {photo.caption}
      </figcaption>
    </figure>
  )
}

export default function AboutPage() {
  const [salon, bendel, times] = site.about.photos
  const [first, second] = site.about.lead

  return (
    <div className="pb-24 md:pb-32">
      <header className="mx-auto max-w-[1100px] px-6 text-center md:px-10">
        <p className="font-sans text-[0.8rem] font-semibold tracking-[0.38em] uppercase">
          E.D.E.
        </p>
        <p className="mt-2 font-sans text-[0.7rem] tracking-[0.42em] uppercase text-muted-foreground">
          NYC
        </p>
        <h1 className="sr-only">About E.D.E Studio</h1>
      </header>

      <div className="mx-auto mt-14 flex max-w-[1100px] flex-col gap-16 px-6 md:mt-20 md:gap-24 md:px-10">
        <section className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <p className="max-w-md text-[15px] leading-8 text-foreground/85 md:text-base">
            {first}
          </p>
          {salon ? <PressPlate photo={salon} priority /> : null}
        </section>

        <section className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {bendel ? <PressPlate photo={bendel} /> : null}
          <p className="max-w-md text-[15px] leading-8 text-foreground/85 md:justify-self-end md:text-base">
            {second}
          </p>
        </section>

        {times ? (
          <section className="flex justify-center">
            <PressPlate photo={times} />
          </section>
        ) : null}
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 md:mt-20">
        <TextLink href="/work">View the work</TextLink>
        <TextLink href="/contact">Inquiries</TextLink>
      </div>
    </div>
  )
}
