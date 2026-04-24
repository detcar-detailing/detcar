import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "./../../../assets/images/logo-cropped.svg";

import NavLinkBtn from "./NavLinkBtn";
import { useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";

export function SheetNav() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="bg-!none hover:!bg-myColor-black"
        >
          <Menu className="h-9 w-9 text-myColor-white hover:cursor-pointer" />
        </Button>
      </SheetTrigger>
      <SheetContent className="z-50 flex flex-col justify-between border-l-2 !bg-myColor-black">
        <nav className="mt-12 flex flex-col items-center space-y-8 p-4">
          <NavLinkBtn
            to="/"
            text={t("topbar.home")}
            isActive={location.pathname === "/"}
          />
          {
            <NavLinkBtn
              to="/gallery"
              text={t("topbar.gallery")}
              isActive={location.pathname === "/gallery"}
            />
          }
          <NavLinkBtn
            to="/kontakt"
            text={t("topbar.contact")}
            isActive={location.pathname === "/kontakt"}
          />
        </nav>
        <img className="blue-0 blur-none" src={logo} alt="Logo" />
      </SheetContent>
    </Sheet>
  );
}
