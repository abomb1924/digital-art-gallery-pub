import type { Metadata } from "next"
import Image from "next/image"
import { TextLink } from "@/components/text-link"
import { site } from "@/lib/content"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About",
  description: site.about.story,
}

type PressPhoto = (typeof site.about.photos)[number]

function PressPlate({
  photo,
  priority,
  size = "sm",
}: {
  photo: PressPhoto
  priority?: boolean
  size?: "sm" | "md" | "lg"
}) {
  return (
    <figure
      className={cn(
        "mx-auto w-full md:mx-0",
        size === "sm" && "max-w-[17.5rem] md:max-w-[19rem]",
        size === "md" && "max-w-[22rem] md:max-w-[26rem]",
        size === "lg" && "max-w-[38rem] md:max-w-[46rem]"
      )}
    >
      <div
        className="relative bg-[#ece6d8]"
        style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={
            size === "lg"
              ? "(min-width: 768px) 736px, 90vw"
              : size === "md"
                ? "(min-width: 768px) 416px, 70vw"
                : "304px"
          }
          className="object-contain"
        />
      </div>
      <figcaption className="mt-3 text-[10px] tracking-[0.16em] uppercase text-muted-foreground">
        {photo.caption}
      </figcaption>
    </figure>
  )
}

function TextSquare({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[22rem] w-full max-w-[26rem] items-center bg-[#e6ddd0] p-8 md:min-h-[24rem] md:p-10">
      <p className="text-[14px] leading-7 text-foreground/90 md:text-[15px] md:leading-8">
        {children}
      </p>
    </div>
  )
}

export default function AboutPage() {
  const [salon, bendel, times] = site.about.photos

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
          <TextSquare>{site.about.story}</TextSquare>
          {salon ? <PressPlate photo={salon} size="md" priority /> : null}
        </section>

        <section className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center gap-10 md:items-start">
            {bendel ? <PressPlate photo={bendel} /> : null}
            {times ? <PressPlate photo={times} size="lg" /> : null}
          </div>
          <div className="flex flex-col gap-3 md:justify-self-end">
            {site.about.lead.map((paragraph) => (
              <TextSquare key={paragraph}>{paragraph}</TextSquare>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 md:mt-20">
        <TextLink href="/handbags">View the handbags</TextLink>
        <TextLink href="/contact">Inquiries</TextLink>
      </div>
    </div>
  )
}
