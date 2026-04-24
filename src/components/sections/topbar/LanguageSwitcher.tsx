import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const availableLanguages = [
  { code: "en", name: "English", flagCode: "GB" }, // English
  { code: "de", name: "Deutsch", flagCode: "DE" }, // German
  { code: "ru", name: "Русский", flagCode: "RU" }, // Russian
  /* { code: "tr", name: "Türkçe", flagCode: "TR" }, // Turkish
  { code: "ua", name: "Українська", flagCode: "UA" }, // Ukrainian
  { code: "ar", name: "العربية", flagCode: "SA" }, // Arabic (Saudi Arabia flag as example) */
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="relative">
      <Select
        value={i18n.language}
        onValueChange={(value) => handleLanguageChange(value)}
      >
        <SelectTrigger className="flex w-auto items-center p-0 text-myColor-white">
          <Globe className="h-6 w-6" aria-hidden="true" />
        </SelectTrigger>

        <SelectContent className="text-myColor-white">
          <SelectGroup>
            {availableLanguages.map((lang) => (
              <SelectItem
                key={lang.code}
                value={lang.code}
                className="flex items-center space-x-2"
              >
                <ReactCountryFlag
                  countryCode={lang.flagCode}
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                  }}
                  aria-label={lang.name}
                />
                <span className="ml-2">{lang.name}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
