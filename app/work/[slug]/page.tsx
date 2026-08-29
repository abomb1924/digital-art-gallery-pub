import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ViewTransition } from "react"
import { PageIntro } from "@/components/page-intro"
import { TextLink } from "@/components/text-link"
import { WorkImage } from "@/components/work-image"
import { artworks, getAdjacentArtwork, getArtwork } from "@/lib/content"

type WorkDetailProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return artworks.map((work) => ({ slug: work.slug }))
}

export async function generateMetadata({
  params,
}: WorkDetailProps): Promise<Metadata> {
  const { slug } = await params
  const work = getArtwork(slug)
  if (!work) return { title: "Work" }
  return {
    title: work.title,
    description: `${work.title}, ${work.year}. ${work.medium}.`,
  }
}

export default async function WorkDetailPage({ params }: WorkDetailProps) {
  const { slug } = await params
  const work = getArtwork(slug)
  if (!work) notFound()

  const { prev, next } = getAdjacentArtwork(work.slug)
  const gallery = [work.image, ...work.details]

  return (
    <div className="pb-24 md:pb-32">
      <PageIntro kicker={work.collection} title={work.title}>
        {work.year} · {work.medium}
      </PageIntro>

      <div className="mx-auto mt-12 grid max-w-[1400px] gap-12 px-6 lg:mt-16 lg:grid-cols-12 lg:gap-16 md:px-10">
        <div className="lg:col-span-8">
          <ViewTransition name={`work-${work.slug}`}>
            <WorkImage
              src={work.image}
              alt={work.title}
              aspect={work.aspect}
              fit="contain"
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="bg-transparent"
            />
          </ViewTransition>

          {gallery.length > 1 ? (
            <div className="mt-6 grid grid-cols-2 gap-4 md:gap-6">
              {work.details.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[3/2] overflow-hidden bg-[#e8e0d0]"
                >
                  <Image
                    src={src}
                    alt={`Detail of ${work.title}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="lg:col-span-4 lg:pt-4">
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                Year
              </dt>
              <dd className="mt-1">{work.year}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                Medium
              </dt>
              <dd className="mt-1">{work.medium}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                Dimensions
              </dt>
              <dd className="mt-1">{work.dimensions}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                Collection
              </dt>
              <dd className="mt-1">{work.collection}</dd>
            </div>
          </dl>
          <p className="mt-10 max-w-sm text-sm leading-7 text-muted-foreground">
            {work.description}
          </p>
          <div className="mt-10">
            <TextLink href="/work">All work</TextLink>
          </div>
        </aside>
      </div>

      <nav
        className="mx-auto mt-20 flex max-w-[1400px] items-center justify-between px-6 md:px-10"
        aria-label="Adjacent works"
      >
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
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
            href={`/work/${next.slug}`}
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
