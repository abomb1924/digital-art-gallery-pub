import type { Metadata } from "next"
import Image from "next/image"
import { handbags } from "@/lib/content"

export const metadata: Metadata = {
  title: "Handbags",
  description:
    "Handmade handbags from E.D.E Studio — sculptural leather forms, each considered as an object first.",
}

export default function HandbagsPage() {
  return (
    <div className="pb-24 md:pb-32">
      <header className="mx-auto max-w-[1180px] px-6 md:px-10">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
          Collection
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-wide md:text-5xl">
          Handbags
        </h1>
      </header>

      <div className="mx-auto mt-14 grid max-w-[1180px] gap-x-16 gap-y-20 px-6 sm:grid-cols-2 md:mt-20 md:gap-y-28 md:px-10">
        {handbags.map((bag, index) => (
          <article key={bag.slug}>
            <div className="relative aspect-square bg-white p-6 md:p-10">
              <div className="relative h-full w-full">
                <Image
                  src={bag.image}
                  alt={`${bag.name} in ${bag.color}`}
                  fill
                  priority={index < 4}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex items-start justify-between gap-6">
              <p className="pt-1 font-sans text-[11px] tracking-[0.28em] text-muted-foreground">
                {bag.number}
              </p>
              <div className="text-right">
                <p className="font-serif text-xl italic tracking-wide md:text-[1.35rem]">
                  {bag.name}
                </p>
                <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                  {bag.color}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
