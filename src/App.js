import { Routes, Route } from "react-router-dom";
import { publicRouters } from "./routers";

function App() {
  return (
    <div className="container">
      <Routes>
        {publicRouters &&
          publicRouters.map((route) => {
            const Layout = route.layout;
            const Component = route.element;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
      </Routes>
    </div>
  );
}

export default App;
