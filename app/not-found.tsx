import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-wide">
        This page has been moved or does not exist.
      </h1>
      <Link
        href="/"
        className="mt-10 text-[11px] tracking-[0.24em] uppercase underline decoration-foreground/25 underline-offset-[6px] transition-colors hover:decoration-foreground/70"
      >
        Return home
      </Link>
    </div>
  )
}
