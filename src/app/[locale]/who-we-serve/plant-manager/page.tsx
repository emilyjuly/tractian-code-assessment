import { Hero } from "@/app/components/hero/Hero";
import { ReasonsForChoosingUs } from "@/app/components/reasons-for-choosing-us/Reasons-for-choosing-us";
import { TabsSection } from "@/app/components/tabsSection/TabsSection";

export default function PlantManagerPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ReasonsForChoosingUs />
      <TabsSection />
    </main>
  );
}