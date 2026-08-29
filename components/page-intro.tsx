import { cn } from "@/lib/utils"

type PageIntroProps = {
  kicker?: string
  title: string
  children?: React.ReactNode
  className?: string
}

export function PageIntro({ kicker, title, children, className }: PageIntroProps) {
  return (
    <header className={cn("mx-auto max-w-[1400px] px-6 md:px-10", className)}>
      {kicker ? (
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
          {kicker}
        </p>
      ) : null}
      <h1 className="mt-3 font-serif text-4xl tracking-wide text-foreground md:text-5xl">
        {title}
      </h1>
      {children ? (
        <div className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground md:text-[15px]">
          {children}
        </div>
      ) : null}
    </header>
  )
}
