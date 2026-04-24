import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CarSizeSelector from "../sections/services/CarSizeSelector";
import ServiceCard from "../sections/services/ServiceCard";
import {
  ServiceSize,
  servicesData,
  ServicePackages,
} from "../sections/services/types";
import { getExtraServicesForPackage } from "../sections/services/packageExtras";
import { useTranslation } from "react-i18next";

interface LocationState {
  packageKey: string;
  selectedSize: ServiceSize;
}

const ServiceDetailPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const [selectedSize, setSelectedSize] = useState<ServiceSize>(
    () => state?.selectedSize ?? "klein",
  );
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    if (state?.selectedSize != null) {
      setSelectedSize(state.selectedSize);
    }
  }, [state?.selectedSize]);

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLang(lng);
    };
    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  if (!state) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-center text-myColor-white">
        {t("serviceDetailPage.noPackageSelected")}
      </div>
    );
  }

  // Recalculate base price using current language via servicesData
  const basePrice = servicesData[selectedSize][state.packageKey].price;

  // Recompute package details from ServicePackages using the packageKey.
  // Ensure ServicePackages in types.ts have a "key" property.
  const packageDetails = ServicePackages.find(
    (pkg) => pkg.key === state.packageKey,
  );

  const extraServices = getExtraServicesForPackage(
    state.packageKey,
    selectedSize,
  );

  const handleSizeSelect = (size: ServiceSize) => {
    setSelectedSize(size);
  };

  return (
    <div className="min-h-screen flex items-center justify-center mb-10">
      <div className="mt-20 w-full flex flex-col items-center justify-center gap-8 px-4 mx-auto max-w-4xl">
        <CarSizeSelector
          variant="compact"
          selectedSize={selectedSize}
          onSizeSelect={handleSizeSelect}
        />

        {/* Pass updated package details into ServiceCard */}
        <ServiceCard
          key={`${currentLang}-${selectedSize}`}
          packageKey={state.packageKey}
          title={packageDetails ? packageDetails.title : ""}
          services={packageDetails ? packageDetails.services : []}
          price={basePrice}
          extraServices={extraServices}
          selectedSize={selectedSize}
        />
      </div>
    </div>
  );
};

export default ServiceDetailPage;
