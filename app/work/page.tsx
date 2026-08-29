import type { Metadata } from "next"
import { ArtworkCard } from "@/components/artwork-card"
import { BagCard } from "@/components/bag-card"
import { PageIntro } from "@/components/page-intro"
import { artworks, bags } from "@/lib/content"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Handmade handbags and studio works from E.D.E Studio — leather, canvas, and paintings on linen.",
}

export default function WorkPage() {
  return (
    <div className="pb-24 md:pb-32">
      <PageIntro kicker="Archive" title="Work">
        Handbags and studio works, shown as they stand: form, material, and the
        spaces between.
      </PageIntro>

      <div className="mx-auto mt-14 grid max-w-[1400px] gap-x-8 gap-y-14 px-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16 md:px-10">
        {artworks.map((work, index) => (
          <ArtworkCard
            key={work.slug}
            work={work}
            priority={index < 3}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          />
        ))}
      </div>

      <section
        id="bags"
        className="mx-auto mt-28 max-w-[1400px] scroll-mt-28 px-6 md:mt-36 md:px-10"
      >
        <div className="max-w-xl">
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
            Handbags
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-wide md:text-4xl">
            Wearable forms
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-[15px]">
            Bags as an extension of the practice — functional pieces shaped by
            the same visual language as the studio works.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:gap-x-12">
          {bags.map((bag, index) => (
            <BagCard
              key={bag.slug}
              bag={bag}
              priority={index < 2}
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </div>
      </section>
    </div>
  )
}
