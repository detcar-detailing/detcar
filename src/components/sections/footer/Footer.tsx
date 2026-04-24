import { Mail, Phone } from "lucide-react";
import { SocialLinksRow } from "../contact/SocialLinksRow";

export default function Footer() {
  return (
    <footer className="text-light patterned-bg !rounded-none border-t-2 border-myColor-orange bg-none pt-6 text-myColor-white">
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-2">
          {/* Adresse */}
          <div>
            <h5 className="mb-2 border-b-[0.5px] border-myColor-orange text-lg font-semibold">
              Adresse
            </h5>
            <p className="flex flex-col space-y-2">
              Eichenstraße 57 B, <br />
              65933 Frankfurt am Main
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h5 className="mb-2 border-b-[0.5px] border-myColor-orange text-lg font-semibold">
              Kontakt
            </h5>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2 min-h-6 min-w-6" />
                <a
                  href="mailto:det.car.de@gmail.com"
                  className="text-light border-b-[1px] hover:border-myColor-orange"
                >
                  det.car.de@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 min-h-6 min-w-6" />
                <a
                  href="tel:+491719089911"
                  className="text-light border-b-[1px] hover:border-myColor-orange"
                >
                  +49 171 9089911
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-myColor-white/10 px-6 py-8">
          <SocialLinksRow variant="onDark" showDivider={false} centered />
        </div>

        <div className="flex flex-col items-center justify-between border-t border-myColor-white/10 py-4 md:flex-row">
          {/* Copyright */}
          <p className="ml-6 text-center md:text-left">
            &copy; {new Date().getFullYear()} Pryladyshev Volodymyr. Alle Rechte
            vorbehalten.
          </p>

          {/* Links */}
          <div className="mr-6 flex space-x-4">
            <a
              href="/datenschutz"
              className="text-light border-b-[1px] transition-colors duration-150 hover:border-myColor-orange"
            >
              Datenschutz
            </a>
            <a
              href="/impressum"
              className="text-light border-b-[1px] transition-colors duration-150 hover:border-myColor-orange"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
