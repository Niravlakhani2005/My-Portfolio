import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import Starfield from "@/components/ui/Starfield";
import JsonLd from "@/components/layout/JsonLd";
import SideDecorations from "@/components/layout/SideDecorations";
import CursorGlow from "@/components/ui/CursorGlow";

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
        <Starfield />
        <SideDecorations />
        <CursorGlow />
        <div className="relative z-10 noise-overlay" />
        <main className="relative z-20 flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
