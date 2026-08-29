import Link from "next/link"
import { ViewTransition } from "react"
import { WorkImage } from "@/components/work-image"
import type { Artwork } from "@/lib/content"

type ArtworkCardProps = {
  work: Artwork
  sizes?: string
  priority?: boolean
}

export function ArtworkCard({ work, sizes, priority }: ArtworkCardProps) {
  return (
    <article>
      <Link href={`/work/${work.slug}`} className="group block">
        <ViewTransition name={`work-${work.slug}`}>
          <WorkImage
            src={work.image}
            alt={work.title}
            aspect={work.aspect}
            sizes={sizes}
            priority={priority}
            className="group-hover:[&_img]:opacity-85"
          />
        </ViewTransition>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-serif text-xl italic tracking-wide text-foreground md:text-[1.35rem]">
            {work.title}
          </h3>
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            {work.collection}, {work.year}
          </p>
        </div>
      </Link>
    </article>
  )
}
