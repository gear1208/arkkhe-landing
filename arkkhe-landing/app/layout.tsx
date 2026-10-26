import type { Metadata, Viewport } from "next";
import { Hind, Archivo, Orbitron } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion-provider";

const hind = Hind({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-hind", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", display: "swap" });

export const metadata: Metadata = {
  title: "Arkkhe — Where form meets function",
  description: "Exoform prosthetic systems engineered where form meets function."
};

export const viewport: Viewport = { themeColor: "#000000", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${hind.variable} ${archivo.variable} ${orbitron.variable}`}><body className="bg-ink text-bone antialiased"><a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:bg-bone focus:px-4 focus:py-2 focus:text-ink">Skip to content</a><MotionProvider>{children}</MotionProvider></body></html>;
}
