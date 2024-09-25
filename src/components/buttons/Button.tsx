import { FaDownload } from "react-icons/fa6";
const CustomButton = ({ title, href }: { title: string; href?: string }) => {
  return (
    <a href={href} download className="w-full max-w-[150px]">
      <button className="w-full bg-zinc-900 text-slate-200 p-2 rounded-md shadow-md border-emerald-500/20 dark:bg-slate-200 dark:text-zinc-900 drop-shadow-md border homeBtn flex justify-evenly gap-1">
        <span>{title}</span>
        <FaDownload className="size-5 animate-bounce" />
      </button>
    </a>
  );
};

export default CustomButton;
