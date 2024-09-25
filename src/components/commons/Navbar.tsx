import { useEffect, useState, useRef } from "react";
import SwitchTheme from "../SwitchTheme";
import { GrMenu as Menu } from "react-icons/gr";
import { IoClose as X } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import IconButton from "../buttons/IconButton";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import LanguageSelector from "../LanguageSelector";
import { useLanguage } from "../../language/LanguageContext";

const ptMenu = ["Início", "Sobre", "Projetos"];
const enMenu = ["Home", "About", "Projects"];

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState<string>(
    () => window.location.pathname.split("/")[1] || "Home"
  );
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);
  const { language } = useLanguage();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuMobileOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getItemsMenu = () => {
    return language === "en" ? enMenu : ptMenu;
  };

  const liItem = (title: string, index: number) => {
    return (
      <Link
        key={title}
        to={`/${title === "Home" || title === "Início"
          ? ""
          : enMenu[index].toLocaleLowerCase()
          }`}
      >
        <li
          key={title}
          onClick={() => setSelectedItem(title)}
          className={`relative cursor-pointer 
          after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-emerald-500 
          after:scale-x-0 after:origin-left after:transition-transform after:duration-300
          hover:after:scale-x-100
          ${selectedItem.toLocaleLowerCase() ===
              ptMenu[index].toLocaleLowerCase() ||
              selectedItem.toLocaleLowerCase() ===
              enMenu[index].toLocaleLowerCase()
              ? "text-emerald-500 after:scale-x-100 duration-300"
              : ""
            }`}
        >
          {title}
        </li>
      </Link>
    );
  };

  return (
    <div className="flex flex-col w-full fixed top-0 z-50 shadow-sm drop-shadow-md bg-slate-100 dark:bg-zinc-900">
      <div className="flex justify-between md:justify-around w-full p-5 md:p-8 items-center">
        <h2 className="text-emerald-500 font-semibold text-3xl md:text-4xl lg:text-5xl hidden md:block">
          Vinicius
        </h2>

        {/* Menu Desktop */}
        <ul className="items-center gap-5 text-xl hidden md:flex">
          {getItemsMenu().map((item, index) => liItem(item, index))}
        </ul>

        {/* Ícone do Menu Mobile */}
        <div className="md:hidden cursor-pointer block">
          <AnimatePresence mode="wait" initial={false}>
            {!isMenuMobileOpen ? (
              <motion.div
                key="menu-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={() => setIsMenuMobileOpen(true)}
              >
                <IconButton Icon={Menu} iconStyles="size-6" />
              </motion.div>
            ) : (
              <motion.div
                key="close-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={() => setIsMenuMobileOpen(false)}
              >
                <IconButton Icon={X} iconStyles="size-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="flex items-center rounded-full 
      bg-slate-200 dark:bg-zinc-800 cursor-pointer drop-shadow-md gap-0 md:gap-1"
        >
          <LanguageSelector />
          <SwitchTheme />

          <a href="https://github.com/ViniciusMarins" target="_blank">
            <IconButton
              className="hidden md:block"
              Icon={FaGithub}
              iconStyles="size-6"
              title="Github"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/vinicius-assuncao-marins/"
            target="_blank"
          >
            <IconButton
              className="hidden md:block"
              Icon={FaLinkedinIn}
              iconStyles="size-6 text-[#0A5EB2]"
              title="Linkedin"
            />
          </a>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuMobileOpen && (
          <motion.ul
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="items-center gap-5 text-2xl flex flex-col md:hidden mb-7"
          >
            <h2 className="text-emerald-500 font-semibold text-3xl md:text-4xl lg:text-5xl ">
              Vinicius
            </h2>
            {getItemsMenu().map((item, index) => liItem(item, index))}

            <div className="flex items-center">
              <a href="https://github.com/ViniciusMarins" target="_blank">
                <IconButton Icon={FaGithub} iconStyles="size-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/vinicius-assuncao-marins/"
                target="_blank"
              >
                <IconButton
                  Icon={FaLinkedinIn}
                  iconStyles="size-6 text-[#0A5EB2]"
                />
              </a>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
