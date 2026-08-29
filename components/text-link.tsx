import Link from "next/link"
import { cn } from "@/lib/utils"

type TextLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function TextLink({ href, children, className, external }: TextLinkProps) {
  const classes = cn(
    "inline-block text-[11px] tracking-[0.24em] uppercase text-foreground/70 underline decoration-foreground/20 underline-offset-[6px] transition-colors duration-300 hover:text-foreground hover:decoration-foreground/60",
    className
  )

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
