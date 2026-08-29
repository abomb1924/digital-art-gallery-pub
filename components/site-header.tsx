"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { nav, site } from "@/lib/content"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [menuPath, setMenuPath] = useState(pathname)

  if (menuPath !== pathname) {
    setMenuPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
    <header className="sticky top-0 z-50 bg-background">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-7 md:px-10 md:py-8">
        <Link
          href="/"
          className="font-serif text-[1.35rem] leading-none tracking-[0.18em] text-foreground md:text-[1.45rem]"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[11px] tracking-[0.28em] uppercase transition-colors duration-300",
                  active
                    ? "text-foreground"
                    : "text-foreground/45 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="text-[11px] tracking-[0.28em] uppercase text-foreground/70 transition-colors hover:text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-0 z-40 bg-background md:hidden"
      >
        <div className="flex h-full flex-col px-6 pt-28">
          <nav className="flex flex-col gap-7" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif text-4xl tracking-wide text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
