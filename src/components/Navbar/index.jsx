import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "~/components/Header/Header.module.css";
import SubNavbar from "~/components/SubNavbar";
import HeaderSearch from "~/components/HeaderSearch";

const cx = classNames.bind(styles);

const Navbar = () => {
  return (
    <nav className={cx("nav")}>
      <ul className={cx("nav__content")}>
        <li className={cx("nav__item")}>
          thể loại
          <SubNavbar />
        </li>
        <li className={cx("nav__item")}>
          thể loại
          <SubNavbar />
        </li>
        <li className={cx("nav__item")}>
          thể loại
          <SubNavbar />
        </li>
        <li className={cx("nav__item")}>
          thể loại
          <SubNavbar />
        </li>
        <li className={cx("nav__item")}>
          <Link to="/dasd/dasd" className={cx("nav__link")}>
            thể loại
          </Link>
        </li>
        <li className={cx("nav__item")}>
          <Link to="/dasd/dasd" className={cx("nav__link")}>
            thể loại
          </Link>
        </li>
      </ul>
      <HeaderSearch />
    </nav>
  );
};

export default Navbar;
