import { useLanguage } from "../language/LanguageContext";

interface TimelineCardProps {
  title: string;
  time: string;
  place: string;
  description: string;
  competences?: string[];
}

const TimelineCard = ({
  description,
  place,
  time,
  title,
  competences,
}: TimelineCardProps) => {
  const { language } = useLanguage();
  return (
    <div className="max-w-[550px] w-full border-l-2 border-l-emerald-500 flex flex-col gap-3 !pt-0 relative px-5 !pb-10">
      <h4 className="text-emerald-500 -mt-3">{title}</h4>
      <span className="p-2 bg-slate-200 dark:bg-zinc-700/60 text-zinc-900 dark:text-slate-200 font-bold w-fit rounded-md">
        {time}
      </span>
      <div className="text-md italic font-semibold">{place}</div>
      <p className="text-justify">{description}</p>

      {competences && (
        <>
          <hr className="border dark:border-zinc-800" />
          <p className="text-justify">
            <span className="font-semibold">
              {language === "pt" ? "Competências:" : "Competences:"}{" "}
            </span>
            {competences?.join(" ° ")}.
          </p>
        </>
      )}

      <span className="absolute -top-[5px] -left-[7px] size-3 aspect-square rounded-full bg-emerald-500 animate-ping " />
      <span className="absolute -top-[5px] -left-[7px] size-3 aspect-square rounded-full bg-emerald-500" />
    </div>
  );
};

export default TimelineCard;
