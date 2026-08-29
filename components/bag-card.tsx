import Link from "next/link"
import { ViewTransition } from "react"
import { WorkImage } from "@/components/work-image"
import type { Bag } from "@/lib/content"

type BagCardProps = {
  bag: Bag
  sizes?: string
  priority?: boolean
}

export function BagCard({ bag, sizes, priority }: BagCardProps) {
  return (
    <article>
      <Link href={`/bags/${bag.slug}`} className="group block">
        <ViewTransition name={`bag-${bag.slug}`}>
          <WorkImage
            src={bag.image}
            alt={bag.title}
            aspect={bag.aspect}
            sizes={sizes}
            priority={priority}
            className="group-hover:[&_img]:opacity-85"
          />
        </ViewTransition>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-serif text-xl italic tracking-wide text-foreground md:text-[1.35rem]">
            {bag.title}
          </h3>
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            {bag.collection}
          </p>
        </div>
        <p className="mt-1 text-[12px] tracking-wide text-muted-foreground">
          {bag.material}
        </p>
      </Link>
    </article>
  )
}
