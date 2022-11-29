import React from "react";
import classNames from "classnames/bind";
import { faXmark, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "~/components/Header/Header.module.css";
import logo from "~/assets/images/logo.png";
import ResultSearchItem from "~/components/ResultSearchItem";
import NavbarMobile from "~/components/NavbarMobile";

const cx = classNames.bind(styles);

const SidebarMobile = () => {
  return (
    <>
      <label htmlFor="toggle-sidebar-mobile">
        <FontAwesomeIcon icon={faBars} className={cx("toggle-sidebar-mobile__icon") + " hide"} />
      </label>
      <input type="checkbox" className={cx("toggle-sidebar-mobile") + " hide"} id="toggle-sidebar-mobile" />
      <div className={cx("sidebar-mobile")}>
        <img src={logo} alt="logo-web" className={cx("sidebar-mobile__logo")} />
        <label htmlFor="toggle-sidebar-mobile">
          <FontAwesomeIcon icon={faXmark} className={cx("sidebar-mobile__icon-close")} />
        </label>
        <div className={cx("clr")}></div>
        <div className={cx("sidebar-search")}>
          <input type="text" className={cx("sidebar-search-input")} />
          <FontAwesomeIcon icon={faSearch} className={cx("search-sidebar-icon")} />

          <ul className={cx("search-sidebar-result")} onMouseDown={(e) => e.preventDefault()}>
            {/* NO RESULT */}
            {/* <p className={cx("no-result")}>Không tìm thấy phim phù hợp</p> */}
            {/* loading */}
            {/* <p className={cx("search__loading")}>
                  <FontAwesomeIcon icon={faSpinner} />
                </p> */}
            <ResultSearchItem />
            <ResultSearchItem />
            <ResultSearchItem />
            <ResultSearchItem />
            <ResultSearchItem />
            <ResultSearchItem />
            <ResultSearchItem />
          </ul>
        </div>
        <NavbarMobile />
      </div>
    </>
  );
};

export default SidebarMobile;
