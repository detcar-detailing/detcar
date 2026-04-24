
export type ServiceSize = "klein" | "mittel" | "gross";

export const servicesData: Record<ServiceSize, Record<string, { price: string }>> = {
  klein: {
    classicOne: { price: "€170" },
    classicTwo: { price: "€200" },
    Luxe: { price: "€350" },
    DeLuxe: { price: "€400" },
    premium: { price: "€550" },
  },
  mittel: {
    classicOne: { price: "€200" },
    classicTwo: { price: "€300" },
    Luxe: { price: "€450" },
    DeLuxe: { price: "€600" },
    premium: { price: "€750" },
  },
  gross: {
    classicOne: { price: "€250" },
    classicTwo: { price: "€400" },
    Luxe: { price: "€550" },
    DeLuxe: { price: "€800" },
    premium: { price: "€950" },
  },
};
export const ServicePackages = [
  {
    key: "classicOne",
    title: "servicesSection.packages.classicOne.title",
    services: [
      {
        description:
          "servicesSection.packages.classicOne.services.chemicalCleaning.title",

        subItems: [
          "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.0",
          "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.1",
          "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.2",
          "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.3",
          "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.4",
          "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.5",
          "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.6",
          "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.7",
        ],
      },
    ],
  },
  {
    key: "classicTwo",
    title: "servicesSection.packages.classicTwo.title",
    services: [
      {
        description: 
          "servicesSection.packages.classicTwo.services.carWashByHand.title",
        
        subItems: [
          
            "servicesSection.packages.classicTwo.services.carWashByHand.subItems.0",
          
          
            "servicesSection.packages.classicTwo.services.carWashByHand.subItems.1",
          
          
            "servicesSection.packages.classicTwo.services.carWashByHand.subItems.2",
          
        ],
      },
      {
        description: 
          "servicesSection.packages.classicTwo.services.carPolish.title",
        
      },
      {
        description: 
          "servicesSection.packages.classicTwo.services.carPolish.firstStep.title",
        
        subItems: [
          
            "servicesSection.packages.classicTwo.services.carPolish.firstStep.subItems.0",
          
          
            "servicesSection.packages.classicTwo.services.carPolish.firstStep.subItems.1",
          
          
            "servicesSection.packages.classicTwo.services.carPolish.firstStep.subItems.2",
          
        ],
      },
      {
        description: 
          "servicesSection.packages.classicTwo.services.carPolish.secondStep.title",
        
        subItems: [
          
            "servicesSection.packages.classicTwo.services.carPolish.secondStep.subItems.0",
          
        ],
      },
    ],
  },
  {
    key: "Luxe",
    title: "servicesSection.packages.Luxe.title",
    services: [
      {
        description: 
          "servicesSection.packages.Luxe.services.carWashByHand.title",
        
        subItems: [
          
            "servicesSection.packages.Luxe.services.carWashByHand.subItems.0",
          
          
            "servicesSection.packages.Luxe.services.carWashByHand.subItems.1",
          
          
            "servicesSection.packages.Luxe.services.carWashByHand.subItems.2",
          
        ],
      },
      {
        description: 
          "servicesSection.packages.Luxe.services.chemicalCleaning.title",
        
        subItems: [
          
            "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.0",
          
          
            "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.1",
          
          
            "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.2",
          
          
            "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.3",
          
          
            "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.4",
          
          
            "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.5",
          
          
            "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.6",
          
          
            "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.7",
          
        ],
      },
      {
        description: 
          "servicesSection.packages.Luxe.services.carPolish.title",
        
      },
      {
        description: 
          "servicesSection.packages.Luxe.services.carPolish.firstStep.title",
        
        subItems: [
          
            "servicesSection.packages.Luxe.services.carPolish.firstStep.subItems.0",
          
          
            "servicesSection.packages.Luxe.services.carPolish.firstStep.subItems.1",
          
          
            "servicesSection.packages.Luxe.services.carPolish.firstStep.subItems.2",
          
        ],
      },
      {
        description: 
          "servicesSection.packages.Luxe.services.carPolish.secondStep.title",
        
        subItems: [
          
            "servicesSection.packages.Luxe.services.carPolish.secondStep.subItems.0",
          
        ],
      },
    ],
  },
  {
    key: "DeLuxe",
    title: "servicesSection.packages.DeLuxe.title",
    services: [
      {
        description: 
          "servicesSection.packages.DeLuxe.services.carWashByHand.title",
        
        subItems: [
          
            "servicesSection.packages.DeLuxe.services.carWashByHand.subItems.0",
          
          
            "servicesSection.packages.DeLuxe.services.carWashByHand.subItems.1",
          
        ],
      },
      {
        description: 
          "servicesSection.packages.DeLuxe.services.carPolish.title",
        
      },
      {
        description: 
          "servicesSection.packages.DeLuxe.services.carPolish.firstStep.title",
        
        subItems: [
          
            "servicesSection.packages.DeLuxe.services.carPolish.firstStep.subItems.0",
          
        ],
      },
      {
        description: 
          "servicesSection.packages.DeLuxe.services.carPolish.secondStep.title",
        
        subItems: [
          
            "servicesSection.packages.DeLuxe.services.carPolish.secondStep.subItems.0",
          
          
            "servicesSection.packages.DeLuxe.services.carPolish.secondStep.subItems.1",
          
          
            "servicesSection.packages.DeLuxe.services.carPolish.secondStep.subItems.2",
          
        ],
      },
      {
        description: 
          "servicesSection.packages.DeLuxe.services.carPolish.thirdStep.title",
        
        subItems: [
          
            "servicesSection.packages.DeLuxe.services.carPolish.thirdStep.subItems.0",
          
        ],
      },
    ],
  },
  {
    key: "premium",
    title: "servicesSection.packages.premium.title",
    services: [
      {
        description:
          "servicesSection.packages.premium.services.carWashByHand.title",
        subItems: [
          "servicesSection.packages.premium.services.carWashByHand.subItems.0",
          "servicesSection.packages.premium.services.carWashByHand.subItems.1",
          "servicesSection.packages.premium.services.carWashByHand.subItems.2",
        ],
      },
      {
        description:
          "servicesSection.packages.premium.services.chemicalCleaning.title",
        subItems: [
          "servicesSection.packages.premium.services.chemicalCleaning.subItems.0",
          "servicesSection.packages.premium.services.chemicalCleaning.subItems.1",
          "servicesSection.packages.premium.services.chemicalCleaning.subItems.2",
          "servicesSection.packages.premium.services.chemicalCleaning.subItems.3",
          "servicesSection.packages.premium.services.chemicalCleaning.subItems.4",
          "servicesSection.packages.premium.services.chemicalCleaning.subItems.5",
          "servicesSection.packages.premium.services.chemicalCleaning.subItems.6",
        ],
      },
      {
        description: "servicesSection.packages.premium.services.carPolish.title",
      },
      {
        description:
          "servicesSection.packages.premium.services.carPolish.firstStep.title",
        subItems: [
          "servicesSection.packages.premium.services.carPolish.firstStep.subItems.0",
        ],
      },
      {
        description:
          "servicesSection.packages.premium.services.carPolish.secondStep.title",
        subItems: [
          "servicesSection.packages.premium.services.carPolish.secondStep.subItems.0",
          "servicesSection.packages.premium.services.carPolish.secondStep.subItems.1",
          "servicesSection.packages.premium.services.carPolish.secondStep.subItems.2",
        ],
      },
      {
        description:
          "servicesSection.packages.premium.services.carPolish.thirdStep.title",
        subItems: [
          "servicesSection.packages.premium.services.carPolish.thirdStep.subItems.0",
        ],
      },
    ],
  },
];
