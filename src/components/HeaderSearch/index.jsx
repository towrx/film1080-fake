import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "~/components/Header/Header.module.css";
import ResultSearchItem from "~/components/ResultSearchItem";

const cx = classNames.bind(styles);

const HeaderSearch = () => {
  return (
    <div className={cx("header-search")}>
      <input type="text" className={cx("header-search__input")} placeholder="Tìm kiếm" />
      <FontAwesomeIcon icon={faMagnifyingGlass} className={cx("header-search__icon")} />
      <ul className={cx("result-search")} onMouseDown={(e) => e.preventDefault()}>
        {/* NO RESULT */}
        {/* <p className={cx("no-result-search")}>Không tìm thấy phim phù hợp</p> */}
        {/* loading */}
        {/* <p className={cx("loading-search")}>
        <FontAwesomeIcon icon={faSpinner} />
      </p> */}
        <ResultSearchItem />
        <ResultSearchItem />
        <ResultSearchItem />
        <ResultSearchItem />
        <ResultSearchItem />
        <ResultSearchItem />
      </ul>
    </div>
  );
};

export default HeaderSearch;
