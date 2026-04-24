import React from "react";
import smallCar from "../../../assets/images/car-hatchback.svg";
import mediumCar from "../../../assets/images/sedan.svg";
import bigCar from "../../../assets/images/car-suv.svg";
import { ServiceSize } from "./types";
import { useTranslation } from "react-i18next";

export interface CarSizeSelectorProps {
  selectedSize: ServiceSize;
  onSizeSelect: (size: ServiceSize) => void;
  /** Compact row (detail page); default = titled card layout */
  variant?: "default" | "compact";
}

const CarSizeSelector: React.FC<CarSizeSelectorProps> = ({
  selectedSize,
  onSizeSelect,
  variant = "default",
}) => {
  const { t } = useTranslation();
  const sizes: { value: ServiceSize; iconSrc: string; label: string }[] = [
    {
      value: "klein",
      iconSrc: smallCar,
      label: t("servicesSection.carSizeSelector.small"),
    },
    {
      value: "mittel",
      iconSrc: mediumCar,
      label: t("servicesSection.carSizeSelector.medium"),
    },
    {
      value: "gross",
      iconSrc: bigCar,
      label: t("servicesSection.carSizeSelector.big"),
    },
  ];

  const buttons = sizes.map((size) => (
    <button
      key={size.value}
      type="button"
      onClick={() => onSizeSelect(size.value)}
      className={`flex flex-col items-center rounded-lg border-2 px-4 py-2 ${
        selectedSize === size.value
          ? "border-myColor-orange"
          : "border-myColor-gray"
      } ${variant === "compact" ? "" : "hover:border-myColor-orange"}`}
    >
      <img
        src={size.iconSrc}
        alt={size.label}
        className={variant === "compact" ? "h-12 w-12" : "h-16 w-16"}
      />
      <span
        className={`font-semibold text-myColor-lightGray ${
          variant === "compact" ? "" : "mt-2"
        }`}
      >
        {size.label}
      </span>
    </button>
  ));

  if (variant === "compact") {
    return <div className="flex justify-center space-x-4">{buttons}</div>;
  }

  return (
    <div className="patterned-bg flex h-full w-full flex-col items-center justify-center gap-12 rounded-3xl border-2 border-myColor-gray p-12">
      <h2 className="text-center text-2xl font-medium text-myColor-white">
        {t("servicesSection.carSizeSelector.title")}
      </h2>
      <div className="flex items-center justify-center gap-4 md:gap-12">
        {buttons}
      </div>
    </div>
  );
};

export default CarSizeSelector;
