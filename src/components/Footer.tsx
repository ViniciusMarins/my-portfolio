import { useLanguage } from "../language/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="absolute bottom-0 left-0 right-0 w-full h-28 bg-slate-200/60 dark:bg-zinc-800/60 justify-center items-center flex z-10">
      {language === "pt" ? "Contato:" : "Contact:"}
      <span className="font-bold ml-2"> v.assuncao.dev@gmail.com</span>
    </footer>
  );
};

export default Footer;
