import React from "react";
import classNames from "classnames/bind";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MoviesTitle.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const MoviesTitle = ({ type, title, showTitleRight }) => {
  return (
    <>
      {type === 0 && (
        <div className={cx("title")}>
          <div className={cx("title__left")}>
            <div className={cx("title__icon--left")}></div>
            <h3 className={cx("title__content")}>{title}</h3>
          </div>
          {showTitleRight && (
            <div className={cx("title__right")}>
              <Link to="/the-loai/phim-chieu-rap?page=1" className={cx("title__link")}>
                Xem tất cả
              </Link>
              <FontAwesomeIcon icon={faFilm} className={cx("title__icon--right")} />
            </div>
          )}
        </div>
      )}
      {type === 1 && <h3 className={cx("special__title")}>{title}</h3>}
      {type === 2 && (
        <div className={cx("title")}>
          <div className={cx("title__left")}>
            <div className={cx("title__icon--left")}></div>
            <h3 className={cx("title__content")}>BẢNG XẾP HẠNG</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesTitle;
