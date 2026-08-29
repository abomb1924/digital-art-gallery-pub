"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import type { Artwork } from "@/lib/content"
import { cn } from "@/lib/utils"

type HeroProps = {
  works: Artwork[]
}

export function Hero({ works }: HeroProps) {
  const [index, setIndex] = useState(0)
  const current = works[index]

  useEffect(() => {
    if (works.length < 2) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % works.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [works.length])

  if (!current) return null

  return (
    <section className="px-6 md:px-10">
      <div className="relative mx-auto max-w-[1400px]">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e0d0] sm:aspect-[5/4] lg:aspect-[16/9]">
          {works.map((work, i) => (
            <Link
              key={work.slug}
              href={`/work/${work.slug}`}
                className={cn(
                "absolute inset-0 transition-opacity duration-[1400ms] ease-in-out",
                i === index
                  ? "z-10 opacity-100"
                  : "pointer-events-none opacity-0"
              )}
              tabIndex={i === index ? 0 : -1}
              aria-hidden={i !== index}
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-serif text-5xl tracking-wide text-foreground sm:text-6xl md:text-7xl">
              Maren Vale
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground md:text-[15px]">
              Contemporary works and wearable forms.
            </p>
          </div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            {current.title}, {current.year}
          </p>
        </div>
      </div>
    </section>
  )
}
