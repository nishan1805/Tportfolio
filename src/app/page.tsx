import { CareerSummary } from "@/components/sections/CareerSummary";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { MobileShowcase } from "@/components/sections/MobileShowcase";
import { PassionProjects } from "@/components/sections/PassionProjects";
import { Projects } from "@/components/sections/Projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <Projects />
      <MobileShowcase />
      <PassionProjects />
      <CareerSummary />
    </>
  );
}
