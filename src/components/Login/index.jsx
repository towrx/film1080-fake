import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

import styles from "~/components/Header/Header.module.css";

const cx = classNames.bind(styles);

const Login = () => {
  return (
    <form action="" className={cx("form-login")}>
      <div className={cx("group")}>
        <label className={cx("input-label")} htmlFor="username">
          Tên đăng nhập
        </label>
        <div className={cx("input")}>
          <input className={cx("input-data")} type="text" id="username" />
          <FontAwesomeIcon className={cx("input-icon")} icon={faUser} />
        </div>
      </div>
      <div className={cx("group")}>
        <label className={cx("input-label")} htmlFor="password">
          Mật khẩu
        </label>
        <div className={cx("input")}>
          <input className={cx("input-data")} type="password" id="password" />
          <FontAwesomeIcon className={cx("input-icon")} icon={faLock} />
        </div>
      </div>
      <div className={cx("group")}>
        <div className={cx("memorize")}>
          <input type="checkbox" id="checkbox-memorize-login" className={cx("checkbox-memorize-login")} />
          <label className={cx("label-checkbox")} htmlFor="checkbox-memorize-login">
            Ghi nhớ
          </label>
        </div>
        <div className={cx("forgot-password")}>
          <Link className={cx("forgot-password-link")}>Quên mật khẩu</Link>
        </div>
        <div className="clr"></div>
      </div>
      <button className={cx("btn-login", "btn")}>Đăng nhập</button>
      <div className="line-280"></div>
      <div className={cx("group-button")}>
        <FontAwesomeIcon className={cx("button-icon")} icon={faFacebookF} />
        <button className={cx("btn-login-facebook", "btn")}>Đăng nhập với facebook</button>
      </div>
      <div className={cx("group-button")}>
        <FontAwesomeIcon className={cx("button-icon")} icon={faGoogle} />
        <button className={cx("btn-login-google", "btn")}>Đăng nhập với Google</button>
      </div>
    </form>
  );
};

export default Login;
