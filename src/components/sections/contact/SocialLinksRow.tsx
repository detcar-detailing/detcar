import { useTranslation } from "react-i18next";
import { SOCIAL_LINKS } from "./socialLinks";

type Variant = "onLight" | "onDark";

const buttonClass: Record<Variant, string> = {
  onLight:
    "bg-myColor-black text-myColor-white hover:bg-myColor-orange focus-visible:outline-myColor-orange",
  onDark:
    "border border-myColor-orange/35 bg-myColor-black/40 text-myColor-orange hover:border-myColor-orange hover:bg-myColor-orange hover:text-myColor-black focus-visible:outline-myColor-orange",
};

export function SocialLinksRow({
  variant,
  showDivider = true,
  centered = false,
}: {
  variant: Variant;
  showDivider?: boolean;
  centered?: boolean;
}) {
  const { t } = useTranslation();

  const divider =
    showDivider &&
    (variant === "onLight"
      ? "border-t border-myColor-black/10 pt-10"
      : "border-t border-myColor-white/15 pt-10");
  const noDivider = !showDivider ? "pt-2" : "";

  return (
    <div className={[divider, noDivider, centered ? "text-center" : ""].filter(Boolean).join(" ")}>
      <h4
        className={
          variant === "onLight"
            ? "mb-5 text-2xl font-semibold text-myColor-black"
            : "mb-5 text-2xl font-semibold text-myColor-white"
        }
      >
        {t("contactSection.socialTitle")}
      </h4>
      <div
        className={["flex flex-wrap gap-4", centered ? "justify-center" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        {SOCIAL_LINKS.map(({ href, Icon, labelKey }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex h-[52px] w-[52px] items-center justify-center rounded-full shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonClass[variant]}`}
            aria-label={t(labelKey)}
          >
            <Icon
              className="transition-transform duration-200 group-hover:scale-110"
              size={26}
              strokeWidth={1.75}
              aria-hidden
            />
          </a>
        ))}
      </div>
    </div>
  );
}
