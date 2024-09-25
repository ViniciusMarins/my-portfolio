type ResumeButton = {
  title: string;
};

type Home = {
  title: string[];
  description: string;
  resumeButton: {
    en: ResumeButton;
    pt: ResumeButton;
  };
};

type Tag = {
  time: string;
  description: string;
};

type Biography = {
  title: string;
  content: {
    firstParagraph?: string;
    secondParagraph?: string;
    thirdParagraph?: string;
    fourthParagraph?: string;
  };
  imageAlt: string;
  tags: Tag[];
};

type Skills = {
  title: string;
};

type EducationItem = {
  title: string;
  time: string;
  place: string;
  description: string;
};

type Education = {
  title: string;
  timeline: EducationItem[];
};

type ExperienceItem = {
  title: string;
  time: string;
  place: string;
  description: string;
  competences: string[];
};

type Experience = {
  title: string;
  timeline: ExperienceItem[];
};

type Projects = {
  title: string;
  projectsData: ProjectsDataType[];
};

export interface ProjectsDataType {
  title?: string;
  mobileImgSrc?: string;
  desktopImgSrc?: string;
  githubLink?: string;
  externalLink?: string;
  status?: string;
}

type About = {
  biography: Biography;
  skills: Skills;
  education: Education;
  experience: Experience;
};

type LanguageContent = {
  home: Home;
  about: About;
  projects: Projects;
};

export type LanguageKey = "en" | "pt";

export type Languages = {
  en: LanguageContent;
  pt: LanguageContent;
};
