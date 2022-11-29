import React from "react";
import classNames from "classnames/bind";

import MoviesItem from "~/components/MoviesItem";
import MoviesTitle from "~/components/MoviesTitle";
import styles from "~/pages/Home/Home.module.css";

const cx = classNames.bind(styles);

const MoviesRecommend = ({ moviesRecommend, showTitleRight }) => {
  return (
    <section className={cx("movies-recommend", "grid")}>
      <div className={cx("movies-recommend__content", "movies__content")}>
        <MoviesTitle showTitleRight type={0} title="HÔM NAY XEM GÌ" />
        <div className={cx("row")}>
          {moviesRecommend.data &&
            moviesRecommend.data.items.slice(0, 5).map((movie, index) => {
              if (index === 4)
                return (
                  <div key={index} className={cx("col", "l-2-4", "m-0", "s-0")}>
                    <MoviesItem type={3.2} isItemHot={false} movie={movie} pathImage={moviesRecommend.data.pathImage} />
                  </div>
                );
              return (
                <div key={index} className={cx("col", "l-2-4", "m-3", "s-6")}>
                  <MoviesItem type={3.2} isItemHot={false} movie={movie} pathImage={moviesRecommend.data.pathImage} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default MoviesRecommend;
