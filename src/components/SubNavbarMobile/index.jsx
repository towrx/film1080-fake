import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "~/components/Header/Header.module.css";

const cx = classNames.bind(styles);

const SubNavbarMobile = () => {
  return (
    <ul className={cx("sub-navmobile")}>
      <li className={cx("sub-navmobile__item")}>
        <Link className={cx("sub-navmobile__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("sub-navmobile__item")}>
        <Link className={cx("sub-navmobile__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("sub-navmobile__item")}>
        <Link className={cx("sub-navmobile__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("sub-navmobile__item")}>
        <Link className={cx("sub-navmobile__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("sub-navmobile__item")}>
        <Link className={cx("sub-navmobile__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("sub-navmobile__item")}>
        <Link className={cx("sub-navmobile__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("sub-navmobile__item")}>
        <Link className={cx("sub-navmobile__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
      <li className={cx("sub-navmobile__item")}>
        <Link className={cx("sub-navmobile__link")} to="/the-loai/hanh-dong">
          Hành Động
        </Link>
      </li>
    </ul>
  );
};

export default SubNavbarMobile;
