/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { useDispatch, useSelector } from "react-redux";

import styles from "./InfoUser.module.css";

import * as apiRequest from "~/apiRequest";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const InfoUser = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [gender, setGender] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (!auth.user) {
      console.log("vao");
      navigate("/");
    }
  }, []);

  const handleBtnUpdate = (e) => {
    e.preventDefault();
    const payload = { nickname, gender };
    apiRequest.getUpdateInfoUser(dispatch, payload);
  };
  return (
    <>
      <section className={cx("section-edit-info")}>
        <div className={cx("header")}>
          <img src="https://xemphim1080.com/assets/img/key.png" alt="" className={cx("header__img")} />
          <div className={cx("wrap-right")}>
            <h3 className={cx("title")}>SỬA THÔNG TIN</h3>
            <p className={cx("introduce")}>Bạn vui lòng nhập đầy đủ thông tin bên dưới.</p>
          </div>
        </div>
        <form className={cx("form-edit")}>
          <div className={cx("form-group")}>
            <div className={cx("form-item-left")}>Tên hiển thị</div>
            <div className={cx("form-item-right")}>
              <input
                type="text"
                className={cx("nickname")}
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={cx("form-group")}>
            <div className={cx("form-item-left")}>Giới tính</div>
            <div className={cx("form-item-right")}>
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
          </div>
          <button className={cx("form-edit-btn")} onClick={handleBtnUpdate}>
            Sửa thông tin
          </button>
        </form>
      </section>
    </>
  );
};

export default InfoUser;
