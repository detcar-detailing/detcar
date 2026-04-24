import React, { useState, useEffect } from "react";
import { SheetNav } from "./SheetNav";
import { ContactBtn } from "./ContactBtn";
import { LanguageSwitcher } from "./LanguageSwitcher"; // Import the new LanguageSwitcher component
import logo from "./../../../assets/images/logo-cropped.svg";
import { useTranslation } from "react-i18next";

const Topbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <div className="fixed top-0 z-50 flex h-[4rem] w-full items-center justify-between border-b-2 border-myColor-gray bg-[#1a1a1a] bg-[rgba(0,0,0,1)] pr-4">
      <div className="flex items-center text-myColor-white">
        <a href="/">
          <img
            src={logo}
            alt={t("topbar.logoAlt")}
            className="max-h-[2.5rem] md:max-h-[3rem]"
          />
        </a>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <ContactBtn scrolled={scrolled} />
        <LanguageSwitcher /> {/* Add the LanguageSwitcher here */}
        <SheetNav />
      </div>
    </div>
  );
};

export default Topbar;
