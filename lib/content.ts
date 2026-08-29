export type Aspect = "portrait" | "landscape"

export type Artwork = {
  slug: string
  title: string
  year: number
  collection: string
  medium: string
  dimensions: string
  description: string
  image: string
  details: string[]
  aspect: Aspect
  featured?: boolean
  hero?: boolean
}

export type Bag = {
  slug: string
  title: string
  collection: string
  material: string
  year: number
  description: string
  image: string
  details: string[]
  aspect: Aspect
  featured?: boolean
}

export const site = {
  name: "E.D.E Studio",
  shortName: "E.D.E",
  tagline: "Handbags, handmade.",
  location: "Studio",
  email: "studio@edestudio.com",
  instagram: {
    handle: "@edestudio",
    href: "https://instagram.com/edestudio",
  },
  about: {
    heading: "About",
    portrait: "/images/studio-portrait.jpg",
    body: [
      "E.D.E Studio is a practice of handmade handbags and related forms. Each piece is considered as an object first — a surface, a weight, a presence — shaped slowly and in small numbers.",
      "The work extends into painting and mixed media on linen. Pigment, leather, and cloth share a quiet language of ochre, bone, and charcoal. Nothing is made to shout. Everything is made to be held, worn, or lived with.",
    ],
  },
}

export const artworks: Artwork[] = [
  {
    slug: "ochre-field",
    title: "Ochre Field",
    year: 2025,
    collection: "Ochre Cycle",
    medium: "Pigment and oil on linen",
    dimensions: "160 × 110 cm",
    description:
      "A wide ground of raw sienna and bone, held by a few charcoal marks. The painting was built in thin, successive veils so the linen remains present in the lightest passages.",
    image: "/images/ochre-field.jpg",
    details: ["/images/ochre-field-detail.jpg"],
    aspect: "landscape",
    featured: true,
    hero: true,
  },
  {
    slug: "threshold",
    title: "Threshold II",
    year: 2025,
    collection: "Threshold",
    medium: "Mixed media on linen",
    dimensions: "140 × 90 cm",
    description:
      "A pale vertical band interrupts a field of charcoal and umber. The work is concerned with pause — the moment before a room changes temperature.",
    image: "/images/threshold.jpg",
    details: ["/images/threshold-detail.jpg"],
    aspect: "portrait",
    featured: true,
    hero: true,
  },
  {
    slug: "still-hours",
    title: "Still Hours",
    year: 2024,
    collection: "Still Hours",
    medium: "Oil, graphite, and pigment on linen",
    dimensions: "120 × 85 cm",
    description:
      "A quiet surface of dusty clay and bone. Graphite lines are laid in and then nearly taken away, leaving a record of looking rather than drawing.",
    image: "/images/still-hours.jpg",
    details: [],
    aspect: "landscape",
  },
  {
    slug: "umbra",
    title: "Umbra",
    year: 2025,
    collection: "Threshold",
    medium: "Oil and charcoal on linen",
    dimensions: "150 × 100 cm",
    description:
      "A dense, low painting. Umber and black are scraped back to a rust ridge at the lower third — a weight that sits in the room rather than on the wall.",
    image: "/images/umbra.jpg",
    details: ["/images/umbra-detail.jpg"],
    aspect: "portrait",
    featured: true,
    hero: true,
  },
  {
    slug: "pale-ground",
    title: "Pale Ground",
    year: 2024,
    collection: "Ochre Cycle",
    medium: "Pigment on linen",
    dimensions: "110 × 80 cm",
    description:
      "Nearly empty. Faint ochre stains and a single charcoal horizon. The work asks for slow looking and a quiet wall.",
    image: "/images/pale-ground.jpg",
    details: [],
    aspect: "landscape",
  },
  {
    slug: "night-study",
    title: "Night Study",
    year: 2025,
    collection: "Still Hours",
    medium: "Oil and gold-ochre on linen",
    dimensions: "130 × 85 cm",
    description:
      "A nocturnal field in muted charcoal, marked with thin ochre scratches. Not a picture of night so much as the temperature of it.",
    image: "/images/night-study.jpg",
    details: [],
    aspect: "portrait",
  },
  {
    slug: "linen-fold",
    title: "Linen Fold",
    year: 2024,
    collection: "Ochre Cycle",
    medium: "Oil on canvas",
    dimensions: "125 × 90 cm",
    description:
      "Planes of clay, olive-grey, and taupe overlap like cloth. The painting is a study of weight and drape, made without depicting a garment.",
    image: "/images/linen-fold.jpg",
    details: [],
    aspect: "landscape",
  },
  {
    slug: "after-rain",
    title: "After Rain",
    year: 2023,
    collection: "Still Hours",
    medium: "Watercolour, pigment, and linen",
    dimensions: "100 × 70 cm",
    description:
      "Washed greys and a single oxidized stain that has bled downward. The work was left for days between layers, so the linen could take the water on its own terms.",
    image: "/images/after-rain.jpg",
    details: [],
    aspect: "portrait",
  },
  {
    slug: "copper-silence",
    title: "Copper Silence",
    year: 2024,
    collection: "Threshold",
    medium: "Oil and mineral pigment on linen",
    dimensions: "145 × 100 cm",
    description:
      "Oxidized greens and warm rust sit in a mineral field. The palette comes from metal, clay, and the pale of old plaster.",
    image: "/images/copper-silence.jpg",
    details: [],
    aspect: "landscape",
  },
  {
    slug: "field-note",
    title: "Field Note IV",
    year: 2023,
    collection: "Ochre Cycle",
    medium: "Mixed media on linen",
    dimensions: "90 × 65 cm",
    description:
      "A studio note enlarged. Loose ochre structure and charcoal remarks, kept close to the scale of a hand even as the linen grew.",
    image: "/images/field-note.jpg",
    details: [],
    aspect: "portrait",
  },
]

export const bags: Bag[] = [
  {
    slug: "vessel",
    title: "Vessel",
    collection: "Vessel",
    material: "Vegetable-tanned leather",
    year: 2025,
    description:
      "A slouching tote in natural hide. The form is a container in the simplest sense — an object that stands in a room the way a vessel stands on a table.",
    image: "/images/vessel-tote.jpg",
    details: ["/images/vessel-tote-detail.jpg"],
    aspect: "portrait",
    featured: true,
  },
  {
    slug: "fold",
    title: "Fold",
    collection: "Vessel",
    material: "Bone vegetable-tanned leather",
    year: 2025,
    description:
      "A clutch built from a single geometric fold. The crease is the drawing; hardware is kept almost entirely away.",
    image: "/images/fold-clutch.jpg",
    details: ["/images/fold-clutch-detail.jpg"],
    aspect: "landscape",
    featured: true,
  },
  {
    slug: "studio-shopper",
    title: "Studio Shopper",
    collection: "Editions",
    material: "Undyed canvas and ochre leather",
    year: 2024,
    description:
      "A large carry in undyed canvas with ochre handles. Made for the studio and for leaving it — the same visual language as the paintings, taken into the street.",
    image: "/images/studio-shopper.jpg",
    details: [],
    aspect: "portrait",
    featured: true,
  },
  {
    slug: "arc",
    title: "Arc",
    collection: "Editions",
    material: "Charcoal-brown leather",
    year: 2024,
    description:
      "A shoulder bag whose silhouette is a single arc. Quiet hardware, a long strap, a form meant to be seen in profile as much as in use.",
    image: "/images/arc-shoulder.jpg",
    details: [],
    aspect: "portrait",
    featured: true,
  },
]

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const

export function getArtwork(slug: string) {
  return artworks.find((work) => work.slug === slug)
}

export function getBag(slug: string) {
  return bags.find((bag) => bag.slug === slug)
}

export function getAdjacentArtwork(slug: string) {
  const index = artworks.findIndex((work) => work.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: artworks[index - 1] ?? null,
    next: artworks[index + 1] ?? null,
  }
}

export function getAdjacentBag(slug: string) {
  const index = bags.findIndex((bag) => bag.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: bags[index - 1] ?? null,
    next: bags[index + 1] ?? null,
  }
}

export const featuredWorks = artworks.filter((work) => work.featured)
export const heroWorks = artworks.filter((work) => work.hero)
export const featuredBags = bags.filter((bag) => bag.featured)
