import type { TFunction } from "i18next";
import type { ServiceSize } from "./types";

export const VEHICLE_SIZE_I18N_KEY: Record<ServiceSize, string> = {
  klein: "servicesSection.carSizeSelector.small",
  mittel: "servicesSection.carSizeSelector.medium",
  gross: "servicesSection.carSizeSelector.big",
};

export function translateVehicleSize(t: TFunction, raw: string): string {
  if (raw in VEHICLE_SIZE_I18N_KEY) {
    return t(VEHICLE_SIZE_I18N_KEY[raw as ServiceSize]);
  }
  return raw;
}
