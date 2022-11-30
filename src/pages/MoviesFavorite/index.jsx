import React, { useEffect } from "react";
import classNames from "classnames/bind";

import styles from "../Home/Home.module.css";

import MoviesTitle from "~/components/MoviesTitle";
import MoviesItem from "~/components/MoviesItem";
import { useLocation, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const copyStyle = classNames.bind(styles);

const MoviesFavorite = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const search = useSelector((state) => state.search);
  const title = {
    "/phim-da-xem": "PHIM ĐÃ XEM",
    "/phim-da-thich": "PHIM ĐÃ THÍCH",
    "/phim-theo-doi": "PHIM THEO DÕI",
  };
  const dataMovies = useSelector((state) => state.auth.user?.dataMovies);
  let listMovie = null;
  switch (location.pathname) {
    case "/phim-da-xem":
      listMovie = dataMovies?.listMovieWatched;
      break;
    case "/phim-da-thich":
      listMovie = dataMovies?.listMovieLike;
      break;
    case "/phim-theo-doi":
      listMovie = dataMovies?.listMovieFollow;
      break;
    default:
      console.log("why???");
  }
  useEffect(() => {
    console.log(listMovie);
    if (!dataMovies) navigate("/");
  }, []);
  return (
    <>
      <section className={copyStyle("movies-upcoming", "grid")} style={{ marginTop: 50 }}>
        <div className={copyStyle("movies-upcoming__content", "movies__content")}>
          <MoviesTitle type={0} title={title[location.pathname]} isTitleRight={false} />
          <div className={copyStyle("row")}>
            {listMovie &&
              listMovie.map((element, index) => {
                return (
                  <div key={index} className={copyStyle("col", "l-2-4", "m-3", "s-6")}>
                    <MoviesItem type={3.3} movie={element.movie} isItemHot={false} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MoviesFavorite;
