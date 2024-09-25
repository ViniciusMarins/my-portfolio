import { memo, useEffect, useState } from "react";
import { SwiperProps, SwiperSlide } from "swiper/react";
import Slider from "./slider/Slider";
import IconButton from "./buttons/IconButton";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title?: string;
  mobileImgSrc?: string;
  desktopImgSrc?: string;
  githubLink?: string;
  externalLink?: string;
  status?: string;
}
const ProjectCard = ({
  desktopImgSrc,
  externalLink,
  githubLink,
  mobileImgSrc,
  title,
  status,
}: ProjectCardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const settings: SwiperProps = {
    effect: "cards",
    cardsEffect: {
      slideShadows: false,
    },
    navigation: !isMobile,
    loop: true,
    grabCursor: true,
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 925);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-[300px]">
      <h4 className="text-center drop-shadow-sm mb-4">{title}</h4>
      <div className="bg-slate-200/50 rounded-full dark:bg-zinc-800 z-1">
        <Slider settings={settings}>
          <SwiperSlide>
            <img src={mobileImgSrc} className="user-select-none" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={desktopImgSrc} className="h-[300px] user-select-none" />
          </SwiperSlide>
        </Slider>
      </div>

      <div className="w-full p-5 rounded-full">
        <div className="flex flex-col gap-3">
          <p
            className={`p-1 rounded-full text-sm font-semibold w-full text-center ${status === "Concluído" || status === "Completed"
              ? "bg-emerald-500/30"
              : "bg-yellow-500/30"
              } `}
          >
            {status}
          </p>
          <div className="flex gap-1 justify-center">
            <a href={githubLink} target="_blank">
              <IconButton Icon={FaGithub} title="Link para o repositório" />
            </a>
            {externalLink && (
              <a href={externalLink} target="_blank">
                <IconButton Icon={FiExternalLink} title="Link para o site" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectCard);
