import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "mama's sourdough",
  description: "Delicious homemade bakes. Slow fermented, stone-baked, made with love.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "mama's sourdough",
    description: "Delicious homemade bakes. Slow fermented, stone-baked, made with love.",
    url: "https://www.mamassourdough.co.uk",
    siteName: "mama's sourdough",
    images: [{ url: "/logo-512.png", width: 512, height: 512, alt: "mama's sourdough" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "mama's sourdough",
    description: "Delicious homemade bakes. Slow fermented, stone-baked, made with love.",
    images: ["/logo-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} ${dmMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#FAF6F0] text-[#2C1A0E] font-sans antialiased">
        <Nav />
        {/* HOLIDAY BANNER — remove on 21 August 2026 */}
        <div className="bg-[#2C1A0E] text-[#FAF6F0] px-4 py-3 text-center">
          <p className="font-sans text-sm leading-snug">
            <span className="font-semibold">Lucie is on holiday 4–21 August.</span>
            {" "}Orders are paused and will reopen on her return. Thank you for your understanding and continuous support.
          </p>
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
