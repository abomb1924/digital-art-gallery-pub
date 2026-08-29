import { site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-6 py-10 text-[11px] tracking-[0.18em] uppercase text-muted-foreground md:flex-row md:items-center md:px-10">
        <p>
          {site.name}
          <span className="mx-2 text-foreground/20">·</span>
          {site.location}
        </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
