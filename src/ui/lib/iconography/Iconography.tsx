import { ICONS } from "@domain";
import { FC } from "react";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import AmericanFlag from "./AmericanFlag";
import Sun from "./Sun";
import Moon from "./Moon";

export interface Props {
  icon: ICONS;
  size?: "24" | "32" | "64";
  width?: string;
  height?: string;
  fill?: string;
  classes?: string;
  title?: string;
  onClick?: () => void;
}

export const Iconography: FC<Props> = ({
  icon,
  //   size = "24",
  width = "1rem",
  height = "1rem",
  onClick,
  //   fill = "fill-neutral-10",
  classes = "",
}) => {
  //   const sizeClass: Record<string, string> = {
  //     "24": "text-[1.5rem] min-h-[20px] min-w-[20px]",
  //     "32": "text-[2rem] min-h-[24px] min-w-[24px]",
  //     "64": "text-[4rem]",
  //   };
  const className = `${classes}`;
  const attributes = { width, height, onClick, className };

  switch (icon) {
    case ICONS.MENU:
      return <MenuIcon {...attributes} />;
    case ICONS.CLOSE:
      return <CloseIcon {...attributes} />;
    case ICONS.ARROW_UP:
      return <ArrowUp {...attributes} />;
    case ICONS.ARROW_DOWN:
      return <ArrowDown {...attributes} />;
    case ICONS.ARROW_LEFT:
      return <ArrowLeft {...attributes} />;
    case ICONS.ARROW_RIGHT:
      return <ArrowRight {...attributes} />;
    case ICONS.AMERICAN_FLAG:
      return <AmericanFlag {...attributes} />;
    case ICONS.SUN:
      return <Sun {...attributes} />;
    case ICONS.MOON:
      return <Moon {...attributes} />;
    default:
      return <div></div>;
  }
};

export default Iconography;
