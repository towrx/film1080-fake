import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";

import styles from "~/components/Header/Header.module.css";
import ResultSearchItem from "~/components/ResultSearchItem";
import { useDebounce } from "~/hooks";
import * as apiRequest from "~/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { removeSearchData } from "~/redux/reducers/searchSlice";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

const HeaderSearch = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
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
    <div className={cx("header-search")}>
      <input
        type="text"
        className={cx("header-search__input")}
        placeholder="Tìm kiếm"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        onKeyDown={handleSearch}
        ref={inputRef}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className={cx("header-search__icon")} />
      <ul className={cx("result-search")} onMouseDown={(e) => e.preventDefault()}>
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
            return <ResultSearchItem key={index} ref={inputRef} movie={movie} pathImage={search.data.pathImage} />;
          })}
        {/* <ResultSearchItem />
        
        <ResultSearchItem />
        <ResultSearchItem />
        <ResultSearchItem />
        <ResultSearchItem /> */}
      </ul>
    </div>
  );
};

export default HeaderSearch;
