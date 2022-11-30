import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import { faFilm, faLock, faPenToSquare, faPowerOff, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "~/components/Header/Header.module.css";
import Login from "~/components/Login";
import Register from "~/components/Register";
import { Link, useLocation } from "react-router-dom";
import { faBell, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logoutUser } from "~/redux/reducers/authSlice";

const cx = classNames.bind(styles);

const SidebarUser = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showAbout, setShowAbout] = useState(true);
  const [showNotification, setshowNotification] = useState(false);
  const labelCLoseSidebarRef = useRef();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  // useEffect(() => {
  //   labelCLoseSidebarRef.current.click();
  //   console.log("vao");
  // }, [location.pathname]);

  // useEffect(() => {
  //   if (auth.user) {
  //     labelCLoseSidebarRef.current.click();
  //   }
  // }, [auth.user]);

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Đăng xuất thành công!");
  };
  return (
    <div className={cx("sidebar-user")}>
      <label ref={labelCLoseSidebarRef} htmlFor="toggle-sidebar-user">
        <FontAwesomeIcon icon={faXmark} className={cx("sidebar-user__icon-close")} />
      </label>
      <div className={cx("sidebar-user__heading")}>Chào {auth.user ? auth.user.nickname : " khách"} !</div>
      <div className={cx("sidebar-user__avatar")}>{auth.user && <img src={auth.user.pathAvatar} alt="" />}</div>

      {!auth.user && (
        <>
          <h3
            className={cx("sidebar-user__title", { active: showLogin })}
            onClick={() => {
              setShowLogin(true);
              setShowRegister(false);
            }}
          >
            Đăng nhập
          </h3>
          <h3
            className={cx("sidebar-user__title", { active: showRegister })}
            onClick={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
          >
            Đăng ký
          </h3>
          {showLogin && <Login />} {showRegister && <Register />}
        </>
      )}

      {auth.user && (
        <>
          <h3
            className={cx("sidebar-user__title", { active: showAbout })}
            onClick={() => {
              setShowAbout(true);
              setshowNotification(false);
            }}
          >
            Thông tin
          </h3>
          <h3
            className={cx("sidebar-user__title", { active: showNotification })}
            onClick={() => {
              setShowAbout(false);
              setshowNotification(true);
            }}
          >
            Thông báo
          </h3>
          {showAbout && (
            <div className={cx("about-user")}>
              <ul className={cx("about-user__content")}>
                <Link
                  to="/sua-thong-tin"
                  onClick={() => {
                    labelCLoseSidebarRef.current.click();
                  }}
                >
                  <div className={cx("about-user__item")}>
                    <FontAwesomeIcon icon={faPenToSquare} className={cx("about-user__icon")} />
                    Sửa thông tin
                  </div>
                </Link>
                <Link
                  to="/doi-mat-khau"
                  onClick={() => {
                    labelCLoseSidebarRef.current.click();
                  }}
                >
                  <div className={cx("about-user__item")}>
                    <FontAwesomeIcon icon={faLock} className={cx("about-user__icon")} />
                    Đổi mật khẩu
                  </div>
                </Link>
                <div className={cx("sidebar-user__line")}></div>
                <Link
                  to="/phim-da-xem"
                  onClick={() => {
                    labelCLoseSidebarRef.current.click();
                  }}
                >
                  <div className={cx("about-user__item")}>
                    <FontAwesomeIcon icon={faFilm} className={cx("about-user__icon")} />
                    Phim đã xem
                  </div>
                </Link>
                <Link
                  to="/phim-da-thich"
                  onClick={() => {
                    labelCLoseSidebarRef.current.click();
                  }}
                >
                  <div className={cx("about-user__item")}>
                    <FontAwesomeIcon icon={faHeart} className={cx("about-user__icon")} />
                    Phim đã thích
                  </div>
                </Link>
                <Link
                  to="/phim-theo-doi"
                  onClick={() => {
                    labelCLoseSidebarRef.current.click();
                  }}
                >
                  <div className={cx("about-user__item")}>
                    <FontAwesomeIcon icon={faBell} className={cx("about-user__icon")} />
                    Phim đang theo dõi
                  </div>
                </Link>
              </ul>
              <div className={cx("sidebar-user__line")}></div>

              <button className={cx("logout")} onClick={handleLogout}>
                <FontAwesomeIcon icon={faPowerOff} className={cx("about-user__icon-logout")} />
                Đăng xuất
              </button>
            </div>
          )}

          {showNotification && (
            <div className={cx("notification-user")}>
              <ul className={cx("notification-user__content")}>
                <Link to="/">
                  <li className={cx("notification-user__item")}>
                    <img
                      src="https://s198.imacdn.com/ff/2022/11/20/25853001042d33bc_9e99a62fc5d36f5a_29975166892891453816.jpg"
                      alt=""
                      className={cx("notification-user__thumb")}
                    />
                    <div className={cx("notification-user__info")}>
                      <p className={cx("notification-user__title")}>
                        <strong>Cậu Út Nhà Tài Phiệt</strong> đã cập nhật<strong> Tập 6</strong>
                      </p>
                      <span className={cx("notification-user__time")}>2 ngày trước</span>
                    </div>
                  </li>
                </Link>
                <div className={cx("sidebar-user__line")}></div>
                <Link to="/">
                  <li className={cx("notification-user__item")}>
                    <img
                      src="https://s198.imacdn.com/ff/2022/11/20/25853001042d33bc_9e99a62fc5d36f5a_29975166892891453816.jpg"
                      alt=""
                      className={cx("notification-user__thumb")}
                    />
                    <div className={cx("notification-user__info")}>
                      <p className={cx("notification-user__title")}>
                        <strong>Cậu Út Nhà Tài Phiệt</strong> đã cập nhật<strong> Tập 6</strong>
                      </p>
                      <span className={cx("notification-user__time")}>2 ngày trước</span>
                    </div>
                  </li>
                </Link>
                <div className={cx("sidebar-user__line")}></div>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SidebarUser;
