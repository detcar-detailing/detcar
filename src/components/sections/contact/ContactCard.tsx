import { House, Mail, Phone } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useTranslation } from "react-i18next";
import { SocialLinksRow } from "./SocialLinksRow";

export default function CardWithForm() {
  const { t } = useTranslation();
  return (
    <div className="mx-4 md:m-0">
      <Card className="min-h-[550px] w-full rounded-3xl border-none !bg-myColor-white p-6 md:w-[450px] md:max-w-[850px]">
        <CardHeader>
          <CardTitle className="text-5xl !font-bold text-myColor-black">
            {t("contactSection.title")}
          </CardTitle>
          <CardDescription>
            <p className="!text-myColor-gray">{t("contactSection.subtitle")}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 space-y-12">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-black p-4">
              <House className="text-myColor-white" size={30} />
            </div>
            <div>
              <h4 className="mb-1 text-2xl font-semibold text-myColor-black">
                {t("contactSection.address")}
              </h4>
              <a
                className="border-b border-myColor-black text-myColor-black transition-colors duration-100 hover:border-opacity-30"
                href="https://www.google.com/maps/place/Eichenstra%C3%9Fe+57+B,+65933+Frankfurt+am+Main/@50.0950897,8.5983315,17z/data=!3m1!4b1!4m6!3m5!1s0x47bd0a36eeda5583:0xe4c8030b90de9d61!8m2!3d50.0950863!4d8.6009118!16s%2Fg%2F11vx1gpmfr?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
              >
                Eichenstraße 57 B, FFM
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-black p-4">
              <Phone className="text-white" size={30} />
            </div>
            <div>
              <h4 className="mb-1 text-2xl font-semibold text-myColor-black">
                {t("contactSection.phone")}
              </h4>
              <a
                href="tel:+491719089911"
                className="border-b border-myColor-black text-myColor-black transition-colors duration-100 hover:border-opacity-30"
              >
                +49 171 9089911
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-black p-4">
              <Mail className="text-white" size={30} />
            </div>
            <div>
              <h4 className="mb-1 text-2xl font-semibold text-myColor-black">
                {t("contactSection.email")}
              </h4>
              <a
                href="mailto:det.car.de@gmail.com"
                className="border-b border-myColor-black text-myColor-black transition-colors duration-100 hover:border-opacity-30"
              >
                det.car.de@gmail.com
              </a>
            </div>
          </div>
          <SocialLinksRow variant="onLight" />
        </CardContent>
      </Card>
    </div>
  );
}
