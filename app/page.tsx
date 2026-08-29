import Image from "next/image"
import { ArtworkCard } from "@/components/artwork-card"
import { BagCard } from "@/components/bag-card"
import { Hero } from "@/components/hero"
import { TextLink } from "@/components/text-link"
import { featuredBags, featuredWorks, heroWorks, site } from "@/lib/content"

export default function HomePage() {
  const [heroLead, ...heroRest] = featuredWorks
  const bagsPreview = featuredBags.slice(0, 3)

  return (
    <div className="flex flex-col gap-28 pb-24 md:gap-36 md:pb-32">
      <Hero works={heroWorks} />

      <section className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
              Selected works
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-wide md:text-4xl">
              From the studio
            </h2>
          </div>
          <TextLink href="/work">View all work</TextLink>
        </div>

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-12">
          {heroLead ? (
            <div className="md:col-span-2">
              <ArtworkCard
                work={heroLead}
                priority
                sizes="(min-width: 1400px) 1320px, 100vw"
              />
            </div>
          ) : null}
          {heroRest.map((work) => (
            <ArtworkCard
              key={work.slug}
              work={work}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="mb-10 max-w-xl md:mb-14">
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
            Bags
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-wide md:text-4xl">
            Wearable forms
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-[15px]">
            Bags as an extension of the practice — functional pieces shaped by
            the same visual language as the artworks.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {bagsPreview.map((bag) => (
            <BagCard
              key={bag.slug}
              bag={bag}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </div>

        <div className="mt-10">
          <TextLink href="/bags">View the collection</TextLink>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative aspect-[2/3] overflow-hidden bg-[#e8e0d0] lg:col-span-5">
            <Image
              src={site.about.portrait}
              alt={`${site.name} in the Lisbon studio`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
              {site.about.heading}
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-wide md:text-4xl">
              The studio
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-muted-foreground md:text-[15px]">
              {site.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 text-center md:px-10">
        <div className="mx-auto max-w-lg">
          <h2 className="font-serif text-3xl tracking-wide md:text-4xl">
            Inquiries
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-[15px]">
            For inquiries, collaborations, or commissions, get in touch.
          </p>
          <div className="mt-8">
            <TextLink href="/contact">Write to the studio</TextLink>
          </div>
        </div>
      </section>
    </div>
  )
}
