import { PATHS } from "@domain";
import { PortfolioPage, SkillsPage, ContactPage } from "@ui";
import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../ui/pages/home-page/HomePage"));

export const Routing: FC = () => {
  return (
    <main>
      <Routes>
        <Route key={"home"} path={PATHS.HOME} element={<HomePage />} />
        <Route
          key={"portfolio"}
          path={PATHS.PORTFOLIO}
          element={<PortfolioPage />}
        />
        <Route key={"skills"} path={PATHS.SKILLS} element={<SkillsPage />} />
        <Route key={"contact"} path={PATHS.CONTACT} element={<ContactPage />} />
      </Routes>
    </main>
  );
};

export default Routing;
