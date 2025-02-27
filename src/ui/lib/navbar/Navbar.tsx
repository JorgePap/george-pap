import { FC, useState } from "react";
import { Drawer, Iconography } from "@ui";
import { ICONS, TYPOGRAPHY_ELEMENT, TYPOGRAPHY_VARIANT } from "@domain";
import AllLinks from "./all-links/AllLinks";
import { ButtonMore } from "./button-more";
import AllLinksMobile from "./all-links/AllLinksMobile";

export const Navbar: FC<{ toogleTheme: () => void; darkMode: boolean }> = ({
  toogleTheme,
  darkMode,
}) => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  const toggleMobileNavBar = () => {
    setMobileNavIsOpen(!mobileNavIsOpen);
    if (!mobileNavIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <nav className="fixed w-full z-40 md:pt-[20px] md:top-[0px] md:px-[115px] lg:px-[130px] xl:px-[150px] bg-neutral-1 dark:bg-dark-1">
      {/* navbar */}
      <div className="flex justify-end md:justify-start relative md:py-sm">
        {/* desktop nav */}
        <div className="hidden md:flex">
          <AllLinks
            typographyElement={TYPOGRAPHY_ELEMENT.H3}
            typographyVariant={TYPOGRAPHY_VARIANT.H5}
            className="self-start"
          />
          <ButtonMore toogleTheme={toogleTheme} darkMode={darkMode} />
        </div>
        <div
          className="pt-[10px] pr-[10px] md:hidden md:p-0 "
          onClick={toggleMobileNavBar}
        >
          {!mobileNavIsOpen && (
            <Iconography
              icon={ICONS.MENU}
              width="24"
              height="24"
              classes="stroke-dark-1 dark:stroke-neutral-1"
            />
          )}
          {mobileNavIsOpen && (
            <Iconography
              icon={ICONS.CLOSE}
              width="24"
              height="24"
              classes="stroke-dark-1 dark:stroke-neutral-1"
            />
          )}
        </div>
      </div>

      {/* mobile nav */}
      <div className="relative bg-neutral-1 dark:bg-dark-1">
        <Drawer isDrawerOpen={mobileNavIsOpen}>
          <div className="flex flex-col pt-[50px]">
            <AllLinksMobile
              className="items-center"
              toggleMobileNav={toggleMobileNavBar}
              typographyElement={TYPOGRAPHY_ELEMENT.H3}
              typographyVariant={TYPOGRAPHY_VARIANT.H2}
            />
            <ButtonMore toogleTheme={toogleTheme} darkMode={darkMode} />
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
