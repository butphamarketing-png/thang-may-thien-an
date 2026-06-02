import { Stats } from "@/components/sections/Stats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { ProductsSectionPreview } from "@/pages/products/products-preview";
import { HeroSlideshow } from "@/sections/hero-slideshow";

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <Stats />
      <ProductsSectionPreview />
      <WhyChooseUs />
      <Services />
      <Projects />
      <Testimonials />
    </>
  );
}

