import dynamic from "next/dynamic";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import ModalWrapper from "@/components/ModalWrapper";
import HomePageHeader from "@/components/HomePageHeader";

// Lazy load below-the-fold components
const AboutProject = dynamic(() => import("@/components/AboutProject"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const JaypeeTownship = dynamic(() => import("@/components/JaypeeTownship"));
const ReasonsToInvest = dynamic(() => import("@/components/ReasonToInvest"));
const VillaFeatures = dynamic(() => import("@/components/PremiumInventory"));
const PlansSection = dynamic(() => import("@/components/FloorPlan"));
const EmiCalculator = dynamic(() => import("@/components/EmiCalculator"));
const LocationAdvantages = dynamic(() => import("@/components/LocationAdvantages"));
const WalkThroughVideo = dynamic(() => import("@/components/WalkThroughVideo"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const EnquirySection = dynamic(() => import("@/components/EnquirySection"));
const QRSection = dynamic(() => import("@/components/QRSections"));
const StickyDownloadButton = dynamic(() => import("@/components/StickyButton"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="hidden">
        CRC The Peridona Jaypee Greens Greater Noida – 4, 4.5 &amp; 5.5 BHK Luxury Residences by CRC Group
      </h1>

      {/* SCHEMA START */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.crcperidona.in/",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "CRC The Peridona",
            image: "https://www.crcperidona.in/homeHero.webp",
            "@id": "https://www.crcperidona.in/",
            url: "https://www.crcperidona.in/",
            telephone: "+91 7304216059",
            priceRange: "₹12.5Cr+",
            address: {
              "@type": "PostalAddress",
              streetAddress: "C1, Jaypee Greens",
              addressLocality: "Greater Noida",
              postalCode: "201310",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where is CRC The Peridona located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CRC The Peridona is located at C1, Jaypee Greens, Greater Noida, Uttar Pradesh 201310, inside the 452-acre Jaypee Greens golf township, about 2 km from Pari Chowk.",
                },
              },
              {
                "@type": "Question",
                name: "What is the price of residences in CRC The Peridona?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The tentative price of 4, 4.5 and 5.5 BHK residences at CRC The Peridona starts from ₹12.5 Crore* onwards.",
                },
              },
              {
                "@type": "Question",
                name: "Is CRC The Peridona a good investment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CRC The Peridona offers ultra-low density (only 341 residences on 6.8 acres), a One Floor One Apartment* concept, 2-side golf course and nature park views, a global design team, and strong connectivity — Pari Chowk is around 2 km away and Jewar Noida International Airport around 35 km.",
                },
              },
            ],
          }),
        }}
      />
      {/* SCHEMA END */}

      <HomePageHeader />
      <Hero />
      <ReraStrip />

      <main className="w-full">
        <section className="px-4 py-6 md:px-[30px] md:py-[45px] md:relative top-[-98px]">
          <div className="md:block max-w-5xl m-auto" data-reveal="zoom">
            <ContactForm />
          </div>
        </section>

        <ModalWrapper />

        <AboutProject  heading={false}/>
        <Amenities />
        <JaypeeTownship />
        <ReasonsToInvest />
        <VillaFeatures />
        <PlansSection />
        <EmiCalculator />
        <LocationAdvantages />
        <WalkThroughVideo />
        <BlogSection />
        <NewsSection />
        <EnquirySection />
        <QRSection />
      </main>
      <StickyDownloadButton />
      <Footer />
    </div>
  );
}
