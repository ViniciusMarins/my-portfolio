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

interface ProjectsDataType {
  title?: string;
  mobileImgSrc?: string;
  desktopImgSrc?: string;
  githubLink?: string;
  externalLink?: string;
  status?: string;
}

export const projectsData: ProjectsDataType[] = [
  {
    title: "Brand Website",
    mobileImgSrc: brand_mobile,
    desktopImgSrc: brand_desktop,
    githubLink:
      "https://github.com/ViniciusMarins/brand-website-reactjs-tailwind",
    externalLink: "https://brand-website-reactjs-tailwind.netlify.app/",
    status: "Concluído",
  },
  {
    title: "ViniTube",
    mobileImgSrc: vinitube_mobile,
    desktopImgSrc: vinitube_desktop,
    githubLink: "https://github.com/ViniciusMarins/yt-homepage-react",
    externalLink: "https://vinitube-homepage-react.netlify.app/",
    status: "Concluído",
  },
  {
    title: "Authentication Service",
    mobileImgSrc: microservice_mobile,
    desktopImgSrc: microservice_desktop,
    githubLink:
      "https://github.com/ViniciusMarins/fullstack-users_and_authentication-microservice?tab=readme-ov-file",
    status: "Concluído",
  },
  {
    title: "Ecommerce",
    mobileImgSrc: ecommerce_mobile,
    desktopImgSrc: ecommerce_desktop,
    githubLink: "https://github.com/ViniciusMarins/e-commerce-reactjs",
    externalLink: "https://e-commerce-reactjs-shopstore.netlify.app/",
    status: "Concluído",
  },
  {
    title: "Pokedex",
    mobileImgSrc: pokedex_mobile,
    desktopImgSrc: pokedex_desktop,
    githubLink: "https://github.com/ViniciusMarins/pokedex-reactjs",
    externalLink: "https://reactpokemonapi.netlify.app/",
    status: "Concluído",
  },
  {
    title: "Post Shadcn",
    mobileImgSrc: post_shadcn_mobile,
    desktopImgSrc: post_shadcn_desktop,
    githubLink: "https://github.com/ViniciusMarins/post-countries-shadcn-ui",
    externalLink: "https://restcountries-shadcn-ui.netlify.app/",
    status: "Concluído",
  },
  {
    title: "Sapdi System",
    mobileImgSrc: sapdi_mobile,
    desktopImgSrc: sapdi_desktop,
    githubLink: "https://github.com/ViniciusMarins/PDI-management-system",
    externalLink: "http://pep2.ifsp.edu.br/sapdi/",
    status: "Em andamento",
  },
];
