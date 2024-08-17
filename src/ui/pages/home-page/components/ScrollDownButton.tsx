import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { FC } from "react";
import { Typography } from "@ui";

export const ScrollDownButton: FC = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToBottom}>
      <Typography
        element={TYPOGRAPHY_ELEMENT.P}
        variant={TYPOGRAPHY_VARIANT.BUTTON_SM}
        text="Scroll down"
      />
    </button>
  );
};

export default ScrollDownButton;
