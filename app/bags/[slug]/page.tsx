import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ViewTransition } from "react"
import { PageIntro } from "@/components/page-intro"
import { TextLink } from "@/components/text-link"
import { WorkImage } from "@/components/work-image"
import { bags, getAdjacentBag, getBag } from "@/lib/content"

type BagDetailProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return bags.map((bag) => ({ slug: bag.slug }))
}

export async function generateMetadata({
  params,
}: BagDetailProps): Promise<Metadata> {
  const { slug } = await params
  const bag = getBag(slug)
  if (!bag) return { title: "Bags" }
  return {
    title: bag.title,
    description: `${bag.title}. ${bag.material}.`,
  }
}

export default async function BagDetailPage({ params }: BagDetailProps) {
  const { slug } = await params
  const bag = getBag(slug)
  if (!bag) notFound()

  const { prev, next } = getAdjacentBag(bag.slug)

  return (
    <div className="pb-24 md:pb-32">
      <PageIntro kicker={bag.collection} title={bag.title}>
        {bag.year} · {bag.material}
      </PageIntro>

      <div className="mx-auto mt-12 grid max-w-[1400px] gap-12 px-6 lg:mt-16 lg:grid-cols-12 lg:gap-16 md:px-10">
        <div className="lg:col-span-7">
          <ViewTransition name={`bag-${bag.slug}`}>
            <WorkImage
              src={bag.image}
              alt={bag.title}
              aspect={bag.aspect}
              fit="contain"
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="bg-transparent"
            />
          </ViewTransition>

          {bag.details.length > 0 ? (
            <div className="mt-6 grid gap-4">
              {bag.details.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[3/2] overflow-hidden bg-[#e8e0d0]"
                >
                  <Image
                    src={src}
                    alt={`Detail of ${bag.title}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="lg:col-span-4 lg:col-start-9 lg:pt-4">
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                Collection
              </dt>
              <dd className="mt-1">{bag.collection}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                Material
              </dt>
              <dd className="mt-1">{bag.material}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                Year
              </dt>
              <dd className="mt-1">{bag.year}</dd>
            </div>
          </dl>
          <p className="mt-10 max-w-sm text-sm leading-7 text-muted-foreground">
            {bag.description}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
            Editions are made in small numbers. Availability may be inquired
            through the studio.
          </p>
          <div className="mt-10">
            <TextLink href="/bags">All bags</TextLink>
          </div>
        </aside>
      </div>

      <nav
        className="mx-auto mt-20 flex max-w-[1400px] items-center justify-between px-6 md:px-10"
        aria-label="Adjacent bags"
      >
        {prev ? (
          <Link
            href={`/bags/${prev.slug}`}
            className="text-[11px] tracking-[0.22em] uppercase text-foreground/60 transition-colors hover:text-foreground"
          >
            Previous
            <span className="mt-1 block font-serif text-lg tracking-normal normal-case italic">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/bags/${next.slug}`}
            className="text-right text-[11px] tracking-[0.22em] uppercase text-foreground/60 transition-colors hover:text-foreground"
          >
            Next
            <span className="mt-1 block font-serif text-lg tracking-normal normal-case italic">
              {next.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  )
}
