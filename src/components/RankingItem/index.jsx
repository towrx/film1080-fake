import React from "react";
import classNames from "classnames/bind";

import styles from "~/pages/Home/Home.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const RankingItem = ({ rank, movie, pathImage }) => {
  return (
    <Link to={movie && "/watch/" + movie.slug}>
      <div className={cx("ranking-item")}>
        <div className={cx("ranking-item__number")}>{rank}</div>

        <div className={cx("ranking-item__thumb")}>
          <img
            className={cx("ranking-item__thumb--detail")}
            src={movie && pathImage && pathImage + movie.thumb_url}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default RankingItem;
