import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "NobleBlocks | The Social Network for Science",
  description: "NobleBlocks is the decentralized social network for science. Upload papers, scan for errors with AI, extract data, generate audio podcasts, and publish preprints.",
  keywords: ["science", "social network", "research", "AI", "preprints", "academic publishing", "decentralized science", "DeSci", "scientific validation", "paper to podcast", "EDDII", "systematic review"],
  authors: [{ name: "NobleBlocks" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://nobleblocks.com/",
  },
  openGraph: {
    type: "website",
    url: "https://nobleblocks.com/",
    title: "NobleBlocks | The Social Network for Science",
    description: "Do more with your papers. AI validation, data extraction, audio generation, and community interaction for researchers.",
    siteName: "NobleBlocks",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "NobleBlocks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NobleBlocks | The Social Network for Science",
    description: "Turn your research paper into a conversation. Join the social network for science.",
    images: ["https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200&h=630"],
    creator: "@nobleblocks",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NobleBlocks",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  url: "https://nobleblocks.com",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description: "The decentralized social network for science. Tools for validation, extraction, and publishing.",
  featureList: "AI Validation, Data Extraction, Audio Generation, Preprint Publishing, Social Networking for Scientists",
  author: {
    "@type": "Organization",
    name: "NobleBlocks Ltd.",
  },
  sameAs: [
    "https://twitter.com/nobleblocks",
    "https://linkedin.com/company/nobleblocks",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased bg-white text-slate-900 selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
