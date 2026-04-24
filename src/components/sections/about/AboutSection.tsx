import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  const services = t("aboutSection.services", { returnObjects: true });
  const list = Array.isArray(services) ? (services as string[]) : [];

  return (
    <section
      id="about"
      className="mt-16 w-full border-t-2 border-dashed border-myColor-orange border-opacity-10 px-4 pb-4 md:mt-24"
    >
      <div className="flex flex-col items-center">
        <h2 className="mt-6 border-b-2 border-myColor-orange p-4 text-center text-2xl font-bold text-myColor-white">
          {t("aboutSection.title")}
        </h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-6 text-myColor-white/90">
          <p className="text-center text-xl font-semibold leading-snug text-myColor-orange md:text-2xl">
            {t("aboutSection.headline")}
          </p>
          <p className="text-center text-base leading-relaxed md:text-lg">
            {t("aboutSection.intro")}
          </p>
          <div>
            <h3 className="mb-4 text-center text-lg font-semibold text-myColor-white">
              {t("aboutSection.servicesHeading")}
            </h3>
            <ul className="mx-auto max-w-xl list-inside list-disc space-y-2 text-left text-base leading-relaxed md:text-lg">
              {list.map((item) => (
                <li key={item} className="pl-1 marker:text-myColor-orange">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-base leading-relaxed md:text-lg">
            {t("aboutSection.paragraph2")}
          </p>
          <p className="text-center text-base leading-relaxed md:text-lg">
            {t("aboutSection.paragraph3")}
          </p>
          <p className="pb-6 text-center text-base font-medium leading-relaxed text-myColor-white md:text-lg">
            {t("aboutSection.closing")}
          </p>
        </div>
      </div>
    </section>
  );
}
