import React from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Success: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-myColor-darkGray flex min-h-screen items-center justify-center">
      <div className="patterned-bg w-full max-w-md rounded-3xl border-2 border-myColor-gray p-8 text-center shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-myColor-orange">
          {t("successPage.title")}
        </h1>
        <p className="mb-6 text-myColor-white">{t("successPage.text")}</p>
        <Link to="/">
          <button className="rounded-md !bg-myColor-orange px-4 py-2 font-semibold !text-myColor-black hover:bg-opacity-80">
            {t("successPage.button")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
