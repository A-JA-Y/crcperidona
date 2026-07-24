import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "lite-youtube-embed/src/lite-yt-embed.css";
import { Analytics } from '@vercel/analytics/next';



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
  weight: ["400"]
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  adjustFontFallback: true,
  weight: ["600"],
  preload: false,
});




export const metadata: Metadata = {
  metadataBase: new URL("https://www.crcperidona.in"),
  title: "CRC The Peridona Jaypee Greens Greater Noida | 4, 4.5 & 5.5 BHK Luxury Residences by CRC Group",
  description:
    "CRC The Peridona at Jaypee Greens, Greater Noida offers 4, 4.5 & 5.5 BHK ultra-luxury golf course residences from 4,950 sq ft, ₹12.5 Cr* onwards, by CRC Group.",

  alternates: {
    canonical: "https://www.crcperidona.in/",
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "CRC The Peridona Jaypee Greens Greater Noida",
    description:
      "Ultra-luxury 4, 4.5 & 5.5 BHK golf course residences at Jaypee Greens, Greater Noida by CRC Group.",
    url: "https://www.crcperidona.in/",
    siteName: "CRC The Peridona",
    images: [
      {
        url: "https://www.crcperidona.in/homeHero.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CRC The Peridona Jaypee Greens Greater Noida",
    description:
      "Ultra-luxury golf course residences at Jaypee Greens, Greater Noida by CRC Group. ₹12.5 Cr* onwards.",
    images: ["https://www.crcperidona.in/homeHero.webp"],
  },
};

import { ModalProvider } from "@/components/ModalContext";
import ScrollReveal from "@/components/ScrollReveal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}  h-full antialiased light `}
    >
      <Analytics />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGFWQ73S');`}
      </Script>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wj5sfhnj3d");`}
      </Script>

      <body className="min-h-full flex flex-col overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGFWQ73S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ScrollReveal />
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
