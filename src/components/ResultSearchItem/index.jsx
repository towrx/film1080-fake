import React, { forwardRef } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "~/components/Header/Header.module.css";

const cx = classNames.bind(styles);

const ResultSearchItem = ({ movie, pathImage }, ref) => {
  return (
    <Link
      to={"/watch/" + (movie && movie.slug)}
      onClick={() => {
        if (ref.current.checked !== undefined) ref.current.checked = false;
        else ref.current.blur();
      }}
    >
      <li className={cx("result-search__item")}>
        <div className={cx("result-search__thumb")}>
          <img src={movie && pathImage + movie.thumb_url} alt="thumb_image_film" />
        </div>
        <div className={cx("result-search__info")}>
          <span className={cx("result-search___title")}>{movie && movie.name}</span>
          <span className={cx("result-search__time")}>
            {/* 2021 (20 / 20 tập) */}
            {movie &&
              movie.year +
                " (" +
                Math.floor(Math.random() * 14 + 1) +
                " / " +
                Math.floor(Math.random() * 16 + 14) +
                " tập)"}
          </span>
          <span className={cx("result-search__view")}>{(Math.random() * 20 + 1).toFixed(1) + " "}k lượt xem</span>
        </div>
      </li>
    </Link>
  );
};

export default forwardRef(ResultSearchItem);
