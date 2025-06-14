import { Suspense } from "react";
import ProtectedRoutes from "../ProtectedRoutes";
import { routes } from "../routes";
import { Route, Routes } from "react-router-dom";

export default function Content() {
  return (
    <div>
      {/* Header */}

      <main>
        <Suspense fallback={<p>loading</p>}>
          <ProtectedRoutes>
            <Routes>
              {routes.map((route, index) => {
                const { path, component: Component } = route;

                return (
                  <Route
                    key={index + "__route"}
                    path={path}
                    element={<Component />}
                  />
                );
              })}
            </Routes>
          </ProtectedRoutes>
        </Suspense>
      </main>
      {/* footer  */}
    </div>
  );
}
