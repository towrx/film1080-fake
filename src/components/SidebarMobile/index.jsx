import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import { faXmark, faSearch, faBars, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "~/components/Header/Header.module.css";
import logo from "~/assets/images/logo.png";
import ResultSearchItem from "~/components/ResultSearchItem";
import NavbarMobile from "~/components/NavbarMobile";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "~/hooks";
import * as apiRequest from "~/apiRequest";
import { removeSearchData } from "~/redux/reducers/searchSlice";

const cx = classNames.bind(styles);

const SidebarMobile = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const inputToggleRef = useRef(null);
  const debounceValue = useDebounce(inputSearch, 500);
  useEffect(() => {
    if (debounceValue) {
      apiRequest.getSearch(dispatch, debounceValue);
    }
    return () => {
      dispatch(removeSearchData());
    };
  }, [debounceValue]);

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
      navigate("/tim-kiem/" + inputSearch);
    }
  };
  return (
    <>
      <label htmlFor="toggle-sidebar-mobile">
        <FontAwesomeIcon icon={faBars} className={cx("toggle-sidebar-mobile__icon") + " hide"} />
      </label>
      <input
        ref={inputToggleRef}
        type="checkbox"
        className={cx("toggle-sidebar-mobile") + " hide"}
        id="toggle-sidebar-mobile"
      />
      <div className={cx("sidebar-mobile")}>
        <img src={logo} alt="logo-web" className={cx("sidebar-mobile__logo")} />
        <label htmlFor="toggle-sidebar-mobile">
          <FontAwesomeIcon icon={faXmark} className={cx("sidebar-mobile__icon-close")} />
        </label>
        <div className={cx("clr")}></div>
        <div className={cx("sidebar-search")}>
          <input
            type="text"
            className={cx("sidebar-search-input")}
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
          <FontAwesomeIcon icon={faSearch} className={cx("search-sidebar-icon")} />

          <ul className={cx("search-sidebar-result")} onMouseDown={(e) => e.preventDefault()}>
            {/* NO RESULT */}
            {search.data && search.data.items.length === 0 && (
              <p className={cx("no-result-search")}>Không tìm thấy phim phù hợp</p>
            )}

            {/* loading */}
            {search.isFetch && (
              <p className={cx("loading-search")}>
                <FontAwesomeIcon icon={faSpinner} />
              </p>
            )}

            {search.data &&
              search.data.items.length > 0 &&
              search.data.items.map((movie, index) => {
                return (
                  <ResultSearchItem key={index} ref={inputToggleRef} movie={movie} pathImage={search.data.pathImage} />
                );
              })}
          </ul>
        </div>
        <NavbarMobile />
      </div>
    </>
  );
};

export default SidebarMobile;
