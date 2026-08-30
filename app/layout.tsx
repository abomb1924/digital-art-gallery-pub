import type { Metadata } from "next"
import { Cormorant_Garamond, Geist } from "next/font/google"
import { ViewTransition } from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { site } from "@/lib/content"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description:
    "E.D.E Studio — handmade handbags from New York. Sculptural leather forms, each considered as an object first.",
  metadataBase: new URL("https://edestudio.com"),
  openGraph: {
    title: site.name,
    description: site.tagline,
    images: ["/brand/silhouette.png"],
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorant.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <ViewTransition>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ViewTransition>
      </body>
    </html>
  )
}
