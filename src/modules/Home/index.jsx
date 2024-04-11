import { Blur } from "@/shared/components/blur/Blur";
import { Hero } from "./Components/hero/Hero";
import { WeDo } from "./Components/weDo/WeDo";
import { WhyUs } from "./Components/whyUs/WhyUs";
import { Technologies } from "./Components/technologies/Technologies";
import { AboutUs } from "@/shared/components/aboutUs/AboutUs";
import { Contact } from "@/shared/components/contact/Contact";

export const HomeModule = ({ dictionary }) => {
  return (
    <main className="text-white ">
      <Blur />
      <div className="px-20 lgn:px-10 smn:px-4 flex flex-col ">
        <Hero lenguaje={dictionary.Hero} />

        <WeDo lenguaje={dictionary.SecondSkill} />

        <WhyUs lenguaje={dictionary.WhyChoose} />

        <Technologies lenguaje={dictionary.Technologies} />

        <AboutUs lenguaje={dictionary.About} />

        <Contact lenguaje={dictionary.Contact} />

        <div className="flex justify-center items-center gap-4 mb-2 smn:text-sm smn:mb-0">
          <span>{dictionary.Rights}</span>
        </div>
      </div>
    </main>
  );
};
