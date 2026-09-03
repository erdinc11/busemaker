"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getLocalizedCopy, type Locale } from "../data/siteContent";

type LanguageContextValue = {
  locale: Locale;
  copy: ReturnType<typeof getLocalizedCopy>;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("busem-locale");
    if (savedLocale === "en" || savedLocale === "tr") setLocale(savedLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("busem-locale", locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      copy: getLocalizedCopy(locale),
      toggleLocale: () => setLocale((current) => current === "en" ? "tr" : "en"),
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
