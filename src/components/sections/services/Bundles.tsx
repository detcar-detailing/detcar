//// filepath: /home/neo/GitLair/detcar-web/src/components/sections/services/Bundles.tsx
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ServiceOverview from "./ServiceOverview";
import { ServiceSize, servicesData } from "./types";
import { getExtraServicesForPackage } from "./packageExtras";

const Bundles: React.FC<{ selectedSize: ServiceSize }> = ({ selectedSize }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const extraServices = useMemo(
    () => ({
      classicOne: getExtraServicesForPackage("classicOne", selectedSize),
      classicTwo: getExtraServicesForPackage("classicTwo", selectedSize),
      Luxe: getExtraServicesForPackage("Luxe", selectedSize),
      DeLuxe: getExtraServicesForPackage("DeLuxe", selectedSize),
      premium: getExtraServicesForPackage("premium", selectedSize),
    }),
    [selectedSize],
  );

  const servicePackages = [
    {
      key: "classicOne",
      title: t("servicesSection.packages.classicOne.title"),
      services: [
        {
          description: t(
            "servicesSection.packages.classicOne.services.chemicalCleaning.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.0",
            ),
            t(
              "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.1",
            ),
            t(
              "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.2",
            ),
            t(
              "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.3",
            ),
            t(
              "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.4",
            ),
            t(
              "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.5",
            ),
            t(
              "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.6",
            ),
            t(
              "servicesSection.packages.classicOne.services.chemicalCleaning.subItems.7",
            ),
          ],
        },
      ],
    },
    {
      key: "classicTwo",
      title: t("servicesSection.packages.classicTwo.title"),
      services: [
        {
          description: t(
            "servicesSection.packages.classicTwo.services.carWashByHand.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.classicTwo.services.carWashByHand.subItems.0",
            ),
            t(
              "servicesSection.packages.classicTwo.services.carWashByHand.subItems.1",
            ),
            t(
              "servicesSection.packages.classicTwo.services.carWashByHand.subItems.2",
            ),
          ],
        },
        {
          description: t(
            "servicesSection.packages.classicTwo.services.carPolish.title",
          ),
        },
        {
          description: t(
            "servicesSection.packages.classicTwo.services.carPolish.firstStep.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.classicTwo.services.carPolish.firstStep.subItems.0",
            ),
            t(
              "servicesSection.packages.classicTwo.services.carPolish.firstStep.subItems.1",
            ),
            t(
              "servicesSection.packages.classicTwo.services.carPolish.firstStep.subItems.2",
            ),
          ],
        },
        {
          description: t(
            "servicesSection.packages.classicTwo.services.carPolish.secondStep.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.classicTwo.services.carPolish.secondStep.subItems.0",
            ),
          ],
        },
      ],
    },
    {
      key: "Luxe",
      title: t("servicesSection.packages.Luxe.title"),
      services: [
        {
          description: t(
            "servicesSection.packages.Luxe.services.carWashByHand.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.Luxe.services.carWashByHand.subItems.0",
            ),
            t(
              "servicesSection.packages.Luxe.services.carWashByHand.subItems.1",
            ),
            t(
              "servicesSection.packages.Luxe.services.carWashByHand.subItems.2",
            ),
          ],
        },
        {
          description: t(
            "servicesSection.packages.Luxe.services.chemicalCleaning.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.0",
            ),
            t(
              "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.1",
            ),
            t(
              "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.2",
            ),
            t(
              "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.3",
            ),
            t(
              "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.4",
            ),
            t(
              "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.5",
            ),
            t(
              "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.6",
            ),
            t(
              "servicesSection.packages.Luxe.services.chemicalCleaning.subItems.7",
            ),
          ],
        },
        {
          description: t(
            "servicesSection.packages.Luxe.services.carPolish.title",
          ),
        },
        {
          description: t(
            "servicesSection.packages.Luxe.services.carPolish.firstStep.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.Luxe.services.carPolish.firstStep.subItems.0",
            ),
            t(
              "servicesSection.packages.Luxe.services.carPolish.firstStep.subItems.1",
            ),
            t(
              "servicesSection.packages.Luxe.services.carPolish.firstStep.subItems.2",
            ),
          ],
        },
        {
          description: t(
            "servicesSection.packages.Luxe.services.carPolish.secondStep.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.Luxe.services.carPolish.secondStep.subItems.0",
            ),
          ],
        },
      ],
    },
    {
      key: "DeLuxe",
      title: t("servicesSection.packages.DeLuxe.title"),
      services: [
        {
          description: t(
            "servicesSection.packages.DeLuxe.services.carWashByHand.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.DeLuxe.services.carWashByHand.subItems.0",
            ),
            t(
              "servicesSection.packages.DeLuxe.services.carWashByHand.subItems.1",
            ),
          ],
        },
        {
          description: t(
            "servicesSection.packages.DeLuxe.services.carPolish.title",
          ),
        },
        {
          description: t(
            "servicesSection.packages.DeLuxe.services.carPolish.firstStep.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.DeLuxe.services.carPolish.firstStep.subItems.0",
            ),
          ],
        },
        {
          description: t(
            "servicesSection.packages.DeLuxe.services.carPolish.secondStep.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.DeLuxe.services.carPolish.secondStep.subItems.0",
            ),
            t(
              "servicesSection.packages.DeLuxe.services.carPolish.secondStep.subItems.1",
            ),
            t(
              "servicesSection.packages.DeLuxe.services.carPolish.secondStep.subItems.2",
            ),
          ],
        },
        {
          description: t(
            "servicesSection.packages.DeLuxe.services.carPolish.thirdStep.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.DeLuxe.services.carPolish.thirdStep.subItems.0",
            ),
          ],
        },
      ],
    },
    {
      key: "premium",
      title: t("servicesSection.packages.premium.title"),
      services: [
        {
          description: t(
            "servicesSection.packages.premium.services.carWashByHand.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.premium.services.carWashByHand.subItems.0",
            ),
            t(
              "servicesSection.packages.premium.services.carWashByHand.subItems.1",
            ),
            t(
              "servicesSection.packages.premium.services.carWashByHand.subItems.2",
            ),
          ],
        },
        {
          description: t(
            "servicesSection.packages.premium.services.chemicalCleaning.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.premium.services.chemicalCleaning.subItems.0",
            ),
            t(
              "servicesSection.packages.premium.services.chemicalCleaning.subItems.1",
            ),
            t(
              "servicesSection.packages.premium.services.chemicalCleaning.subItems.2",
            ),
            t(
              "servicesSection.packages.premium.services.chemicalCleaning.subItems.3",
            ),
            t(
              "servicesSection.packages.premium.services.chemicalCleaning.subItems.4",
            ),
            t(
              "servicesSection.packages.premium.services.chemicalCleaning.subItems.5",
            ),
            t(
              "servicesSection.packages.premium.services.chemicalCleaning.subItems.6",
            ),
          ],
        },
        {
          description: t(
            "servicesSection.packages.premium.services.carPolish.title",
          ),
        },
        {
          description: t(
            "servicesSection.packages.premium.services.carPolish.firstStep.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.premium.services.carPolish.firstStep.subItems.0",
            ),
          ],
        },
        {
          description: t(
            "servicesSection.packages.premium.services.carPolish.secondStep.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.premium.services.carPolish.secondStep.subItems.0",
            ),
            t(
              "servicesSection.packages.premium.services.carPolish.secondStep.subItems.1",
            ),
            t(
              "servicesSection.packages.premium.services.carPolish.secondStep.subItems.2",
            ),
          ],
        },
        {
          description: t(
            "servicesSection.packages.premium.services.carPolish.thirdStep.title",
          ),
          subItems: [
            t(
              "servicesSection.packages.premium.services.carPolish.thirdStep.subItems.0",
            ),
          ],
        },
      ],
    },
  ];

  const handleChoosePackage = (
    packageKey: string,
    title: string,
    services: {
      description: string;
      subItems?: string[];
    }[],
    price: string,
    extras: { id: string; name: string; price: number }[],
  ) => {
    navigate(`/service-detail/${packageKey}`, {
      state: {
        packageKey,
        title,
        services,
        price,
        extraServices: extras,
        selectedSize,
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Package overview cards */}
      <div className="mt-5 flex w-full flex-wrap justify-center gap-4">
        {servicePackages.map((pkg, index) => (
          <div
            key={pkg.key ?? index}
            className="flex basis-full justify-center sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)] xl:basis-[calc((100%-4rem)/5)]"
          >
            <div className="w-full max-w-[400px]">
              <ServiceOverview
                packageKey={pkg.key}
                title={pkg.title}
                price={servicesData[selectedSize][pkg.key].price}
                onChoosePackage={() =>
                  handleChoosePackage(
                    pkg.key,
                    pkg.title,
                    pkg.services,
                    servicesData[selectedSize][pkg.key].price,
                    extraServices[pkg.key as keyof typeof extraServices],
                  )
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bundles;
