import { cn } from "../lib/utils";
import Marquee from "./Marquee";
import Eu from "../assets/imgs/eu.png";
import { useLanguage } from "../language/LanguageContext";

const reviews = [
  {
    name: "Vinicius",
    username: "@vini_am01",
    body: {
      pt: "Obrigado por visitar meu portfólio 🎉🎉",
      en: "Thank you for visiting my portfólio 🎉🎉",
    },
    img: Eu,
  },
  {
    name: "Vinicius",
    username: "@vini_am01",
    body: {
      pt: "Confere meus projetos na próxima seção 👀",
      en: "Check out my projects in the next section 👀",
    },
    img: Eu,
  },
  {
    name: "Vinicius",
    username: "@vini_am01",
    body: {
      pt: "Sou uma pessoa esforçada, dedicada e sempre focada em aprender mais 💪",
      en: "I am a hardworking, dedicated person and always focused on learning more 💪",
    },
    img: Eu,
  },
  {
    name: "Vinicius",
    username: "@vini_am01",
    body: {
      pt: "Gostou dos meus projetos? Entre em contato comigo: v.assuncao.dev@gmail.com 📩",
      en: "Liked my projects? Get in touch with me: v.assuncao.dev@gmail.com 📩",
    },
    img: Eu,
  },
  {
    name: "Vinicius",
    username: "@vini_am01",
    body: {
      pt: "Me segue no github ou conecte-se comigo no linkedin, prometo aceitar a solicitação 😉",
      en: "Follow me on GitHub or connect with me on LinkedIn, I promise to accept your request 😉",
    },
    img: Eu,
  },
  {
    name: "Vinicius",
    username: "@vini_am01",
    body: {
      pt: "Curiosidade sobre mim: gosto de gatos e violão 🐈 🎻",
      en: "Fun fact about me: I like cats and playing the guitar 🐈 🎻",
    },
    img: Eu,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 hover:scale-105 duration-200 transition ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // bg-slate-100/90
        // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        "dark:border-gray-50/[.1] dark:bg-zinc-800/90 dark:hover:bg-zinc-700/70"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  const { language } = useLanguage();
  return (
    <div className="relative flex w-[100%] flex-col items-center justify-center overflow-hidden rounded-lg  !bg-transparent">
      <Marquee className="[--duration:20s]">
        {firstRow.map((review, idx) => (
          <ReviewCard
            key={review.username + idx}
            username={review.username}
            img={review.img}
            name={review.name}
            body={review.body[language]}
          />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((review, idx) => (
          <ReviewCard
            key={review.username + idx + "reverse"}
            username={review.username}
            img={review.img}
            name={review.name}
            body={review.body[language]}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-transparent dark:from-background"></div>
    </div>
  );
}
