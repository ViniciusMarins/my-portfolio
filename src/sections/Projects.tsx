import { useLanguage } from "../language/LanguageContext";
import { data } from "../language/LanguageSource";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const Projects = () => {
  const { language } = useLanguage();

  return (
    <div className="p-8 md:p-12 xl:p-16 lg:p-24 !pt-16 !pb-[200px] relative overflow-hidden">
      <div className="flex flex-col">
        <h3 className="mb-14 mx-auto">{data[language].projects.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-items-center gap-y-14">
          {data[language].projects.projectsData.map((item) => {
            return (
              <ProjectCard
                key={item.title}
                desktopImgSrc={item.desktopImgSrc}
                mobileImgSrc={item.mobileImgSrc}
                title={item.title}
                githubLink={item.githubLink}
                externalLink={item.externalLink}
                status={item.status}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
