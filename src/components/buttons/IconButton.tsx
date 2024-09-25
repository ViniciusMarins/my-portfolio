import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface CustomIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
  iconStyles?: string;
}

const IconButton = ({ Icon, iconStyles, ...rest }: CustomIconProps) => {
  return (
    <button
      {...rest}
      className={`hover:bg-slate-300/50 dark:hover:bg-zinc-700/50 rounded-full p-2 transition-colors duration-300 border-none ${rest.className}`}
    >
      <Icon
        className={`aspect-square flex-shrink-0 ${
          iconStyles ? iconStyles : "size-8"
        }`}
      />
    </button>
  );
};

export default IconButton;
