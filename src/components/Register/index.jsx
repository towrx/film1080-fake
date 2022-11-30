import React, { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "~/components/Header/Header.module.css";
import { useDispatch } from "react-redux";
import * as apiRequest from "~/apiRequest";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();

  // const [dateOfBirth, setDateOfBirth] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== rePassword) toast.error("Mật khẩu nhập lai không đúng");
    else {
      const payload = { username, password, nickname, email, gender };
      apiRequest.getRegister(dispatch, payload);
    }
  };
  return (
    <form action="" className={cx("form-register")}>
      <div className={cx("group")}>
        <label className={cx("input-label")} htmlFor="username">
          Tên đăng nhập
        </label>
        <div className={cx("input")}>
          <input
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
            className={cx("input-data")}
            type="password"
            id="password"
            autoComplete="on"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FontAwesomeIcon className={cx("input-icon")} icon={faLock} />
        </div>
      </div>
      <div className={cx("group")}>
        <label className={cx("input-label")} htmlFor="password-repeat">
          Nhập lại mật khẩu
        </label>
        <div className={cx("input")}>
          <input
            className={cx("input-data")}
            type="password"
            id="password-repeat"
            autoComplete="on"
            value={rePassword}
            onChange={(e) => {
              setRePassword(e.target.value);
            }}
          />
          <FontAwesomeIcon className={cx("input-icon")} icon={faLock} />
        </div>
      </div>
      <div className={cx("group")}>
        <label className={cx("input-label")} htmlFor="input-data">
          Tên hiển thị
        </label>
        <div className={cx("input")}>
          <input
            className={cx("input-data")}
            type="text"
            id="email"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <FontAwesomeIcon className={cx("input-icon")} icon={faMessage} />
        </div>
      </div>
      <div className={cx("group")}>
        <label className={cx("input-label")} htmlFor="input-data">
          Email
        </label>
        <div className={cx("input")}>
          <input
            className={cx("input-data")}
            type="text"
            id="user-name"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FontAwesomeIcon className={cx("input-icon")} icon={faEnvelope} />
        </div>
      </div>
      <div className={cx("group")}>
        <label className={cx("input-label")}>Giới tính</label>
        <div className={cx("option-gender")}>
          <span className={cx("made")}>
            <input
              type="radio"
              id="radio-gender-made"
              className={cx("radio-gender") + " hide"}
              name="gender"
              value="made"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label className={cx("label-checkbox")} htmlFor="radio-gender-made">
              Nam
            </label>
          </span>
          <span className={cx("famade")}>
            <input
              type="radio"
              id="radio-gender-famade"
              className={cx("radio-gender") + " hide"}
              name="gender"
              value="famade"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label className={cx("label-checkbox")} htmlFor="radio-gender-famade">
              Nữ
            </label>
          </span>
        </div>
      </div>

      <div className={cx("group", "date-of-birth")}>
        <div className={cx("day")}>
          <label htmlFor="day">Ngày sinh</label>
          <input type="number" min="1" max="31" className={cx("input-number")} id="day" />
        </div>
        <div className={cx("month")}>
          <label htmlFor="month">Tháng sinh</label>
          <input type="number" min="1" max="31" className={cx("input-number")} id="month" />
        </div>
        <div className={cx("year")}>
          <label htmlFor="year">Năm sinh</label>
          <input type="number" min="1" max="31" className={cx("input-number")} id="year" />
        </div>
      </div>
      <button className={cx("btn-register", "btn")} onClick={handleRegister}>
        Đăng ký
      </button>
    </form>
  );
};

export default Register;
