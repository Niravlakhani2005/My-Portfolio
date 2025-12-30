import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import GalaxyBackground from "@/components/ui/GalaxyBackground";
import BackgroundFX from "@/components/ui/BackgroundFX";
import GlowCursor from "@/components/ui/GlowCursor";

import JsonLd from "@/components/layout/JsonLd";
import SideDecorations from "@/components/layout/SideDecorations";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Nirav Lakhani | UI/UX Designer",
  description: "A premium UI/UX portfolio showcasing user-centered design, research, and high-fidelity prototypes.",
  openGraph: {
    title: "Nirav Lakhani | UI/UX Designer",
    description: "Designing clean, user-friendly experiences with research and high-fidelity UI.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} antialiased overflow-x-hidden bg-deep-space text-foreground selection:bg-cyber-purple selection:text-white`}
      >
        <JsonLd />
        <GalaxyBackground />
        <BackgroundFX />
        <GlowCursor />
        <SideDecorations />
        <main className="relative z-20 flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
