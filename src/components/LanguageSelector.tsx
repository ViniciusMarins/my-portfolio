import { useLanguage } from "../language/LanguageContext";
import PT_Flag from "../assets/imgs/brazil-.png";
import EN_Flag from "../assets/imgs/united-states.png";

const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        className={`p-2 
          hover:bg-slate-300/50 dark:hover:bg-zinc-700/50 rounded-full transition-colors duration-300 flex-shrink-0
          ${language === "pt" ? "bg-green-700/20 rounded-full" : ""}`}
        onClick={() => toggleLanguage("pt")}
      >
        <img src={PT_Flag} alt="Brazil Flag" className="size-6" title="PT-BR" />
      </button>
      <button
        className={`p-2 
          hover:bg-slate-300/50 dark:hover:bg-zinc-700/50 rounded-full transition-colors duration-300 flex-shrink-0
          ${language === "en" ? "bg-green-700/20 rounded-full" : ""}`}
        onClick={() => toggleLanguage("en")}
      >
        <img
          src={EN_Flag}
          alt="United States Flag"
          className="size-6"
          title="EN-US"
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
