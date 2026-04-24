import React from "react";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface ServiceOverviewProps {
  packageKey: string;
  title: string;
  price: string;
  onChoosePackage: () => void;
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  packageKey,
  title,
  price,
  onChoosePackage,
}) => {
  const { t } = useTranslation();

  const cleaningType = React.useMemo(() => {
    switch (packageKey) {
      case "classicOne":
        return t("servicesSection.insideCleaning");
      case "classicTwo":
      case "DeLuxe":
        return t("servicesSection.outsideCleaning");
      case "premium":
      case "Luxe":
      default:
        return t("servicesSection.bothCleaning");
    }
  }, [packageKey, t]);

  return (
    <Card className="!patterned-bg relative w-full max-w-[400px] overflow-hidden rounded-3xl border-4 !border-myColor-orange !text-myColor-white shadow-lg">
      <CardHeader className="bg-myColor-gray p-4 space-y-1">
        {/* row 1: title / price */}
        <div className="flex items-center">
          <CardTitle className="flex-1 text-xl font-bold !text-myColor-white truncate">
            {title}
          </CardTitle>
          <span className="flex-shrink-0 text-lg font-semibold whitespace-nowrap ml-4">
            {t("servicesSection.pricePrefix")} {price}
          </span>
        </div>

        {/* row 2: cleaning type */}
        <div>
          <span className="text-sm font-normal !text-myColor-white">
            {cleaningType}
          </span>
        </div>
      </CardHeader>

      <CardFooter className="border-t !border-myColor-gray p-4 text-center">
        <button
          className="p-2 mt-2 w-full rounded-lg !bg-myColor-orange py-2 text-lg font-bold text-myColor-black hover:!bg-opacity-80"
          onClick={onChoosePackage}
        >
          {t("servicesSection.choosePackage")}
        </button>
      </CardFooter>
    </Card>
  );
};

export default ServiceOverview;
