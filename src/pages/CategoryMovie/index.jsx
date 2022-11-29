import React, { useEffect, useRef } from "react";
import classNames from "classnames/bind";

import styles from "../Home/Home.module.css";
import styles2 from "./CategoryMovie.module.css";

import MoviesTitle from "~/components/MoviesTitle";
import MoviesItem from "~/components/MoviesItem";
import { Link, useParams, useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getMoviesCategory } from "~/apiRequest";
import Loading from "~/components/Loading";
import paginationGenerator from "~/assets/js/paginationGenerator ";

const copyStyle = classNames.bind(styles);
const cx = classNames.bind(styles2);

const WatchMovie = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const moviesCategory = useSelector((state) => state.moviesCategory);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const title = useRef({
    "phim-chieu-rap": "PHIM CHIẾU RẠP",
    "phim-sap-chieu": "PHIM SẮP CHIẾU",
    "phim-le": "PHIM LẺ",
    "phim-bo": "PHIM BỘ",
  });

  useEffect(() => {
    if (!isNaN(currentPage)) getMoviesCategory(dispatch, currentPage);
  }, [currentPage]);
  console.log("re-render: ", currentPage);
  return (
    <>
      {moviesCategory.isFetch ? (
        <Loading />
      ) : (
        <>
          <section className={copyStyle("movies-upcoming", "grid")} style={{ marginTop: 50 }}>
            <div className={copyStyle("movies-upcoming__content", "movies__content")}>
              <MoviesTitle type={0} title={title.current[category]} isTitleRight={false} />
              <div className={copyStyle("row")}>
                {moviesCategory.data &&
                  moviesCategory.data.items.slice(0, 20).map((movie, index) => {
                    return (
                      <div key={index} className={copyStyle("col", "l-2-4", "m-3", "s-6")}>
                        <MoviesItem
                          type={3.2}
                          movie={movie}
                          isItemHot={false}
                          pathImage={moviesCategory.data.pathImage}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>

          <ul className={cx("pagination")}>
            {/* {[1, 2, 3]} */}
            {parseInt(currentPage) === 1 ? (
              <div className={cx("pagination__item", "disable")}>
                <span>‹</span>
              </div>
            ) : (
              <div className={cx("pagination__item")}>
                <span
                  onClick={() => {
                    setSearchParams({ page: parseInt(currentPage) - 1 });
                  }}
                >
                  ‹
                </span>
              </div>
            )}
            {moviesCategory.data &&
              paginationGenerator(parseInt(currentPage), parseInt(moviesCategory.data.pagination.totalPages), 3).map(
                (element, index) => {
                  let pagination = (
                    <div key={index} className={cx("pagination__item")}>
                      <Link to={"/the-loai/" + category + "?page=" + element}>{element}</Link>
                    </div>
                  );

                  if (element === parseInt(currentPage) || element === "...")
                    pagination = (
                      <div key={index} className={cx("pagination__item", "disable")}>
                        <span>{element}</span>
                      </div>
                    );
                  return pagination;
                },
              )}

            {moviesCategory.data && parseInt(currentPage) === moviesCategory.data.pagination.totalPages ? (
              <div className={cx("pagination__item", "disable")}>
                <span>›</span>
              </div>
            ) : (
              <div className={cx("pagination__item")}>
                <span
                  onClick={() => {
                    setSearchParams({ page: parseInt(currentPage) + 1 });
                  }}
                >
                  ›
                </span>
              </div>
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default WatchMovie;
