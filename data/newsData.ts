export type NewsMeta = {
  id: string;

  /* SEO */
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  altText?: string;

  /* Display */
  image: string;
  date: string;
  updatedAt: string;
  author: string;
  category: string;
  readTime: string;
  featured?: boolean;
  tags?: string[];

  /* Extra */
  location?: string;
  newsType?: string;

  /* Structured Data */
  schemaMarkup?: Record<string, unknown>;
  faqSchema?: Record<string, unknown>;
};

const NewsData: NewsMeta[] = [
  {
    id: "news-5",

    /* SEO */
    title:
      "Greater Noida Circle Rates Hiked for First Time in 9 Years — What It Means for Luxury Buyers at CRC The Peridona",
    slug: "greater-noida-circle-rate-hike-crc-the-peridona-2026",
    excerpt:
      "Greater Noida Authority approved a 3.58% circle rate hike after 9 years. Here is what the revision means for stamp duty, valuations and buyer sentiment at CRC The Peridona, Jaypee Greens — fresh off its Dubai unveiling and Rockwell Group clubhouse partnership.",
    metaTitle:
      "Greater Noida Circle Rate Hike 2026 | Impact on CRC The Peridona Buyers",
    metaDescription:
      "Greater Noida circle rates increased by 3.58% after 9 years. Explore how the revision affects luxury buyers at CRC The Peridona, Jaypee Greens — CRC Group's ultra-luxury project unveiled in Dubai with a Rockwell Group-designed clubhouse.",
    keywords: [
      "Greater Noida circle rate hike",
      "CRC The Peridona",
      "CRC The Peridona price",
      "CRC Peridona Jaypee Greens",
      "luxury apartments Jaypee Greens",
      "Jewar Airport real estate",
      "Yamuna Expressway property",
      "CRC Group",
      "circle rate 2026",
    ],
    canonical:
      "https://www.crcperidona.in/news/greater-noida-circle-rate-hike-crc-the-peridona-2026",

    /* Display */
    image: "/news-1.webp",
    altText:
      "Jaypee Greens golf township in Greater Noida, home of CRC The Peridona, after the circle rate hike announcement",
    date: "2026-05-06",
    updatedAt: "2026-05-06",
    author: "Admin",
    category: "Real Estate News",
    readTime: "6 min read",
    featured: true,
    tags: [
      "greater noida",
      "circle rate",
      "crc the peridona",
      "luxury residences",
      "real estate",
      "investment",
      "yamuna expressway",
    ],

    /* Extra */
    location: "Greater Noida",
    newsType: "Market",

    /* Structured Data */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Greater Noida Circle Rates Hiked for First Time in 9 Years — What It Means for Luxury Buyers at CRC The Peridona",
      description:
        "Greater Noida Authority approved a 3.58% circle rate hike after 9 years. What the revision means for stamp duty, valuations and buyer sentiment at CRC The Peridona, Jaypee Greens.",
      image: ["https://www.crcperidona.in/news-1.webp"],
      datePublished: "2026-05-06",
      dateModified: "2026-05-06",
      author: {
        "@type": "Person",
        name: "Admin",
      },
      publisher: {
        "@type": "Organization",
        name: "CRC The Peridona",
        logo: {
          "@type": "ImageObject",
          url: "https://www.crcperidona.in/homeHero.webp",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.crcperidona.in/news/greater-noida-circle-rate-hike-crc-the-peridona-2026",
      },
      articleSection: "Real Estate",
      keywords:
        "Greater Noida circle rate, CRC The Peridona, luxury residences, Jaypee Greens, Jewar Airport, Yamuna Expressway",
      about: [
        {
          "@type": "Place",
          name: "Greater Noida",
        },
        {
          "@type": "Residence",
          name: "CRC The Peridona",
        },
      ],
    },
  },
];

export default NewsData;
