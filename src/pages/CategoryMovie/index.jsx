import React, { useRef } from "react";
import classNames from "classnames/bind";

import styles from "../Home/Home.module.css";
import styles2 from "./CategoryMovie.module.css";

import MoviesTitle from "~/components/MoviesTitle";
import MoviesItem from "~/components/MoviesItem";
import { Link, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);
const cx2 = classNames.bind(styles2);

const WatchMovie = () => {
  const location = useLocation();
  const title = useRef({
    "/phim-sap-chieu": "PHIM SẮP CHIẾU",
  });
  return (
    <>
      <section className={cx("movies-upcoming", "grid")} style={{ marginTop: "20px" }}>
        <div className={cx("movies-upcoming__content", "movies__content")}>
          <MoviesTitle type={0} title={title.current[location.pathname]} isTitleRight={false} />
          <div className={cx("row")}>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
            <div className={cx("col", "l-2-4", "m-3", "s-6")}>
              <MoviesItem type={3.2} />
            </div>
          </div>
        </div>
      </section>

      <ul className={cx2("pagination")}>
        <div className={cx2("pagination__item")}>
          <Link to="/">‹</Link>
        </div>

        <div className={cx2("pagination__item")}>
          <Link to="/">1</Link>
        </div>

        <div className={cx2("pagination__item")}>
          <Link to="/">2</Link>
        </div>

        <div className={cx2("pagination__item")}>
          <Link to="/">3</Link>
        </div>

        <div className={cx2("pagination__item")}>
          <Link to="/">4</Link>
        </div>

        <div className={cx2("pagination__item", "active")}>
          <Link to="/">5</Link>
        </div>

        <div className={cx2("pagination__item")}>
          <Link to="/">6</Link>
        </div>

        <div className={cx2("pagination__item")}>
          <Link to="/">7</Link>
        </div>

        <div className={cx2("pagination__item")}>
          <Link to="/">8</Link>
        </div>

        <div className={cx2("pagination__item")}>
          <Link to="/">9</Link>
        </div>

        <div className={cx2("pagination__item", "disable")}>
          <span>...</span>
        </div>

        <div className={cx2("pagination__item")}>
          <Link to="/">11</Link>
        </div>

        <div className={cx2("pagination__item")}>
          <Link to="/">12</Link>
        </div>

        <div className={cx2("pagination__item")}>
          <Link to="/">13</Link>
        </div>

        <div className={cx2("pagination__item")}>
          <Link to="/">›</Link>
        </div>
      </ul>
    </>
  );
};

export default WatchMovie;
