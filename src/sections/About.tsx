import TimelineCard from "../components/TimelineCard";
import { GrReactjs } from "react-icons/gr";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMui } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiJest } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiAzuredevops } from "react-icons/si";
import SkillCard from "../components/SkillCard";
import { IoCloseSharp } from "react-icons/io5";
import MyImage from "../assets/imgs/eu.png";
import ImageTag from "../components/ImageTag";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { useLanguage } from "../language/LanguageContext";
import { data } from "../language/LanguageSource";
import { SiCsharp } from "react-icons/si";
import Footer from "../components/Footer";
import BlurFade from "../components/BlurFade";
import { MarqueeDemo } from "../components/SlideMarquee";

const XunitIcon = () => {
  return (
    <div className="flex items-center py-4">
      <IoCloseSharp className="size-5" />
      <span className="text-xl">Unit.net</span>
    </div>
  );
};

const skillCards = [
  <SkillCard Icon={GrReactjs} title="React" color="#61DBFB" />,
  <SkillCard Icon={TbBrandTypescript} title="TypeScript" color="#007ACC" />,
  <SkillCard Icon={SiJest} title="Jest" color="#C92C2C" />,
  <SkillCard Icon={SiMui} title="Material UI" color="#007FFF" />,
  <SkillCard Icon={SiCsharp} title="C#" color="#3F088E" />,
  <SkillCard Icon={AiOutlineDotNet} title=".NET" color="#5632D5" />,
  <SkillCard Icon={XunitIcon} title="XUnit" color="#5632D5" />,
  <SkillCard Icon={FaGitAlt} title="Git" color="#F1502F" />,
  <SkillCard Icon={FaGithub} title="Github" />,
  <SkillCard Icon={SiTailwindcss} title="Tailwind" color="#38BDF8" />,
  <SkillCard Icon={FaJava} title="Java" color="#E25040" />,
  <SkillCard Icon={SiSpring} title="Spring Boot" color="#72B444" />,
  <SkillCard Icon={SiMysql} title="Mysql" color="#4A7DA4" />,
  <SkillCard Icon={SiMicrosoftsqlserver} title="Sql Server" color="#AC353B" />,
  <SkillCard Icon={SiAzuredevops} title="Azure Devops" color="#007ACC" />,
];

const About = () => {
  const { language } = useLanguage();
  return (
    <div className="p-8 md:p-12 xl:p-36 lg:p-24 !pt-16 overflow-hidden !pb-[200px] relative">
      <div className="flex flex-col gap-24">
        <section className="flex flex-col">
          <h3 className="mb-10 mx-auto">
            {data[language].about.biography.title}
          </h3>
          <div className="flex gap-14 lg:gap-24 justify-center items-center flex-wrap">
            <div className="relative">
              <img
                src={MyImage}
                alt={data[language].about.biography.imageAlt}
                className="size-[300px] md:size-[400px] aspect-square rounded-full"
              />

              <ImageTag
                time={data[language].about.biography.tags[0].time}
                description={data[language].about.biography.tags[0].description}
                sx="absolute -top-8 -left-8  md:-left-12 -rotate-12"
              />

              <ImageTag
                time={data[language].about.biography.tags[1].time}
                description={data[language].about.biography.tags[1].description}
                sx="-top-8 md:-right-14 -right-8 rotate-12"
              />

              <ImageTag
                time={data[language].about.biography.tags[2].time}
                description={data[language].about.biography.tags[2].description}
                sx="-bottom-8 -left-4 md:-left-14"
              />
            </div>

            <p className="text-justify max-w-[800px] drop-shadow-lg font-normal">
              {data[language].about.biography.content.firstParagraph}
              <br />
              <br />
              {data[language].about.biography.content.secondParagraph}
              <br />
              <br />
              {data[language].about.biography.content.thirdParagraph}
              <br />
              <br />
              {data[language].about.biography.content.fourthParagraph}
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h3 className="mb-10 mx-auto">{data[language].about.skills.title}</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 xl:px-10 px-0 max-w-[1240px] w-full mx-auto justify-items-center">
            {skillCards.map((item, index) => (
              <BlurFade
                key={item.props.title}
                delay={0.25 + index * 0.05}
                inView
                className="w-full"
              >
                {item}
              </BlurFade>
            ))}
          </div>
        </section>

        <section className="w-screen relative -mx-8 md:-mx-12 lg:-mx-24 xl:-mx-36">
          <MarqueeDemo />
        </section>

        <section className="flex flex-col md:flex-row gap-8 lg:gap-24 justify-center">
          <div>
            <h3 className="mb-10">{data[language].about.education.title}</h3>
            {data[language].about.education.timeline.map((item, index) => (
              <TimelineCard
                key={index}
                title={item.title}
                time={item.time}
                place={item.place}
                description={item.description}
              />
            ))}
          </div>

          <div>
            <h3 className="mb-10">{data[language].about.experience.title}</h3>

            {data[language].about.experience.timeline.map((item, index) => (
              <TimelineCard
                key={index}
                title={item.title}
                time={item.time}
                place={item.place}
                description={item.description}
                competences={item.competences}
              />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
