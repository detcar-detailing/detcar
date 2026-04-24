import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PhoneCall, Phone, Mail, MapPin } from "lucide-react";

import { useTranslation } from "react-i18next";

export function ContactPopover() {
  const { t } = useTranslation();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="!border-2 !border-myColor-gray !bg-myColor-black p-6 text-xl font-semibold hover:!bg-myColor-gray"
        >
          <PhoneCall className="mr-2 h-5 w-5 text-myColor-white" />
          {t("hero.contactPopover.title")}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="!patterned-bg w-80 !border-2 !border-myColor-gray text-myColor-white">
        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">
              {t("hero.contactPopover.title")}
            </h4>
            <p className="text-sm text-myColor-lightGray">
              {t("hero.contactPopover.subtitle")}
            </p>
          </div>
          <div className="space-y-2 border-b-2 border-myColor-orange">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-myColor-white" />
              <Label className="text-myColor-white" htmlFor="telefon">
                {t("hero.contactPopover.phone")}
              </Label>
            </div>
            <a href="tel:+491719089911" className="text-sm text-myColor-white">
              +49 171 9089911
            </a>
          </div>
          <div className="space-y-2 border-b-2 border-myColor-orange">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-myColor-white" />
              <Label className="text-myColor-white" htmlFor="email">
                {t("hero.contactPopover.email")}
              </Label>
            </div>
            <a
              href="mailto:det.car.de@gmail.com"
              className="text-sm text-myColor-white"
            >
              det.car.de@gmail.com
            </a>
          </div>
          <div className="space-y-2 border-b-2 border-myColor-orange">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-myColor-white" />
              <Label className="text-myColor-white" htmlFor="location">
                {t("hero.contactPopover.location")}
              </Label>
            </div>
            <a
              className="text-sm text-myColor-white"
              href="https://www.google.com/maps/place/Eichenstraße+60,+65933+Frankfurt+am+Main/@50.0953318,8.5904131,15z/data=!4m6!3m5!1s0x47bd0a36e7d45505:0x7b49e6bc94643427!8m2!3d50.0953318!4d8.6007181!16s%2Fg%2F11bw4ch3pk"
            >
              Eichenstraße 57 B, FFM
            </a>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ContactPopover;
