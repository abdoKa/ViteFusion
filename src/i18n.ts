import i18n from "i18next";
import i18next from "i18next";
import enNs1 from "./i18n/locales/en/ns1.json";
import enNs2 from "./i18n/locales/en/ns2.json";

export const defaultNS = "ns1";
export const fallbackNS = "fallback";

i18next.init({
  debug: true,
  fallbackLng: "en",
  defaultNS,
  fallbackNS,
  resources: {
    en: {
      ns1: enNs1,
      ns2: enNs2,
    },
  },
});

export default i18n;
