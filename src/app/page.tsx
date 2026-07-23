import { HeroSlider } from "@/components/home/HeroSlider";
import { BusinessCategories } from "@/components/home/BusinessCategories";
import { StatsBar } from "@/components/home/StatsBar";
import { BrandsShowcase } from "@/components/home/BrandsShowcase";
import { EquipmentShowcase } from "@/components/home/EquipmentShowcase";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { InnovationBand } from "@/components/home/InnovationBand";
import { SustainabilityInvestorSplit } from "@/components/home/SustainabilityInvestorSplit";
import { NewsroomGrid } from "@/components/home/NewsroomGrid";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <BusinessCategories />
      <StatsBar />
      <BrandsShowcase />
      <EquipmentShowcase />
      <IndustriesGrid />
      <InnovationBand />
      <SustainabilityInvestorSplit />
      <NewsroomGrid />
    </>
  );
}
