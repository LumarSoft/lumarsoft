import { Blur } from "@/shared/components/blur/Blur";
import { Hero } from "./Components/hero/Hero";
import { WeDo } from "./Components/weDo/WeDo";
import { WhyUs } from "./Components/whyUs/WhyUs";
import { Technologies } from "./Components/technologies/Technologies";
import { AboutUs } from "@/shared/components/aboutUs/AboutUs";
import { Language } from "@/shared/types/language";
import { Contact } from "@/shared/components/contact/Contact";

export const HomeModule = ({ dictionary }: { dictionary: Language }) => {
  return (
    <main className="text-white ">
      <Blur />
      <div className="px-20 lgn:px-10 smn:px-4 flex flex-col ">
        <Hero language={dictionary.Hero} />

        <WeDo language={dictionary.WeDo} />

        <WhyUs language={dictionary.WhyUs} />

        <Technologies language={dictionary.Technologies} />

        <AboutUs language={dictionary.About} />

        <Contact lenguage={dictionary.Contact} />
      </div>
    </main>
  );
};
