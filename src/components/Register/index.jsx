import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "~/components/Header/Header.module.css";

const cx = classNames.bind(styles);

const Register = () => {
  return (
    <form action="" className={cx("form-register")}>
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
          <input className={cx("input-data")} type="password" id="password" autoComplete="on" />
          <FontAwesomeIcon className={cx("input-icon")} icon={faLock} />
        </div>
      </div>
      <div className={cx("group")}>
        <label className={cx("input-label")} htmlFor="password-repeat">
          Nhập lại mật khẩu
        </label>
        <div className={cx("input")}>
          <input className={cx("input-data")} type="password" id="password-repeat" autoComplete="on" />
          <FontAwesomeIcon className={cx("input-icon")} icon={faLock} />
        </div>
      </div>
      <div className={cx("group")}>
        <label className={cx("input-label")} htmlFor="input-data">
          Tên hiển thị
        </label>
        <div className={cx("input")}>
          <input className={cx("input-data")} type="text" id="email" />
          <FontAwesomeIcon className={cx("input-icon")} icon={faMessage} />
        </div>
      </div>
      <div className={cx("group")}>
        <label className={cx("input-label")} htmlFor="input-data">
          Email
        </label>
        <div className={cx("input")}>
          <input className={cx("input-data")} type="text" id="user-name" />
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
      <button className={cx("btn-register", "btn")}>Đăng ký</button>
    </form>
  );
};

export default Register;
