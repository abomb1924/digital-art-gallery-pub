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
  location: "New York",
  email: "studio@edestudio.com",
  formspree: "https://formspree.io/f/xppzrlde",
  instagram: {
    handle: "@edestudio",
    href: "https://instagram.com/edestudio",
  },
  about: {
    heading: "About",
    lead: [
      "A bag should be functional; it serves a purpose, yet taken to a higher level a bag can become a piece of art. At EDE we strive to bridge the gap between function and fashion.",
      "Gaining our inspirations from nature as well as our own dreams and visions, we create bags completely by hand. There are many steps involved in the birth of each bag. The first involves creating a strong sculptural form. Next, we choose each skin of leather individually to fulfill the need of the body we have designed. After that, anything is possible; visions become reality. Using handmade metal handles sprinkled with Swarovski rhinestones and pearls, antique clasps and vintage buckles, our bags have a timeless quality distinguishing them from all others. However, the most unique aspect of EDE is the incredible technique we have developed for painting leather. This element takes our bags to the highest level of design.",
    ],
    story:
      "EDE was established in 1999 by mother and daughter-in-law duo Ellen Eichel and Diane Eichel. They have been producing leather accessories out of their Greenwich Village studio for over 25 years. They had been designing hand-painted evening wear for Saks Fifth Avenue for years before deciding to pivot into handbags, which was always a dream of theirs. They have designed handbags for many high-profile celebrities and department stores from all over the world. These bags capture the ongoing energy of New York City and the demand for sophisticated and timeless design.",
    close:
      "A handbag shouldn't just be functional, it should bring pleasure, for it is an extension of you; your personal statement. Your bag should compliment your mood, your personality. Life is constantly changing and evolving and we strive to emulate that energy. At EDE it's simple, we love making bags and it shows.",
    photos: [
      {
        src: "/images/press/american-salon.jpg",
        alt: "American Salon feature on E.D.E Studio handbags, with sculptural leather bags hanging in a retail display",
        caption: "American Salon — In the Bag",
        width: 1652,
        height: 1320,
      },
      {
        src: "/images/press/new-york-magazine.jpg",
        alt: "Henri Bendel advertisement in New York Magazine, November 2001, featuring an E.D.E. Studio handcrafted leather handbag",
        caption: "New York Magazine — Henri Bendel, November 2001",
        width: 1045,
        height: 1650,
      },
      {
        src: "/images/press/new-york-times.jpg",
        alt: "The New York Times Pulse column, November 11, 2001, featuring E.D.E.’s heart-shaped pocketbook",
        caption: "The New York Times — Pulse, November 11, 2001",
        width: 1719,
        height: 1124,
      },
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

export type Handbag = {
  number: string
  slug: string
  name: string
  color: string
  image: string
}

export const handbags: Handbag[] = [
  {
    number: "#7",
    slug: "sm-genghis-khan-saddle-dusty-teal-blue",
    name: "Sm. Genghis Khan Saddle Bag",
    color: "Dusty Teal Blue",
    image: "/images/handbags/01.jpg",
  },
  {
    number: "#9",
    slug: "ede-zipper-clutch-midnight-black",
    name: "E.D.E Zipper Clutch",
    color: "Midnight Black",
    image: "/images/handbags/02.jpg",
  },
  {
    number: "#14",
    slug: "double-pocket-shoulder-camel",
    name: "Double Pocket Shoulder Bag",
    color: "Camel",
    image: "/images/handbags/03.jpg",
  },
  {
    number: "#17",
    slug: "sm-genghis-khan-saddle-jet-black",
    name: "Sm. Genghis Khan Saddle Bag",
    color: "Jet Black",
    image: "/images/handbags/04.jpg",
  },
  {
    number: "#23",
    slug: "large-packing-bag-tie-flaps-red",
    name: "Large Packing Bag With Tie Flaps",
    color: "Red",
    image: "/images/handbags/05.jpg",
  },
  {
    number: "#24",
    slug: "sunflower-circle-powder-blue",
    name: "Sunflower Circle Bag",
    color: "Powder Blue",
    image: "/images/handbags/06.jpg",
  },
  {
    number: "#25",
    slug: "sm-drawstring-hobo-mocha",
    name: "Sm. Drawstring Hobo",
    color: "Mocha",
    image: "/images/handbags/07.jpg",
  },
  {
    number: "#28",
    slug: "lg-saddle-bag-dark-teal-blue",
    name: "Lg. Saddle Bag",
    color: "Dark Teal Blue",
    image: "/images/handbags/08.jpg",
  },
  {
    number: "#31",
    slug: "hunting-bag-black",
    name: "Hunting Bag",
    color: "Black",
    image: "/images/handbags/09.jpg",
  },
  {
    number: "#34",
    slug: "lg-genghis-khan-antique-bronze",
    name: "Lg. Genghis Khan Bag",
    color: "Antique Bronze",
    image: "/images/handbags/10.jpg",
  },
]

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/handbags", label: "Handbags" },
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
