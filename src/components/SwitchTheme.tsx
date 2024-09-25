import { LuSun as Sun } from "react-icons/lu";
import { PiMoonStars as Moon } from "react-icons/pi";
import { motion } from "framer-motion";
import { useTheme } from "../config/useTheme";
const SwitchTheme = () => {
  const { setTheme, theme } = useTheme();

  const isLightTheme = theme === "light";
  return (
    <div
      className="mx-2 mr-0 md:mr-2 relative flex w-[90px] p-2 items-center rounded-l-full rounded-full "
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        boxShadow: isLightTheme
          ? "0px 0px 5px 1px rgb(39 39 42 / 0.2) "
          : "0px 0px 5px 1px rgb(226 232 240 / 0.2)",
      }}
    >
      <motion.div
        initial={false}
        animate={{
          x: isLightTheme ? 0 : 50,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {isLightTheme ? (
          <Sun className="size-6" />
        ) : (
          <Moon className="size-6" />
        )}
      </motion.div>
    </div>
  );
};

export default SwitchTheme;
