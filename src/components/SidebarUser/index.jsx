import React from "react";
import classNames from "classnames/bind";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "~/components/Header/Header.module.css";
import Login from "~/components/Login";
import Register from "~/components/Register";

const cx = classNames.bind(styles);

const SidebarUser = () => {
  return (
    <div className={cx("sidebar-user")}>
      <label htmlFor="toggle-sidebar-user">
        <FontAwesomeIcon icon={faXmark} className={cx("sidebar-user__icon-close")} />
      </label>
      <div className={cx("sidebar-user__heading")}>Chào khách!</div>
      <div className={cx("sidebar-user__avatar")}></div>
      <h3 className={cx("sidebar-user__title")}>Đăng nhập</h3>
      <h3 className={cx("sidebar-user__title", "active")}>Đăng ký</h3>
      {<Login /> && <Register />}
    </div>
  );
};

export default SidebarUser;
