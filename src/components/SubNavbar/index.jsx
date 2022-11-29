import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "~/components/Header/Header.module.css";

const cx = classNames.bind(styles);

const SubNavbar = () => {
  return (
    <ul className={cx("subnav")}>
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
    </ul>
  );
};

export default SubNavbar;
