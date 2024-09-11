import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { FC } from "react";
import { Typography } from "@ui";

export const HoverText: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex ">
      {text.split("").map((char, index) => (
        <Typography
          key={index}
          element={TYPOGRAPHY_ELEMENT.H3}
          variant={TYPOGRAPHY_VARIANT.H1}
          classes="tracking-tight inline-block transition-transform duration-200 hover:-translate-y-2 lg:hover:-translate-y-6"
        >
          {char}
        </Typography>
      ))}
    </div>
  );
};

export default HoverText;
