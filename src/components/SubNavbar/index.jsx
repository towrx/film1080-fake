import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "~/components/Header/Header.module.css";

const cx = classNames.bind(styles);

const SubNavbar = ({ subNav }) => {
  return (
    <ul className={cx("subnav")}>
      {subNav.map((element, index) => {
        return (
          <li key={index} className={cx("subnav__item")}>
            <Link className={cx("subnav__link")} to="/the-loai/phim-chieu-rap?page=1">
              {element}
            </Link>
          </li>
        );
      })}
      {/* <li className={cx("subnav__item")}>
        <Link className={cx("subnav__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("subnav__item")}>
        <Link className={cx("subnav__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("subnav__item")}>
        <Link className={cx("subnav__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("subnav__item")}>
        <Link className={cx("subnav__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("subnav__item")}>
        <Link className={cx("subnav__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("subnav__item")}>
        <Link className={cx("subnav__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("subnav__item")}>
        <Link className={cx("subnav__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li> */}
    </ul>
  );
};

export default SubNavbar;
