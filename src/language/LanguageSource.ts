import { LanguageKey, Languages, ProjectsDataType } from "./LanguageTypes";

// brand
import brand_desktop from "../assets/imgs/projects/brand/desktop.png";
import brand_mobile from "../assets/imgs/projects/brand/mobile.png";

// yt homepage
import vinitube_desktop from "../assets/imgs/projects/yt-homepage/desktop.png";
import vinitube_mobile from "../assets/imgs/projects/yt-homepage/mobile.png";

// microservice
import microservice_desktop from "../assets/imgs/projects/microservice/desktop.png";
import microservice_mobile from "../assets/imgs/projects/microservice/mobile.png";

// ecommerce
import ecommerce_desktop from "../assets/imgs/projects/ecommerce/desktop.png";
import ecommerce_mobile from "../assets/imgs/projects/ecommerce/mobile.png";

// pokedex
import pokedex_desktop from "../assets/imgs/projects/pokedex/desktop.png";
import pokedex_mobile from "../assets/imgs/projects/pokedex/mobile.png";

// post_shadcn
import post_shadcn_desktop from "../assets/imgs/projects/post-shadcn/desktop.png";
import post_shadcn_mobile from "../assets/imgs/projects/post-shadcn/mobile.png";

// sapdi
import sapdi_desktop from "../assets/imgs/projects/sapdi/desktop.png";
import sapdi_mobile from "../assets/imgs/projects/sapdi/mobile.png";

// doit
import doit_desktop from "../assets/imgs/projects/doit/desktop.png";
import doit_mobile from "../assets/imgs/projects/doit/mobile.png";

export const projectsData = (language: LanguageKey): ProjectsDataType[] => {
  const getStatus = (status: string) => {
    switch (language) {
      case "pt":
        return status;

      case "en":
        switch (status) {
          case "Concluído":
            return "Completed";
          case "Em andamento":
            return "In progress";
          default:
            return status;
        }
    }
  };

  return [
    {
      title: "Brand Website",
      mobileImgSrc: brand_mobile,
      desktopImgSrc: brand_desktop,
      githubLink:
        "https://github.com/ViniciusMarins/brand-website-reactjs-tailwind",
      externalLink: "https://brand-website-reactjs-tailwind.netlify.app/",
      status: getStatus("Concluído"),
    },
    {
      title: "ViniTube",
      mobileImgSrc: vinitube_mobile,
      desktopImgSrc: vinitube_desktop,
      githubLink: "https://github.com/ViniciusMarins/yt-homepage-react",
      externalLink: "https://vinitube-homepage-react.netlify.app/",
      status: getStatus("Concluído"),
    },
    {
      title: "Authentication Service",
      mobileImgSrc: microservice_mobile,
      desktopImgSrc: microservice_desktop,
      githubLink:
        "https://github.com/ViniciusMarins/fullstack-users_and_authentication-microservice?tab=readme-ov-file",
      status: getStatus("Concluído"),
    },
    {
      title: "Ecommerce",
      mobileImgSrc: ecommerce_mobile,
      desktopImgSrc: ecommerce_desktop,
      githubLink: "https://github.com/ViniciusMarins/e-commerce-reactjs",
      externalLink: "https://e-commerce-reactjs-shopstore.netlify.app/",
      status: getStatus("Concluído"),
    },
    {
      title: "Pokedex",
      mobileImgSrc: pokedex_mobile,
      desktopImgSrc: pokedex_desktop,
      githubLink: "https://github.com/ViniciusMarins/pokedex-reactjs",
      externalLink: "https://reactpokemonapi.netlify.app/",
      status: getStatus("Concluído"),
    },
    {
      title: "Post Shadcn",
      mobileImgSrc: post_shadcn_mobile,
      desktopImgSrc: post_shadcn_desktop,
      githubLink: "https://github.com/ViniciusMarins/post-countries-shadcn-ui",
      externalLink: "https://restcountries-shadcn-ui.netlify.app/",
      status: getStatus("Concluído"),
    },
    {
      title: "Sapdi System",
      mobileImgSrc: sapdi_mobile,
      desktopImgSrc: sapdi_desktop,
      githubLink: "https://github.com/ViniciusMarins/PDI-management-system",
      externalLink: "http://pep2.ifsp.edu.br/sapdi/",
      status: getStatus("Concluído"),
    },
    {
      title: "Doit - Gym System",
      mobileImgSrc: doit_mobile,
      desktopImgSrc: doit_desktop,
      githubLink: "https://github.com/do-it-project/do-it",
      status: getStatus("Em andamento"),
    },
  ];
};

export const data: Languages = {
  en: {
    home: {
      title: ["Hi, I'm Vinícius,", "a Full Stack", "Web Developer"],
      description:
        "I am a native of Brazil and currently living in the state of São Paulo. At the moment, i am specialized in fullstack web development using as main technologies: React, Typescript, C#, .NET and SQL.",
      resumeButton: {
        en: {
          title: "EN Resume",
        },
        pt: {
          title: "PT Resume",
        },
      },
    },
    about: {
      biography: {
        title: "Introduction",
        content: {
          firstParagraph:
            "My name is Vinicius Assunção, and since my childhood, I have had a great interest in technology and computers. From an early age, I have always had a strong aptitude and curiosity to learn more about computing and programming. I have been studying and improving my skills in this area for 5 years.",
          secondParagraph:
            "What motivates me most about programming is the possibility of solving everyday problems through technology, creating solutions that really make a difference in people's lives.",
          thirdParagraph:
            "I believe that delivering a good user experience (UX) and an intuitive interface (UI) are essential for the success of any digital product.",
          fourthParagraph:
            "I am always looking to study and improve both personally and professionally. I am a person who absorbs constructive criticism and feedback well. I am always open to new challenges that help me achieve my personal and professional goals.",
        },
        imageAlt: "Vinicius Assunção",
        tags: [
          { time: "5+", description: "Years of study" },
          { time: "15+", description: "Projects developed" },
          { time: "6+", description: "Months of experience" },
        ],
      },
      skills: {
        title: "Skills",
      },
      education: {
        title: "Education",
        timeline: [
          {
            title: "Bachelor in Computer Science",
            time: "jan 2020 - dec 2023",
            place:
              "Federal Institute of Education, Science, and Technology of São Paulo (IFSP).",
            description:
              "Thesis Title: A tool for student attendance control through facial recognition.",
          },
        ],
      },
      experience: {
        title: "Professional Experience",
        timeline: [
          {
            title: "Full-Stack Web Developer",
            time: "mai 2024 - present",
            place: "Fifteen Hundred Consultancy - 1500.",
            description:
              "Participation in the development and maintenance of SAAS.",
            competences: [
              "Javascript",
              "Typescript",
              "React",
              "Jest",
              ".NET",
              "XUnit",
              "SQL Server",
              "C#",
              "Git",
              "Github",
              "Azure Devops",
            ],
          },
          {
            title: "Full-Stack Web Developer",
            time: "jan 2023 - dec 2023",
            place:
              "Federal Institute of Education, Science, and Technology of São Paulo (IFSP).",
            description:
              "Participated in teams developing and maintaining systems. Carried out backend and frontend development tasks. Utilized agile SCRUM methodology for process and activity management.",
            competences: [
              "Scrum Methodology",
              "Java",
              "Primefaces",
              "JSF",
              "MySQL",
              "Payara",
              "HTML",
              "CSS3",
              "Git",
              "Github",
              "Docker",
              "Glassfish",
            ],
          },
          {
            title: "Extension Project",
            time: "jan 2022 - dec 2022",
            place:
              "Federal Institute of Education, Science, and Technology of São Paulo (IFSP).",
            description:
              "Project carried out by IFSP in partnership with high schools and elementary schools to disseminate basic robotics and programming knowledge to local community students.",
            competences: [
              "Programming Logic and Robotics Instructor",
              "Communication",
              "Programming in C",
              "Electronic Circuits",
              "Interpersonal Relationships",
              "Autodesk Tinkercad",
              "Arduino",
            ],
          },
        ],
      },
    },
    projects: {
      title: "Projects",
      projectsData: projectsData("en"),
    },
  },
  pt: {
    home: {
      title: ["Olá, sou o Vinícius,", "um Desenvolvedor Web", "Full Stack"],
      description:
        "Sou nativo do Brasil e atualmente morando no estado de São Paulo. No momento, estou especializado no desenvolvimento web fullstack utilizando como principais tecnologias: React, Typescript, C#, .NET e SQL.",
      resumeButton: {
        en: {
          title: "EN Currículo",
        },
        pt: {
          title: "PT Currículo",
        },
      },
    },
    about: {
      biography: {
        title: "Introdução",
        content: {
          firstParagraph:
            "Meu nome é Vinicius Assunção, e desde a minha infância, tenho um grande interesse por tecnologia e computadores. Desde cedo, sempre tive uma forte aptidão e curiosidade por aprender mais sobre computação e programação. Já estudo e me aprimoro nessa área há 5 anos.",
          secondParagraph:
            "O que mais me motiva na programação é a possibilidade de resolver problemas cotidianos por meio da tecnologia, criando soluções que realmente fazem a diferença na vida das pessoas.",
          thirdParagraph:
            "Acredito que entregar uma boa experiência de usuário (UX) e uma interface intuitiva (UI) são essenciais para o sucesso de qualquer produto digital. ",
          fourthParagraph:
            "Estou sempre em busca de estudar e melhorar tanto pessoalmente quanto profissionalmente, sou uma pessoa que absorve bem críticas construtivas e feedbacks. Estou sempre aberto para novos desafios que me ajudem a alcançar meus objetivos profissionais e pessoais.",
        },
        imageAlt: "Vinicius Assunção",
        tags: [
          { time: "5+", description: "Anos de estudos" },
          { time: "15+", description: "Projetos desenvolvidos" },
          { time: "6+", description: "Meses de experiência" },
        ],
      },
      skills: {
        title: "Habilidades",
      },
      education: {
        title: "Educação",
        timeline: [
          {
            title: "Bacharelado em Ciência da Computação",
            time: "jan 2020 - dez 2023",
            place:
              "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP).",
            description:
              "Título do TCC: Ferramenta para controle de presenças de alunos por reconhecimento facial.",
          },
        ],
      },
      experience: {
        title: "Experiência Profissional",
        timeline: [
          {
            title: "Desenvolvedor Web Full-Stack",
            time: "mai 2024 - atualmente",
            place: "Fifteen Hundred Consultoria - 1500.",
            description:
              "Participação no desenvolvimento e manutenção de SAAS.",
            competences: [
              "Javascript",
              "Typescript",
              "React",
              "Jest",
              ".NET",
              "XUnit",
              "SQL Server",
              "C#",
              "Git",
              "Github",
              "Azure Devops",
            ],
          },
          {
            title: "Desenvolvedor Web Full-Stack",
            time: "jan 2023 - dez 2023",
            place:
              "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP).",
            description:
              "Participação em equipes de desenvolvimento e manutenção de sistemas. Realização de atividades e tarefas de desenvolvimento backend e frontend. Utilização de metodologia ágil SCRUM para gerenciamento de processos e atividades.",
            competences: [
              "Metodologia Scrum",
              "Java",
              "Primefaces",
              "JSF",
              "MySQL",
              "Payara",
              "HTML",
              "CSS3",
              "Git",
              "Github",
              "Docker",
              "Glassfish",
            ],
          },
          {
            title: "Projeto de Extensão",
            time: "jan 2022 - dez 2022",
            place:
              "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP).",
            description:
              "Projeto realizado pelo IFSP em parceria com escolas de Ensino Médio e Ensino Fundamental a fim de disseminar conhecimentos básicos de robótica e programação para alunos da comunidade local.",
            competences: [
              "Professor de Lógica de Programação e Robótica",
              "Comunicação",
              "Programação em C",
              "Circuitos Eletrônicos",
              "Relacionamentos Interpessoais",
              "Autodesk Tinkercad",
              "Arduino",
            ],
          },
        ],
      },
    },
    projects: {
      title: "Projetos",
      projectsData: projectsData("pt"),
    },
  },
};
