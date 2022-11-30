import { Routes, Route } from "react-router-dom";
import { privateRouters, publicRouters } from "./routers";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
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

          {privateRouters &&
            privateRouters.map((route) => {
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
    </>
  );
}

export default App;
