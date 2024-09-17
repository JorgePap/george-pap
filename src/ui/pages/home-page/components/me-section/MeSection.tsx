import { TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import { FC } from "react";
import { Typography } from "@ui";
import MePhoto from "../../../../../assets/me.jpg";

export const MeSection: FC = () => {
  return (
    <div className="min-h-screen pt-[40px] md:pt-[120px] lg:pt-[150px]">
      <div className="flex flex-col lg:flex-row w-full ">
        <div className="flex flex-col gap-xl basis-1/2">
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.H3}
            text="Me"
            color="text-transparent text-stroke-black dark:text-stroke-white"
          />
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text="Hi, I'm George, and here's a bit about me.
              I'm 27 years old and a Front-End Developer based in Xanthi,
              a small city in Greece, with a strong passion for web development
              and a love for creating interactive, responsive web experiences.
              I'm always excited to explore new technologies and creative solutions."
          />
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text="As a self-taught developer, I constantly strive to stay
              updated on the latest trends and best practices in front-end development.
              I believe that continuous learning is key to growth, so I make it a point
              to expand my knowledge and refine my skills regularly. My goal is to deliver
              high-quality work that balances both creativityand functionality,
              ensuring that users have a seamless and engaging experience."
          />
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text="I have a particular interest in React and enjoy leveraging its capabilities
              to build dynamic, user-friendly interfaces. My focus also includes responsive
              design and performance optimization, as I believe these elements are crucial
              for a great user experience. I'm eager to dive into ambitious projects where
              I can contribute, grow, and make a meaningful impact."
          />
          <Typography
            element={TYPOGRAPHY_ELEMENT.P}
            variant={TYPOGRAPHY_VARIANT.P1}
            text="Currently, I'm looking for my first professional opportunity to collaborate with
              a dynamic team and work on challenging projects that push the boundaries of what web
              development can achieve. I'm confident that my passion, dedication, and drive to learn
              will make me a valuable addition to any project."
          />
        </div>

        <div className="flex basis-1/2 justify-center items-center">
          <img
            src={MePhoto}
            className="border-[1px] border-neutral-2 dark:border-neutral-1 rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] w-[250px] h-[250px] mt-[40px] mb-[40px]
           md:w-[350px] md:h-[350px]
           lg:w-[400px] lg:h-[400px] lg:mt-[100px]
           xl:w-[430px] xl:h-[430px] "
          />
        </div>
      </div>
    </div>
  );
};

export default MeSection;
