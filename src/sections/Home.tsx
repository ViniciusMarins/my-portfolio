import CustomButton from "../components/buttons/Button";
import img from "../assets/imgs/developer-pic-1.webp";
import PT_Resume from "../assets/pdfs/resume-pt.pdf";
import EN_Resume from "../assets/pdfs/resume-en.pdf";
import { data } from "../language/LanguageSource";
import { useLanguage } from "../language/LanguageContext";
import { motion } from "framer-motion";
import TypingAnimation from "../components/TypeAnimation";
import { cn } from "../lib/utils";
import GridPattern from "../components/GridPattern";

const Home = () => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate="visible"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="h-full w-full p-6 md:p-12 xl:p-36 lg:p-24 !pt-16 flex justify-center items-center "
    >
      <GridPattern
        numSquares={130}
        maxOpacity={0.2}
        duration={2}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      <div className="flex flex-col md:flex-row justify-center items-center">
        <aside className="w-full md:w-1/2">
          <img
            src={img}
            alt="Artwork"
            className="w-[320px] sm:w-[450px] md:w-[600px] mx-auto"
          />
        </aside>

        <aside className="w-full md:w-1/2">
          <div className="flex flex-col justify-center md:justify-normal !text-start md:text-start">
            <TypingAnimation
              className="text-4xl lg:text-5xl xl:text-6xl !text-start"
              text={data[language].home.title[0]}
              duration={90}
            />
            <TypingAnimation
              className="text-4xl lg:text-5xl xl:text-6xl !text-start text-emerald-500"
              text={data[language].home.title[1]}
              duration={90}
            />
            <TypingAnimation
              className="text-4xl lg:text-5xl xl:text-6xl !text-start"
              text={data[language].home.title[2]}
              duration={90}
            />

            <p className="w-[100%] lg:w-[90%] xl:w-[80%] my-4 sm:mx-0 text-justify text-lg">
              {data[language].home.description}
            </p>

            <div className="flex items-center sm:items-start gap-4 mt-4">
              <CustomButton
                title={data[language].home.resumeButton.en.title}
                href={EN_Resume}
              />
              <CustomButton
                title={data[language].home.resumeButton.pt.title}
                href={PT_Resume}
              />
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};

export default Home;
