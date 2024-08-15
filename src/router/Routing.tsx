import { PATHS } from "@domain";
import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../ui/pages/home-page/HomePage"));

export const Routing: FC = () => {
  return (
    <main>
      <Routes>
        <Route
          key={"home"}
          path={PATHS.HOME}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          key={"portfolio"}
          path={PATHS.PORTFOLIO}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          key={"skills"}
          path={PATHS.SKILLS}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          key={"contact"}
          path={PATHS.CONTACT}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
      </Routes>
    </main>
  );
};

export default Routing;
