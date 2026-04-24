import type { LucideIcon } from "lucide-react";
import { Facebook, Instagram, Music2, Youtube } from "lucide-react";

export const SOCIAL_LINKS: readonly {
  href: string;
  Icon: LucideIcon;
  labelKey: string;
}[] = [
  {
    href: "https://www.tiktok.com/@detcarfrankfurt",
    Icon: Music2,
    labelKey: "contactSection.social.tiktok",
  },
  {
    href: "https://www.youtube.com/@det-car",
    Icon: Youtube,
    labelKey: "contactSection.social.youtube",
  },
  {
    href: "https://www.instagram.com/detcarfrankfurt",
    Icon: Instagram,
    labelKey: "contactSection.social.instagram",
  },
  {
    href: "https://www.facebook.com/share/1b2WNuhqNx/",
    Icon: Facebook,
    labelKey: "contactSection.social.facebook",
  },
];
