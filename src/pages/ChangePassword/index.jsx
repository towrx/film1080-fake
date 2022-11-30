/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { useDispatch, useSelector } from "react-redux";

import styles from "./ChangePassword.module.css";

import * as apiRequest from "~/apiRequest";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

const ChangePassword = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [rePasswordNew, setRePasswordNew] = useState("");

  useEffect(() => {
    if (!auth.user) {
      console.log("vao");
      // navigate("/");
    }
  }, []);

  const handleBtnChangePass = (e) => {
    e.preventDefault();
    if (passwordNew !== rePasswordNew) toast.error("Mật khẩu nhập lại không chính xác!");
    else {
      const payload = { passwordOld, passwordNew };
      apiRequest.getChangePassword(dispatch, payload);
    }
  };
  return (
    <>
      <section className={cx("section-edit-info")}>
        <div className={cx("header")}>
          <img src="https://xemphim1080.com/assets/img/key.png" alt="" className={cx("header__img")} />
          <div className={cx("wrap-right")}>
            <h3 className={cx("title")}>ĐỔI MẬT KHẨU</h3>
            <p className={cx("introduce")}>Bạn vui lòng nhập đầy đủ thông tin bên dưới.</p>
          </div>
        </div>
        <form className={cx("form-edit")}>
          <div className={cx("form-group")}>
            <div className={cx("form-item-left")}>Mật khẩu hiện tại:</div>
            <div className={cx("form-item-right")}>
              <input
                type="password"
                className={cx("input_text")}
                value={passwordOld}
                onChange={(e) => {
                  setPasswordOld(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={cx("form-group")}>
            <div className={cx("form-item-left")}>Mật khẩu mới</div>
            <div className={cx("form-item-right")}>
              <input
                type="password"
                className={cx("input_text")}
                value={passwordNew}
                onChange={(e) => {
                  setPasswordNew(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={cx("form-group")}>
            <div className={cx("form-item-left")}>Nhập lại mật khẩu</div>
            <div className={cx("form-item-right")}>
              <input
                type="password"
                className={cx("input_text")}
                value={rePasswordNew}
                onChange={(e) => {
                  setRePasswordNew(e.target.value);
                }}
              />
            </div>
          </div>

          <button className={cx("form-edit-btn")} onClick={handleBtnChangePass}>
            Đổi mật khẩu
          </button>
        </form>
      </section>
    </>
  );
};

export default ChangePassword;
