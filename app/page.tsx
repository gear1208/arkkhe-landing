import { SiteHeader } from "@/components/site-header";
import { HandLayer } from "@/components/hand-layer";
import { Hero } from "@/components/hero";
import { MetricsSection, ModulesSection, ProcessSection, SiteFooter, SystemSection } from "@/components/sections";

export default function HomePage() {
  return <>
    <SiteHeader />
    <HandLayer />
    <main className="relative z-10 mx-auto max-w-[2100px]">
      <Hero />
      <SystemSection />
      <ModulesSection />
      <ProcessSection />
      <MetricsSection />
    </main>
    <SiteFooter />
  </>;
}
