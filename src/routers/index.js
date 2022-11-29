import MainLayout from "~/components/Layouts/MainLayout";
import WatchMovie from "~/pages/WatchMovie";
import Home from "~/pages/Home";
import CategoryMovie from "~/pages/CategoryMovie";

// public routers
const publicRouters = [
  { path: "/", element: Home, layout: MainLayout },
  { path: "/phim-sap-chieu", element: CategoryMovie, layout: MainLayout },
  { path: "/watch/:name_film", element: WatchMovie, layout: MainLayout },
  { path: "/watch/:name_film/:episode", element: WatchMovie, layout: MainLayout },
  // { path: "/", element: Home, layout: MainLayout },
];

// private routers
const privateRouters = [];

export { publicRouters, privateRouters };
