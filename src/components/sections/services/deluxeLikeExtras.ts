import type { ServiceSize } from "./types";

/** Premium: leather (checkbox) + ceramic spray vs ceramics (radio, same prices as DeLuxe per size). */
export function getPremiumExtraServices(size: ServiceSize): {
  id: string;
  name: string;
  price: number;
}[] {
  const pair = getDeLuxeLikeExtraServices(size);
  return [
    {
      id: "leather",
      name: "servicesSection.additionalServices.leather",
      price: 50,
    },
    { ...pair[0], name: "servicesSection.additionalServices.ceramicSpray" },
    { ...pair[1], name: "servicesSection.additionalServices.ceramics" },
  ];
}

/** DeLuxe: ceramic spray vs ceramics only (radio pick one). `name` values are i18n keys. */
export function getDeLuxeLikeExtraServices(size: ServiceSize): {
  id: string;
  name: string;
  price: number;
}[] {
  if (size === "mittel") {
    return [
      {
        id: "ceramicSpray",
        name: "servicesSection.additionalServices.ceramicSpray",
        price: 75,
      },
      {
        id: "ceramics",
        name: "servicesSection.additionalServices.ceramics",
        price: 200,
      },
    ];
  }
  if (size === "gross") {
    return [
      {
        id: "ceramicSpray",
        name: "servicesSection.additionalServices.ceramicSpray",
        price: 100,
      },
      {
        id: "ceramics",
        name: "servicesSection.additionalServices.ceramics",
        price: 300,
      },
    ];
  }
  return [
    {
      id: "ceramicSpray",
      name: "servicesSection.additionalServices.ceramicSpray",
      price: 50,
    },
    {
      id: "ceramics",
      name: "servicesSection.additionalServices.ceramics",
      price: 100,
    },
  ];
}
