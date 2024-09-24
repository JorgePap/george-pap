import { FC, lazy, Suspense } from "react";
import { PATHS } from "@domain";
import { PortfolioPage, SkillsPage, ContactPage } from "@ui";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../ui/pages/home-page/HomePage"));

export const Routing: FC = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route key={"home"} path={PATHS.HOME} element={<HomePage />} />
          <Route
            key={"portfolio"}
            path={PATHS.PORTFOLIO}
            element={<PortfolioPage />}
          />
          <Route key={"skills"} path={PATHS.SKILLS} element={<SkillsPage />} />
          <Route
            key={"contact"}
            path={PATHS.CONTACT}
            element={<ContactPage />}
          />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Routing;
