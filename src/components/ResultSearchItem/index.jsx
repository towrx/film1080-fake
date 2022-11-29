import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "~/components/Header/Header.module.css";

const cx = classNames.bind(styles);

const ResultSearchItem = () => {
  return (
    <Link to="/hehe">
      <li className={cx("result-search__item")}>
        <div className={cx("result-search__thumb")}>
          <img src="http://img.ophim1.cc/uploads/movies/ngoi-truong-xac-song-thumb.jpg" alt="thumb_image_film" />
        </div>
        <div className={cx("result-search__info")}>
          <span className={cx("result-search___title")}>Ngôi Trường Xác Sống</span>
          <span className={cx("result-search__time")}>2021 (20 / 20 tập)</span>
          <span className={cx("result-search__view")}>51.1k lượt xem</span>
        </div>
      </li>
    </Link>
  );
};

export default ResultSearchItem;
