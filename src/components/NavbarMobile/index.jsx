import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {
  faBookOpen,
  faEarthAsia,
  faFilm,
  faFileLines,
  faMedal,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "~/components/Header/Header.module.css";
import SubNavbarMobile from "~/components/SubNavbarMobile";

const cx = classNames.bind(styles);

const NavbarMobile = () => {
  return (
    <div className={cx("navmobile")}>
      <ul className={cx("navmobile__content")}>
        <li className={cx("navmobile__item")}>
          <FontAwesomeIcon className={cx("icon-item-sidebar")} icon={faBookOpen} />
          thể loại
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
        </li>
        <li className={cx("navmobile__item")}>
          <FontAwesomeIcon className={cx("icon-item-sidebar")} icon={faEarthAsia} />
          thể loại
          <SubNavbarMobile />
        </li>
        <li className={cx("navmobile__item")}>
          <FontAwesomeIcon className={cx("icon-item-sidebar")} icon={faFilm} />
          thể loại
          <SubNavbarMobile />
        </li>
        <li className={cx("navmobile__item")}>
          <FontAwesomeIcon className={cx("icon-item-sidebar")} icon={faFileLines} />
          thể loại
          <SubNavbarMobile />
        </li>
        <li className={cx("navmobile__item")}>
          <Link to="/dasd/dasd" className={cx("navmobile__link")}>
            <FontAwesomeIcon className={cx("icon-item-sidebar")} icon={faMedal} />
            thể loại
          </Link>
        </li>
        <li className={cx("navmobile__item")}>
          <Link to="/dasd/dasd" className={cx("navmobile__link")}>
            <FontAwesomeIcon className={cx("icon-item-sidebar")} icon={faChartSimple} />
            thể loại
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
