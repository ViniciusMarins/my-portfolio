import { FaStar } from "react-icons/fa6";

interface SkillCardProps {
  title: string;
  Icon: React.ElementType;
  color?: string;
}

const SkillCard = ({ Icon, title, color }: SkillCardProps) => {
  const favorites: string[] = [
    "TypeScript",
    "React",
    "C#",
    ".NET",
    "Git",
    "Material UI",
    "Sql Server",
  ];

  return (
    <div
      className="flex flex-col p-5 rounded-2xl border dark:border-gray-50/[.1] max-w-[180px] w-full
  justify-center items-center gap-3 shadow-md drop-shadow-md flex-shrink-0 transition-all duration-200 bg-slate-100/90 dark:hover:bg-zinc-700/70 dark:bg-zinc-800/90 hover:scale-105 hover:shadow-emerald-500 relative cursor-pointer"
    >
      <Icon className="size-14 z-20" color={color} />
      {title === "C#" && (
        <span className="absolute top-[22%] rounded-full bg-slate-200 size-10 z-10" />
      )}
      <p className="font-medium text-center">{title}</p>
      {favorites.includes(title) && (
        <FaStar className="absolute top-2 right-2 text-yellow-500" />
      )}
    </div>
  );
};

export default SkillCard;
