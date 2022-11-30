import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

import styles from "~/components/Header/Header.module.css";
import * as apiRequest from "~/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.login.isLoginError) {
      toast.error(auth.login.message);
    }
  }, [auth]);

  const handleLoginNormal = (e) => {
    e.preventDefault();
    const payload = {
      username,
      password,
      remember,
    };
    console.log(payload);
    apiRequest.getLogin(dispatch, payload);
  };
  return (
    <>
      <form action="" className={cx("form-login")}>
        <div className={cx("group")}>
          <label className={cx("input-label")} htmlFor="username">
            Tên đăng nhập
          </label>
          <div className={cx("input")}>
            <input
              autoComplete="on"
              className={cx("input-data")}
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <FontAwesomeIcon className={cx("input-icon")} icon={faUser} />
          </div>
        </div>
        <div className={cx("group")}>
          <label className={cx("input-label")} htmlFor="password">
            Mật khẩu
          </label>
          <div className={cx("input")}>
            <input
              autoComplete="on"
              className={cx("input-data")}
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FontAwesomeIcon className={cx("input-icon")} icon={faLock} />
          </div>
        </div>
        <div className={cx("group")}>
          <div className={cx("memorize")}>
            <input
              autoComplete="on"
              type="checkbox"
              id="checkbox-memorize-login"
              className={cx("checkbox-memorize-login")}
              value={remember}
              onChange={(e) => {
                setRemember(e.target.checked);
              }}
            />
            <label className={cx("label-checkbox")} htmlFor="checkbox-memorize-login">
              Ghi nhớ
            </label>
          </div>
          <div className={cx("forgot-password")}>
            <Link className={cx("forgot-password-link")}>Quên mật khẩu</Link>
          </div>
          <div className="clr"></div>
        </div>
        {!auth.login.isLoginPending ? (
          <button className={cx("btn-login", "btn")} onClick={handleLoginNormal}>
            Đăng nhập
          </button>
        ) : (
          <button className={cx("btn-login", "btn", "disable")}>Đăng nhập</button>
        )}

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
    </>
  );
};

export default Login;
