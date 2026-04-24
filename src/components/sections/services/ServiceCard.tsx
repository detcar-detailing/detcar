import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from "react-i18next";

interface ExtraService {
  id: string;
  name: string; // This will be a translation key now.
  price: number;
}

interface ServiceCardProps {
  packageKey: string;
  title: string; // Translation key string
  services: { description: string; subItems?: string[] }[]; // keys instead
  price: string;
  extraServices: ExtraService[];
  selectedSize: string;
}

const deluxeLikeKeys = new Set(["DeLuxe", "premium"]);

const ServiceCard: React.FC<ServiceCardProps> = ({
  packageKey,
  title,
  services,
  price,
  extraServices,
  selectedSize,
}) => {
  const { t } = useTranslation();
  const isDeluxeLike = deluxeLikeKeys.has(packageKey);
  const [selectedExtras, setSelectedExtras] = useState<Set<string>>(new Set());
  const [selectedRadioService, setSelectedRadioService] = useState<
    string | null
  >(null);
  const navigate = useNavigate();

  const handleExtraServiceChange = (id: string) => {
    setSelectedExtras((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  const handleRadioCheckboxChange = (id: string) => {
    setSelectedRadioService((prev) => (prev === id ? null : id));
  };

  const calculateTotalPrice = (): number => {
    const basePrice = parseFloat(price.replace("€", ""));
    let extraPrice = 0;
    selectedExtras.forEach((id) => {
      const extra = extraServices.find((service) => service.id === id);
      extraPrice += extra ? extra.price : 0;
    });
    if (isDeluxeLike && selectedRadioService) {
      const radioPrice =
        extraServices.find((service) => service.id === selectedRadioService)
          ?.price || 0;
      extraPrice += radioPrice;
    }
    return basePrice + extraPrice;
  };

  const handleChoosePacket = () => {
    const selectedArray = Array.from(selectedExtras);
    if (isDeluxeLike && selectedRadioService) {
      selectedArray.push(selectedRadioService);
    }
    navigate("/form", {
      state: {
        selectedPackage: title,
        selectedExtras: selectedArray,
        selectedSize,
      },
    });
  };

  return (
    <Card
      className={`!patterned-bg relative w-full max-w-[400px] overflow-hidden rounded-3xl border-4 ${
        isDeluxeLike ? "!border-myColor-orange" : "!border-myColor-gray"
      } !text-myColor-white shadow-lg`}
    >
      <CardHeader className="bg-myColor-gray p-4">
        <CardTitle className="text-xl font-bold !text-myColor-white">
          {t(title)}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <ul className="list-none space-y-4 pl-0">
          {services.map((service, index) => (
            <li key={index} className="!text-myColor-white">
              <strong>{t(service.description)}</strong>
              {service.subItems && (
                <ul className="list-disc space-y-1 pl-5">
                  {service.subItems.map((item, subIndex) => (
                    <li key={subIndex} className="!text-myColor-lightGray">
                      {t(item)}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {extraServices.length > 0 && (
          <div className="mt-4">
            <h3 className="border-b-2 border-myColor-orange text-lg font-semibold !text-myColor-white">
              {t("servicesSection.additionalServices.title")}
            </h3>
            <ul className="mt-2 space-y-2">
              {extraServices.map((extraService) => (
                <li
                  key={extraService.id}
                  className="flex items-center space-x-2"
                >
                  {isDeluxeLike &&
                  (extraService.id === "ceramicSpray" ||
                    extraService.id === "ceramics") ? (
                    <Checkbox
                      className="h-5 w-5 rounded-xl"
                      checked={selectedRadioService === extraService.id}
                      onCheckedChange={() =>
                        handleRadioCheckboxChange(extraService.id)
                      }
                    />
                  ) : (
                    <Checkbox
                      className="h-5 w-5"
                      checked={selectedExtras.has(extraService.id)}
                      onCheckedChange={() =>
                        handleExtraServiceChange(extraService.id)
                      }
                    />
                  )}
                  <span className="text-myColor-white">
                    {t(extraService.name)}
                  </span>
                  <span className="text-myColor-lightGray">
                    {" "}
                    (€{extraService.price})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col border-t !border-myColor-gray p-4 text-center">
        <div className="mb-2 text-xl font-semibold !text-myColor-white">
          {t("servicesSection.overallPrice")} €
          {calculateTotalPrice().toFixed(2)}
        </div>
        <button
          className="mt-2 w-full rounded-lg !bg-myColor-orange py-2 text-lg font-bold text-myColor-black hover:!bg-opacity-80"
          onClick={handleChoosePacket}
        >
          {t("servicesSection.choosePackage")}
        </button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
