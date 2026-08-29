import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Aspect } from "@/lib/content"

type WorkImageProps = {
  src: string
  alt: string
  aspect: Aspect
  priority?: boolean
  sizes?: string
  fit?: "cover" | "contain"
  className?: string
}

export function WorkImage({
  src,
  alt,
  aspect,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  fit = "cover",
  className,
}: WorkImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#e8e0d0]",
        aspect === "portrait" ? "aspect-[2/3]" : "aspect-[3/2]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "transition-[opacity,transform] duration-700 ease-out",
          fit === "cover" ? "object-cover" : "object-contain"
        )}
      />
    </div>
  )
}
