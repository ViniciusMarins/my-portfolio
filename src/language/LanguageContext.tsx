import { createContext, useContext, useState } from "react";
import { LanguageKey } from "./LanguageTypes";

const LanguageContext = createContext({
  language: "pt" as LanguageKey,
  toggleLanguage: (_: LanguageKey) => {}, // eslint-disable-line
});

interface LanguageProviderProps {
  children: React.ReactNode;
  storageKey?: string;
}
export const LanguageProvider = ({
  children,
  storageKey = "vite-ui-language",
  ...props
}: LanguageProviderProps) => {
  const [language, setLanguage] = useState<LanguageKey>(
    () => (localStorage.getItem(storageKey) as LanguageKey) || "en"
  );

  const toggleLanguage = (lang: LanguageKey) => {
    localStorage.setItem(storageKey, lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }} {...props}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
