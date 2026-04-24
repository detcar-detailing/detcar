import type { ServiceSize } from "./types";
import { getDeLuxeLikeExtraServices, getPremiumExtraServices } from "./deluxeLikeExtras";

export type PackageExtraService = {
  id: string;
  name: string;
  price: number;
};

/** Extra add-ons per package; `name` is always an i18n key for `t(name)`. */
export function getExtraServicesForPackage(
  packageKey: string,
  size: ServiceSize,
): PackageExtraService[] {
  switch (packageKey) {
    case "classicOne":
      return [
        {
          id: "leather",
          name: "servicesSection.additionalServices.leather",
          price: 50,
        },
      ];
    case "classicTwo":
      return [
        {
          id: "ceramicSpray",
          name: "servicesSection.additionalServices.ceramicSpray",
          price: 50,
        },
      ];
    case "Luxe":
      return [
        {
          id: "leather",
          name: "servicesSection.additionalServices.leather",
          price: 50,
        },
        {
          id: "ceramicSpray",
          name: "servicesSection.additionalServices.ceramicSpray",
          price: 50,
        },
      ];
    case "DeLuxe":
      return getDeLuxeLikeExtraServices(size);
    case "premium":
      return getPremiumExtraServices(size);
    default:
      return [];
  }
}
