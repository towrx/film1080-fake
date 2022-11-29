import React, { useRef } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "~/components/Header/Header.module.css";
import SubNavbar from "~/components/SubNavbar";
import HeaderSearch from "~/components/HeaderSearch";

const cx = classNames.bind(styles);

const Navbar = () => {
  const fakeDataMenu = useRef([
    {
      "Thể Loại": [
        "Hành Động",
        "Phiêu Lưu",
        "Kinh Dị",
        "Tình Cảm",
        "Hoạt Hình",
        "Võ Thuật",
        "Hài Hước",
        "Tâm Lý",
        "Viễn Tưởng",
        "Thần Thoại",
        "Chiến Tranh",
        "Cổ Trang",
        "Âm Nhạc",
        "Hình Sự",
        "TV Show",
        "Khoa Học",
        "Tài Liệu",
        "Lịch Sử",
        "Gia Đình",
        "Thể Thao",
        "Kiếm Hiệp",
        "Kịch Tính",
        "Bí Ẩn",
        "Tiểu Sử",
        "Thanh Xuân",
        "Học Đường",
        "Huyền Huyễn",
        "Tiên Hiệp",
        "Đam Mỹ",
        "Trinh Thám",
        "Gay Cấn",
        "Động Vật",
      ],
    },
    {
      "Quốc Gia": [
        "Trung Quốc",
        "Hàn Quốc",
        "Đài Loan",
        "Mỹ",
        "Châu Âu",
        "Nhật Bản",
        "Hồng Kông",
        "Thái Lan",
        "Châu Á",
        "Ấn Độ",
        "Pháp",
        "Anh",
        "Canada",
        "Đức",
        "Tây Ban Nha",
        "Nga",
        "Úc",
        "Khác",
      ],
    },
    {
      "Phim Lẻ": [
        "Mới Nhất",
        "Năm 2021",
        "Năm 2020",
        "Năm 2019",
        "Năm 2018",
        "Năm 2017",
        "Năm 2016",
        "Năm 2015",
        "Năm 2014",
        "Năm 2013",
        "Năm 2012",
        "Năm 2011",
      ],
    },
    {
      "Phim Bộ": ["Cập Nhật", "Trung Quốc", "Hàn Quốc", "Đài Loan", "Mỹ", "Nhật Bản", "Hồng Kông", "Thái Lan", "Ấn Độ"],
    },
  ]);
  return (
    <nav className={cx("nav")}>
      <ul className={cx("nav__content")}>
        {fakeDataMenu.current.map((element, index) => {
          const item = Object.keys(element)[0];
          return (
            <li key={index} className={cx("nav__item")}>
              {item}
              <SubNavbar subNav={element[item]} />
            </li>
          );
        })}

        {/* <li className={cx("nav__item")}>
          thể loại
          <SubNavbar />
        </li>
        <li className={cx("nav__item")}>
          thể loại
          <SubNavbar />
        </li>
        <li className={cx("nav__item")}>
          thể loại
          <SubNavbar />
        </li> */}
        <li className={cx("nav__item")}>
          <Link to="/the-loai/phim-chieu-rap?page=1" className={cx("nav__link")}>
            Chiếu Rạp
          </Link>
        </li>
        <li className={cx("nav__item")}>
          <Link to="/the-loai/phim-sap-chieu?page=1" className={cx("nav__link")}>
            Sắp Chiếu
          </Link>
        </li>
      </ul>
      <HeaderSearch />
    </nav>
  );
};

export default Navbar;
