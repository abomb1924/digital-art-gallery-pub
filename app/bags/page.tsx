import type { Metadata } from "next"
import { BagCard } from "@/components/bag-card"
import { PageIntro } from "@/components/page-intro"
import { bags } from "@/lib/content"

export const metadata: Metadata = {
  title: "Bags",
  description:
    "Sculptural bags from Maren Vale — leather and canvas editions shaped by the same language as the paintings.",
}

export default function BagsPage() {
  return (
    <div className="pb-24 md:pb-32">
      <PageIntro kicker="Collection" title="Bags">
        Bags as an extension of the practice — functional pieces shaped by the
        same visual language as the artworks. Leather, canvas, and quiet
        hardware, considered as objects first.
      </PageIntro>

      <div className="mx-auto mt-14 grid max-w-[1400px] gap-x-8 gap-y-16 px-6 sm:grid-cols-2 md:mt-20 lg:gap-x-12 md:px-10">
        {bags.map((bag, index) => (
          <BagCard
            key={bag.slug}
            bag={bag}
            priority={index < 2}
            sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
          />
        ))}
      </div>
    </div>
  )
}
