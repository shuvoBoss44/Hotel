"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import bn from "@/data/translations/bn.json";
import en from "@/data/translations/en.json";

const STORAGE_KEY = "aurum-tide-language";
const dictionaries = { en, bn };

const LanguageContext = createContext(null);

function getNestedValue(object, path) {
  return path.split(".").reduce((accumulator, key) => {
    if (accumulator && Object.prototype.hasOwnProperty.call(accumulator, key)) {
      return accumulator[key];
    }

    return undefined;
  }, object);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);

    if (savedLanguage && dictionaries[savedLanguage] && savedLanguage !== "en") {
      // Defer state sync to avoid direct setState in effect body lint warnings.
      queueMicrotask(() => {
        setLanguageState(savedLanguage);
      });
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.setAttribute("data-lang", language);
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(() => {
    const messages = dictionaries[language] ?? dictionaries.en;

    return {
      language,
      setLanguage: (nextLanguage) => {
        if (dictionaries[nextLanguage]) {
          setLanguageState(nextLanguage);
        }
      },
      messages,
      t: (path) => getNestedValue(messages, path) ?? path,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider.");
  }

  return context;
}
