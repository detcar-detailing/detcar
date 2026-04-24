import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { SocialLinksRow } from "../sections/contact/SocialLinksRow";
import {
  DET_CAR_GOOGLE_MAP_EMBED_SRC,
  DET_CAR_MAP_IFRAME_TITLE,
} from "@/constants/detCarGoogleMap";

import { useTranslation } from "react-i18next";

const Kontakt: React.FC = () => {
  useDocumentTitle("Kontakt - Det-Car | Professionelle Auto Detailing");
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex h-[30vh] items-end justify-start">
        <h1 className="mb-12 ml-8 pt-20 text-center text-5xl font-bold text-myColor-orange md:ml-24">
          {t("contactPage.title")}
        </h1>
      </div>
      <div className="patterned-bg m-4 rounded-3xl border-2 border-myColor-gray bg-myColor-black p-6 md:m-10 md:p-10">
        <div className="grid gap-2 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <div className="space-y-12">
              <div className="flex items-center space-x-2">
                <Phone className="mr-4 text-myColor-orange" size={32} />
                <div>
                  <h4 className="text-xl font-semibold text-myColor-white">
                    {t("contactPage.phone")}
                  </h4>
                  <a
                    href="tel:+491719089911"
                    className="border-b border-myColor-white text-myColor-white transition-colors duration-100 hover:border-myColor-orange"
                  >
                    +49 171 9089911
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="mr-4 text-myColor-orange" size={30} />
                <div>
                  <h4 className="text-xl font-semibold text-myColor-white">
                    {t("contactPage.email")}
                  </h4>
                  <a
                    href="mailto:det.car.de@gmail.com"
                    className="border-b border-myColor-white text-myColor-white transition-colors duration-100 hover:border-myColor-orange"
                  >
                    det.car.de@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="mr-4 text-myColor-orange" size={30} />
                <div>
                  <h4 className="text-xl font-semibold text-myColor-white">
                    {t("contactPage.address")}
                  </h4>
                  <a
                    className="border-b border-myColor-white text-myColor-white transition-colors duration-100 hover:border-myColor-orange"
                    href="https://www.google.com/maps/place/Eichenstraße+60,+65933+Frankfurt+am+Main/@50.0953318,8.5904131,15z/data=!4m6!3m5!1s0x47bd0a36e7d45505:0x7b49e6bc94643427!8m2!3d50.0953318!4d8.6007181!16s%2Fg%2F11bw4ch3pk"
                  >
                    Eichenstraße 57 B, 65993 Frankfurt Am Main
                  </a>
                </div>
              </div>
              <SocialLinksRow variant="onDark" />
            </div>
          </div>

          {/* Google Map */}
          <div className="h-[400px] md:h-auto">
            <iframe
              src={DET_CAR_GOOGLE_MAP_EMBED_SRC}
              className="mt-4 h-full w-full rounded-3xl border-2 border-myColor-orange md:mt-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={DET_CAR_MAP_IFRAME_TITLE}
              aria-label={DET_CAR_MAP_IFRAME_TITLE}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
