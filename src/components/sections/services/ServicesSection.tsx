//// filepath: /home/neo/GitLair/detcar-web/src/components/sections/services/ServicesSection.tsx
import { useState } from "react";
import Bundles from "./Bundles";
import { ServiceSize } from "./types";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();
  // Default to "klein"
  const [selectedSize] = useState<ServiceSize>("klein");

  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center p-4"
    >
      <h2 className="mt-6 border-b-2 border-myColor-orange p-4 text-center text-2xl font-bold text-myColor-white">
        {t("servicesSection.title")}
      </h2>
      {/* Render Bundles directly with default size */}
      <Bundles selectedSize={selectedSize} />
    </div>
  );
}
