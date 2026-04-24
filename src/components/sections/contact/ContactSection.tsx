import { Phone, Mail, MapPin } from "lucide-react";

import ContactCard from "./ContactCard";
import {
  DET_CAR_GOOGLE_MAP_EMBED_SRC,
  DET_CAR_MAP_IFRAME_TITLE,
} from "@/constants/detCarGoogleMap";

export default function ContactSection() {
  return (
    <section className="mt-24 w-full border-t-2 border-dashed border-myColor-orange border-opacity-10 pb-20 text-myColor-white md:pb-28">
      <div className="flex min-h-[600px] flex-col items-center justify-center md:flex-row">
        <div className="hidden h-[400px] w-[100px] flex-col items-start justify-center gap-8 rounded-bl-3xl rounded-tl-3xl border-2 border-none bg-myColor-gray p-[35px] md:flex">
          <a href="https://www.google.com/maps/place/Eichenstra%C3%9Fe+57+B,+65933+Frankfurt+am+Main/@50.0950897,8.5983315,17z/data=!3m1!4b1!4m6!3m5!1s0x47bd0a36eeda5583:0xe4c8030b90de9d61!8m2!3d50.0950863!4d8.6009118!16s%2Fg%2F11vx1gpmfr?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D">
            <MapPin className="h-6 w-6 cursor-pointer text-myColor-lightGray transition-colors duration-300 hover:text-myColor-orange" />
          </a>
          <a href="tel:+491719089911">
            <Phone className="h-6 w-6 cursor-pointer text-myColor-lightGray transition-colors duration-300 hover:text-myColor-orange" />
          </a>
          <a href="mailto:det.car.de@gmail.com">
            <Mail className="h-6 w-6 cursor-pointer text-myColor-lightGray transition-colors duration-300 hover:text-myColor-orange" />
          </a>
        </div>
        <ContactCard />
        <div className="mx-4 my-8 h-[400px] w-full md:mx-0 md:my-0 md:max-w-[550px]">
          <iframe
            src={DET_CAR_GOOGLE_MAP_EMBED_SRC}
            className="h-full w-full rounded-3xl border-0 border-none md:rounded-none md:rounded-br-3xl md:rounded-tr-3xl"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={DET_CAR_MAP_IFRAME_TITLE}
            aria-label={DET_CAR_MAP_IFRAME_TITLE}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
