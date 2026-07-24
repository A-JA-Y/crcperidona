export type BlogMeta = {
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
  tags: string[];
  featured: boolean;

  /* JSON-LD */
  schemaMarkup?:
  | Record<string, unknown>
  | Record<string, unknown>[];
  faqSchema?: Record<string, unknown>;
};

export const blogData: BlogMeta[] = [
  {
    id: "blog-1",

    /* SEO */
    title: "CRC The Peridona Jaypee Greens Greater Noida: Complete Buyer's Guide 2026",
    slug: "crc-the-peridona-greater-noida-buyers-guide-2026",
    excerpt:
      "Ultra-luxury residences, price, The Club, The Rooftop, global design team and everything you need to know about CRC The Peridona at Jaypee Greens, Greater Noida.",
    metaTitle:
      "CRC The Peridona Greater Noida Price 2026 | 4, 4.5 & 5.5 BHK | Buyer Guide",
    metaDescription:
      "Explore CRC The Peridona at Jaypee Greens, Greater Noida — 341 ultra-luxury residences across 7 towers, tentative price ₹12.5 Cr* onwards, 1.8 lakh sq ft clubhouse, 75,500 sq ft rooftop, Greg Norman golf course township and a global design team, in this complete 2026 buyer's guide.",
    keywords: [
      "CRC The Peridona",
      "CRC The Peridona Greater Noida",
      "CRC Peridona Jaypee Greens",
      "CRC The Peridona price",
      "luxury apartments Jaypee Greens",
      "golf course residences Greater Noida",
      "CRC Group",
    ],
    canonical:
      "https://www.crcperidona.in/blogs/crc-the-peridona-greater-noida-buyers-guide-2026",

    /* Display */
    image: "/blog-1.webp",
    altText: "CRC The Peridona luxury residential towers overlooking the Jaypee Greens golf township in Greater Noida",
    date: "2026-04-25",
    updatedAt: "2026-04-25",
    author: "Admin",
    category: "Real Estate",
    readTime: "12 min read",
    tags: ["greater noida", "luxury residences", "crc group", "jaypee greens"],
    featured: true,

    /* JSON-LD */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "CRC The Peridona Jaypee Greens Greater Noida Buyer Guide 2026",
      author: { "@type": "Person", name: "Admin" },
      publisher: { "@type": "Organization", name: "CRC The Peridona" },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the starting price of CRC The Peridona in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The tentative price at CRC The Peridona starts at ₹12.5 Cr* onwards. Final pricing depends on configuration, floor, and view. *Indicative; subject to approved building plan."
          }
        },
        {
          "@type": "Question",
          "name": "Where is CRC The Peridona located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CRC The Peridona is located at C1, Jaypee Greens, Greater Noida, Uttar Pradesh 201310 — inside the 452-acre Jaypee Greens golf township. Primary access is via the Narmada Gate, opposite the township's practice range."
          }
        },
        {
          "@type": "Question",
          "name": "What configurations does CRC The Peridona offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Peridona offers 4 BHK, 4.5 BHK and 5.5 BHK residences starting from 4,950 sq ft. Configurations listed on the official microsite include 4 BHK — 4,900 sq ft, 5 BHK — 5,600 sq ft, 4 BHK — 6,700 sq ft, and penthouses (indicative, subject to approved plan)."
          }
        },
        {
          "@type": "Question",
          "name": "How many residences and towers does CRC The Peridona have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CRC The Peridona comprises just 341 residences across 7 towers of 43 floors each, on 6.80 acres inside the Jaypee Greens township. Towers rise to approximately 160 m* with a 330 m* long front facade."
          }
        },
        {
          "@type": "Question",
          "name": "What is the One Floor One Apartment concept at The Peridona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Peridona follows a One Floor One Apartment* concept with private lift lobbies, so every residence enjoys two-side views — the golf course on one side and the 60-acre nature park on the other. *Indicative; subject to approved building plan."
          }
        },
        {
          "@type": "Question",
          "name": "What golf course does the Jaypee Greens township offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jaypee Greens features a 130-acre, 18-hole Greg Norman Design Championship Course, complemented by a 60-acre nature park and a 10-acre practice range, all within the 452-acre township with 25-year-old green cover."
          }
        },
        {
          "@type": "Question",
          "name": "What amenities does The Club at CRC The Peridona include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Club spans 1.8 lakh sq ft across 3 levels and includes 3 theme swimming pools and waterbodies, an ice rink, 2 grand cinema theatres, a grand dining hall and ballroom, private dining restaurant, The Jazz Club, The Library & Tea Lounge, a world-class gymnasium, karaoke club, bowling alley, indoor flow ride, and a private observatory above the city."
          }
        },
        {
          "@type": "Question",
          "name": "What is on The Rooftop at CRC The Peridona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Rooftop covers 75,500 sq ft, stretching 300 m lengthwise, with 3 theme waterbodies, a bar and lounge, an event area with live screen, kids play area, barbeque and lounge, jogging track, the Miyawaki Forest Observatory, The Wing Observatory, a yoga deck and a padel ball court."
          }
        },
        {
          "@type": "Question",
          "name": "How far is CRC The Peridona from the Noida International Airport (Jewar)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jewar Noida International Airport is approximately 35 km away with direct access via the Yamuna Expressway. Delhi IGI Airport is around 55 km, and Pari Chowk is about 2 km from the township."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the design team behind CRC The Peridona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CRC Group has assembled a global roster: Killa Design (Dubai) as principal/concept architect, Gensler (USA) as resident architect, Rockwell Group (New York) for interiors and the clubhouse, SWA Group (USA) for landscape, CBM Engineers and Thornton Tomasetti (USA) for structure, Mace (UK) as project management consultant, B L Kashyap as construction partner, and L'Observatoire (USA) for lighting."
          }
        },
        {
          "@type": "Question",
          "name": "What specifications do the residences at The Peridona feature?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Residences feature imported marble in living and dining areas, engineered wood in bedrooms, modular kitchens with premium fittings and built-in appliances, European-brand sanitaryware and CP fittings, double-glazed thermally broken aluminium windows, VRV/VRF air conditioning, smart-home provisions, 24x7 multi-tier security, video door phones, fire safety systems, and high-speed lifts with private lobby access."
          }
        },
        {
          "@type": "Question",
          "name": "Is Jaypee Greens a low-density township?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The 452-acre Jaypee Greens township holds only around 3,600 units in total — a remarkably low density for Delhi NCR — along with enhanced air quality versus the surrounding neighbourhood thanks to its 25-year-old green cover."
          }
        },
        {
          "@type": "Question",
          "name": "What schools and daily conveniences are near CRC The Peridona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jaypee Public School is within walking distance, with DPS and Amity nearby. The township offers hospitals, retail shops, a medicare center, restaurants, a food court, co-working space, guest rooms, a hypermarket, an Integrated Sports Complex, the Boomerang Clubhouse and practice range, and the Jaypee Greens Golf & Spa Resort."
          }
        },
        {
          "@type": "Question",
          "name": "What is the RERA registration status of CRC The Peridona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CRC The Peridona is registered under UP RERA with registration number UPRERAPRJ298067/05/2025, verifiable at www.up-rera.in."
          }
        },
        {
          "@type": "Question",
          "name": "Can NRIs purchase a residence at CRC The Peridona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. NRIs can purchase residential property at CRC The Peridona under existing FEMA regulations. The sales team can guide NRI buyers through documentation and payment processes — call +91 7304216059 for assistance."
          }
        },
        {
          "@type": "Question",
          "name": "How do I download the CRC The Peridona brochure or book a site visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Submit the enquiry form on this website to download the official brochure instantly, or call +91 7304216059 to schedule a private preview at the experience center and a guided site visit through the Jaypee Greens township."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the developer of CRC The Peridona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CRC The Peridona is developed by CRC Group — a Delhi NCR developer led by Founder & CEO Kunal Bhalla with the positioning 'Building Values', known for projects such as CRC Sublimis, CRC Joyous, CRC The Flagship and CRC Maesta. The Peridona is CRC's flagship ultra-luxury project at Jaypee Greens, Greater Noida."
          }
        }
      ]

    }
  },
  {
    id: "jewar-airport-crc-the-peridona-2026",

    /* SEO */
    title:
      "Jewar Airport & the Rise of Ultra-Luxury: Why CRC The Peridona Is NCR's Most Watched Investment of 2026",

    slug:
      "jewar-airport-crc-the-peridona-investment-2026",

    excerpt:
      "How the Noida International Airport at Jewar, NCR's luxury housing upcycle, and a limited inventory of 341 residences make CRC The Peridona at Jaypee Greens one of 2026's most compelling investment stories.",

    metaTitle:
      "Jewar Airport & CRC The Peridona: NCR Luxury Investment Outlook 2026",

    metaDescription:
      "Jewar Noida International Airport (~35 km via Yamuna Expressway) is reshaping Greater Noida real estate. Explore why CRC The Peridona — 341 low-density residences at Jaypee Greens with a global design team — is 2026's standout luxury investment.",

    keywords: [
      "CRC The Peridona",
      "CRC The Peridona Greater Noida",
      "CRC Peridona Jaypee Greens",
      "CRC The Peridona price",
      "CRC Group",
      "Jewar Airport property investment",
      "Noida International Airport real estate",
      "Yamuna Expressway property",
      "luxury apartments Jaypee Greens",
      "golf course residences Greater Noida",
      "Greater Noida luxury investment 2026",
      "NCR real estate investment 2026"
    ],

    canonical:
      "https://www.crcperidona.in/blogs/jewar-airport-crc-the-peridona-investment-2026",

    altText:
      "CRC The Peridona towers at Jaypee Greens Greater Noida near the Greg Norman golf course, in the Jewar airport corridor",

    /* Display */
    image: "/blog-2.webp",

    date: "2026-05-13",
    updatedAt: "2026-05-13",

    author: "Admin",

    category: "Real Estate Investment",

    readTime: "12 min read",

    tags: [
      "Greater Noida",
      "Jewar Airport",
      "CRC The Peridona",
      "Luxury Residences",
      "Real Estate",
      "Property Investment",
      "Yamuna Expressway",
      "CRC Group",
      "Jaypee Greens",
      "NCR Real Estate",
      "2026 Investment Guide"
    ],

    featured: true,

    /* JSON-LD */
   schemaMarkup:[
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline":
      "Jewar Airport & the Rise of Ultra-Luxury: Why CRC The Peridona Is NCR's Most Watched Investment of 2026",
    "description":
      "How the Noida International Airport at Jewar, NCR's luxury housing upcycle, and a limited inventory of 341 residences make CRC The Peridona at Jaypee Greens one of 2026's most compelling investment stories.",
    "image": "https://www.crcperidona.in/blog-2.webp",
    "author": {
      "@type": "Person",
      "name": "Admin"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CRC The Peridona",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.crcperidona.in/homeHero.webp"
      }
    },
    "datePublished": "2026-05-13",
    "dateModified": "2026-05-13",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id":
        "https://www.crcperidona.in/blogs/jewar-airport-crc-the-peridona-investment-2026"
    },
    "articleSection": "Real Estate Investment",
    "keywords":
      "CRC The Peridona, Jewar Airport property investment, Noida International Airport real estate, Yamuna Expressway property, luxury apartments Jaypee Greens, NCR real estate investment 2026",
    "inLanguage": "en-IN",
    "timeRequired": "PT12M"
  },

  {
    "@context": "https://schema.org",
    "@type": "Residence",
    "name": "CRC The Peridona",
    "description":
      "An ultra-luxury residential development of 341 residences across 7 towers of 43 floors on 6.80 acres inside the 452-acre Jaypee Greens golf township, Greater Noida, by CRC Group.",
    "url": "https://www.crcperidona.in/",
    "image": [
      "https://www.crcperidona.in/blog-2.webp"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C1, Jaypee Greens",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201310",
      "addressCountry": "IN"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "18-Hole Greg Norman Design Championship Golf Course (130 acres)",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "1.8 Lakh Sq Ft Clubhouse — The Club",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "75,500 Sq Ft Rooftop — The Rooftop",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "3 Theme Swimming Pools & Waterbodies",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Ice Rink & 2 Grand Cinema Theatres",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Observatory Above the City",
        "value": true
      }
    ],
    "numberOfRooms": "4",
    "petsAllowed": true
  }
],
    faqSchema:{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How far is CRC The Peridona from Jewar Airport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CRC The Peridona at Jaypee Greens, Greater Noida is approximately 35 km from the Noida International Airport at Jewar, with direct access via the Yamuna Expressway. Delhi IGI Airport is around 55 km away."
      }
    },
    {
      "@type": "Question",
      "name": "Why is CRC The Peridona considered a strong investment in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three structural reasons: scarcity — only 341 residences across 7 towers inside a 452-acre township of roughly 3,600 total units; product — a global design roster including Killa Design, Gensler, Rockwell Group, SWA and Mace; and location — a golf township address with direct Yamuna Expressway access in the Jewar airport corridor."
      }
    },
    {
      "@type": "Question",
      "name": "What is the price of CRC The Peridona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tentative price is ₹12.5 Cr* onwards for 4 BHK, 4.5 BHK and 5.5 BHK residences starting at 4,950 sq ft. *Indicative; subject to approved building plan."
      }
    },
    {
      "@type": "Question",
      "name": "What makes the Jaypee Greens township special?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jaypee Greens is a 452-acre township with a 130-acre, 18-hole Greg Norman Design Championship Course, a 60-acre nature park, a 10-acre practice range and 25-year-old green cover — with only about 3,600 units in total, giving it one of the lowest densities in Delhi NCR."
      }
    },
    {
      "@type": "Question",
      "name": "Who designed CRC The Peridona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Killa Design (Dubai) — the studio behind the Museum of the Future — is the principal/concept architect, with Gensler (USA) as resident architect, Rockwell Group (New York) for interiors and the clubhouse, SWA Group for landscape, CBM Engineers and Thornton Tomasetti for structure, Mace (UK) for project management, B L Kashyap for construction, and L'Observatoire for lighting."
      }
    },
    {
      "@type": "Question",
      "name": "How many residences does CRC The Peridona offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only 341 residences across 7 towers of 43 floors, following a One Floor One Apartment* concept with private lift lobbies and two-side views of the golf course and nature park. Pre-launch projections of 375–400 units were finalized at 341, reinforcing the low-density positioning."
      }
    },
    {
      "@type": "Question",
      "name": "Can NRIs invest in CRC The Peridona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. NRIs can purchase residential property at CRC The Peridona under existing FEMA regulations. Call +91 7304216059 for documentation guidance and a private preview."
      }
    },
    {
      "@type": "Question",
      "name": "Is CRC The Peridona RERA registered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The project is registered under UP RERA with registration number UPRERAPRJ298067/05/2025, verifiable at www.up-rera.in."
      }
    },
    {
      "@type": "Question",
      "name": "How do I download the CRC The Peridona brochure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Submit the enquiry form on this website to download the official brochure, or call +91 7304216059 to request a private preview at the experience center."
      }
    }
  ]
}

  },
];
