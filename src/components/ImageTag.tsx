import NumberTicker from "./NumberTick";

interface ImageTagProps {
  time: string;
  description: string;
  sx?: string;
}

const ImageTag = ({ description, time, sx }: ImageTagProps) => {
  return (
    <div
      className={`flex flex-col gap-1 justify-center items-center text-center absolute backdrop-filter ${sx}`}
    >
      <div className="font-bold text-lg md:text-4xl">
        <NumberTicker value={time as unknown as number} delay={0.5} />+
      </div>
      <div className="font-bold text-sm md:text-base">{description}</div>
    </div>
  );
};

export default ImageTag;
