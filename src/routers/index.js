import MainLayout from "~/components/Layouts/MainLayout";
import WatchMovie from "~/pages/WatchMovie";
import Home from "~/pages/Home";
import CategoryMovie from "~/pages/CategoryMovie";
import Search from "~/pages/Search";
import InfoUser from "~/pages/InfoUser";
import ChangePassword from "~/pages/ChangePassword";
import MoviesFavorite from "~/pages/MoviesFavorite";

// public routers
const publicRouters = [
  { path: "/", element: Home, layout: MainLayout },
  { path: "/the-loai/:category", element: CategoryMovie, layout: MainLayout },
  { path: "/tim-kiem/:searchParam", element: Search, layout: MainLayout },
  { path: "/watch/:name_film", element: WatchMovie, layout: MainLayout },
  { path: "/watch/:name_film/:episode", element: WatchMovie, layout: MainLayout },
  // { path: "/", element: Home, layout: MainLayout },
];

// private routers
const privateRouters = [
  { path: "/sua-thong-tin", element: InfoUser, layout: MainLayout },
  { path: "/doi-mat-khau", element: ChangePassword, layout: MainLayout },
  { path: "/phim-da-xem", element: MoviesFavorite, layout: MainLayout },
  { path: "/phim-da-thich", element: MoviesFavorite, layout: MainLayout },
  { path: "/phim-theo-doi", element: MoviesFavorite, layout: MainLayout },
];

export { publicRouters, privateRouters };
