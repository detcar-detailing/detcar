import ContactPopover from "./ContactPopover";
import heroBackground from "./../../../assets/images/temp-bg.jpg";
import "./Hero.css";

import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-shadow relative h-[55vh] w-full">
      <img
        src={heroBackground}
        alt={t("hero.backgroundAlt")}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
        <h1 className="mb-4 mt-20 text-3xl font-bold md:mt-36 md:text-4xl">
          {t("hero.title")}
        </h1>
        <p className="mb-6 max-w-[800px] text-lg md:mb-24 md:text-2xl">
          {t("hero.subtitle")}
        </p>
        <ContactPopover />
      </div>
    </div>
  );
};

export default Hero;
