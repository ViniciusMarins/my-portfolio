import { motion } from "framer-motion";

// Animation variants
const variants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.45 }}
      className="pt-[50px] md:pt-[100px] h-full w-full content relative overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default Layout;
