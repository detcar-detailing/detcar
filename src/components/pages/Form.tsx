import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import { useTranslation } from "react-i18next";
import { translateVehicleSize } from "@/components/sections/services/vehicleSizeI18n";

const Form: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    selectedPackage = "",
    selectedExtras = [],
    selectedSize = "", // Ensure selectedSize is extracted from location.state
  } = location.state || {};

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    selectedPackage: selectedPackage,
    selectedSize: selectedSize,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("-DtSdtjUcjgnk4NB5");
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Prepare data for EmailJS, ensuring `selectedSize` is included correctly
    const templateParams = {
      user_name: formValues.name,
      user_email: formValues.email,
      user_phone: formValues.phone,
      selected_package: t(formValues.selectedPackage),
      selected_extras: selectedExtras.join(", "), // Convert array to string
      selected_size: translateVehicleSize(t, formValues.selectedSize),
    };

    // Send email via EmailJS
    emailjs.send("service_lhb0nlq", "contact_form", templateParams).then(
      () => {
        setLoading(false);
        setError(false);
        console.log("Email sent successfully");

        // Navigate to the Success page
        navigate("/success", { state: { name: formValues.name } });
      },
      (error) => {
        console.error("Email send failed:", error);
        setError(true);
        setLoading(false);
      },
    );
  };

  return (
    <div className="bg-myColor-darkGray flex min-h-screen items-center justify-center">
      <div className="patterned-bg w-full max-w-md rounded-3xl border-2 border-myColor-gray p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-myColor-orange">
          {t("form.title")}
        </h1>
        {error && (
          <div className="mb-4 text-center text-red-500">
            {t("form.errorText")}
          </div>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-myColor-lightGray"
            >
              {t("form.name")}
            </label>
            <input
              minLength={3}
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-myColor-gray bg-myColor-black p-2 text-myColor-white placeholder-myColor-lightGray shadow-sm focus:border-myColor-orange focus:outline-none"
              placeholder={t("form.namePlaceholder")}
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-myColor-lightGray"
            >
              {t("form.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-myColor-gray bg-myColor-black p-2 text-myColor-white placeholder-myColor-lightGray shadow-sm focus:border-myColor-orange focus:outline-none"
              placeholder={t("form.emailPlaceholder")}
              required
            />
          </div>

          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-myColor-lightGray"
            >
              {t("form.phone")}
            </label>
            <input
              minLength={10}
              type="tel"
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-myColor-gray bg-myColor-black p-2 text-myColor-white placeholder-myColor-lightGray shadow-sm focus:border-myColor-orange focus:outline-none"
              placeholder={t("form.phonePlaceholder")}
              required
            />
          </div>

          {/* Selected Package Display */}
          <div>
            <label
              htmlFor="package"
              className="block text-sm font-medium text-myColor-lightGray"
            >
              {t("form.selectedPackage")}
            </label>
            <p className="text-myColor-white">
              {t(formValues.selectedPackage)}
            </p>
          </div>

          {/* Display Selected Extras (Translate Keys) */}
          {selectedExtras.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-myColor-lightGray">
                {t("form.selectedAdditionalServices")}
              </h3>
              <ul className="list-disc pl-5 text-myColor-white">
                {selectedExtras.map((extra: string, index: number) => (
                  <li key={index}>
                    {t(`servicesSection.additionalServices.${extra}`)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Display Selected Vehicle Size */}
          {formValues.selectedSize && (
            <div>
              <h3 className="text-sm font-medium text-myColor-lightGray">
                {t("form.selectedVehicleSize")}
              </h3>
              <p className="text-myColor-white">
                {translateVehicleSize(t, formValues.selectedSize)}
              </p>
            </div>
          )}

          {/* Submit Button with Loading */}
          <div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-md !bg-myColor-orange px-4 py-2 font-semibold !text-myColor-black hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-myColor-orange focus:ring-offset-2"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("form.sending")}
                </>
              ) : (
                t("form.submit")
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
