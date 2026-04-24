import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { MobileContactBar } from "@/components/mobile-contact-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kabul Jaan",
    template: "%s | Kabul Jaan Restaurant"
  },
  description:
    "Kabul Jaan serves authentic Afghan cuisine with a modern soul. Enjoy slow-cooked saffron rice, charred kebabs, hand-folded mantu, bolani, and traditional Afghan tea in a warm, tungsten-lit dining room built for family celebrations.",
  keywords: [
    "Kabul Jaan",
    "Afghan restaurant",
    "Afghan cuisine",
    "kebabs",
    "qabili palaw",
    "mantu",
    "bolani",
    "chapli kebab",
    "saffron rice",
    "Afghan food Quetta",
    "best Afghan restaurant",
    "family restaurant",
    "halal restaurant",
    "traditional Afghan food"
  ],
  authors: [{ name: "Kabul Jaan Restaurant" }],
  creator: "Kabul Jaan Restaurant",
  publisher: "Kabul Jaan Restaurant",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kabul Jaan Restaurant",
    title: "Kabul Jaan Restaurant | Authentic Afghan Cuisine",
    description:
      "Afghan cuisine with modern soul. Slow saffron rice, charred kebabs, hand-folded mantu, and tungsten-lit celebrations.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Kabul Jaan Restaurant logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabul Jaan Restaurant | Authentic Afghan Cuisine",
    description:
      "Afghan cuisine with modern soul. Kebabs, palaw, mantu, and tungsten-lit celebrations.",
    images: ["/images/logo.png"]
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png"
  },
  category: "restaurant"
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Kabul Jaan Restaurant",
  description:
    "Authentic Afghan cuisine with modern soul - slow saffron rice, charred kebabs, hand-folded mantu, and warm family dining.",
  image: `${siteUrl}/images/logo.png`,
  url: siteUrl,
  servesCuisine: ["Afghan", "Middle Eastern", "Halal"],
  priceRange: "$$",
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Airport Road, near Honda Point",
    addressLocality: "Quetta",
    postalCode: "87300",
    addressCountry: "PK"
  },
  telephone: "+92 336 8156071",
  sameAs: ["https://www.instagram.com/kabul_jaan31/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:00",
      closes: "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "14:00",
      closes: "00:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "12:00",
      closes: "00:00"
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="pb-16 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd)
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileContactBar />
        <SpeedInsights />
      </body>
    </html>
  );
}
