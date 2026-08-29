import type { Metadata } from "next"
import { ArtworkCard } from "@/components/artwork-card"
import { PageIntro } from "@/components/page-intro"
import { artworks } from "@/lib/content"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Paintings and mixed-media works from the studio of Maren Vale — ochre, bone, and charcoal on linen.",
}

export default function WorkPage() {
  return (
    <div className="pb-24 md:pb-32">
      <PageIntro kicker="Archive" title="Work">
        Paintings and mixed-media works, arranged as they stand in the studio:
        large fields, quiet studies, and the spaces between.
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
    </div>
  )
}
