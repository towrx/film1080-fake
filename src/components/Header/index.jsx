import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";
import logo from "~/assets/images/logo.png";
import Navbar from "~/components/Navbar";
import SidebarMobile from "~/components/SidebarMobile";
import SidebarUser from "~/components/SidebarUser";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("header__content")}>
        <div className={cx("header__left")}>
          <Link to="/">
            <img src={logo} alt="logo-website" className={cx("header__logo")} />
          </Link>
        </div>
        <div className={cx("header__center")}>
          <Navbar />
          <SidebarMobile />
        </div>
        <div className={cx("header__right")}>
          <a href="https://www.facebook.com/phim1080tv" className={cx("link-page")}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <label htmlFor="toggle-sidebar-user" className={cx("user")}>
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input type="checkbox" className={cx("toggle-sidebar-user") + " hide"} id="toggle-sidebar-user" />
          <SidebarUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
