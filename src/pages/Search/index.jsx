import React, { useEffect } from "react";
import classNames from "classnames/bind";

import styles from "../Home/Home.module.css";

import MoviesTitle from "~/components/MoviesTitle";
import MoviesItem from "~/components/MoviesItem";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "~/apiRequest";
import Loading from "~/components/Loading";

const copyStyle = classNames.bind(styles);

const Search = () => {
  const dispatch = useDispatch();
  const { searchParam } = useParams();
  const search = useSelector((state) => state.search);

  useEffect(() => {
    if (search.data) getSearch(dispatch, searchParam);
    console.log("vao");
  }, []);
  // console.log(searchParam);
  return (
    <>
      {search.isFetch ? (
        <Loading />
      ) : (
        <>
          {search.data && search.data.items.length && (
            <section className={copyStyle("movies-upcoming", "grid")} style={{ marginTop: 50 }}>
              <div className={copyStyle("movies-upcoming__content", "movies__content")}>
                <MoviesTitle type={0} title={"KẾT QUẢ TÌM KIẾM: " + searchParam} isTitleRight={false} />
                <div className={copyStyle("row")}>
                  {search.data &&
                    search.data.items.map((movie, index) => {
                      return (
                        <div key={index} className={copyStyle("col", "l-2-4", "m-3", "s-6")}>
                          <MoviesItem type={3.2} movie={movie} isItemHot={false} pathImage={search.data.pathImage} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </section>
          )}

          {search.data && search.data.items.length === 0 && <h3>Không tìm thấy kết quả nào phù hợp</h3>}
        </>
      )}
    </>
  );
};

export default Search;
