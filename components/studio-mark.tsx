import Image from "next/image"
import { cn } from "@/lib/utils"

type StudioMarkProps = {
  className?: string
}

export function StudioMark({ className }: StudioMarkProps) {
  return (
    <div
      className={cn(
        "flex w-full max-w-[min(22rem,86vw)] flex-col items-center text-center text-foreground",
        className
      )}
    >
      <div className="relative h-[min(38vh,19rem)] w-full">
        <Image
          src="/brand/silhouette.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 200px, 280px"
          className="object-contain object-bottom"
        />
      </div>
      <p className="mt-8 font-sans text-[1.65rem] font-semibold tracking-[0.22em] uppercase sm:mt-10 sm:text-[1.85rem] md:text-[2rem]">
        E.D.E Studio
      </p>
      <p className="mt-3 font-serif text-[0.95rem] tracking-[0.42em] uppercase sm:text-[1.05rem]">
        Handbags
      </p>
      <p className="mt-2 font-serif text-[0.95rem] tracking-[0.08em] italic sm:text-[1.05rem]">
        *handmade*
      </p>
    </div>
  )
}
