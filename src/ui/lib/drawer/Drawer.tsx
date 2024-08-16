import { FC, ReactNode } from "react";

export const Drawer: FC<{ isDrawerOpen: boolean; children?: ReactNode }> = ({
  isDrawerOpen,
  children,
}) => {
  return (
    <div
      className={`${
        isDrawerOpen ? "translate-x-0" : "translate-x-[100%]"
      } md:hidden z-30 absolute left-[0] right-[0] top-[0] min-h-dvh 
      bg-neutral-1 dark:bg-dark-1 transition-transform duration-[600ms] 
      ease-[cubic-bezier(.77,0,.175,1)]`}
    >
      {children}
    </div>
  );
};

export default Drawer;
