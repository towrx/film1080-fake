/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";

import styles from "./Home.module.css";

import MoviesTitle from "~/components/MoviesTitle";
import MoviesItem from "~/components/MoviesItem";
import RankingItem from "~/components/RankingItem";
import MoviesCollection from "~/components/MoviesCollection";
import { useDispatch, useSelector } from "react-redux";
import * as apiRequest from "~/apiRequest";
import MoviesRecommend from "~/components/MoviesRecommend";
import Loading from "~/components/Loading";

const cx = classNames.bind(styles);

const Home = () => {
  const dispatch = useDispatch();
  const moviesNominated = useSelector((state) => state.moviesNominated);
  const moviesNew = useSelector((state) => state.moviesNew);
  const moviesAnime = useSelector((state) => state.moviesAnime);
  const moviesCinema = useSelector((state) => state.moviesCinema);
  const moviesSeri = useSelector((state) => state.moviesSeri);
  const moviesOdd = useSelector((state) => state.moviesOdd);
  const moviesChart = useSelector((state) => state.moviesChart);
  const moviesUpComing = useSelector((state) => state.moviesUpComing);
  const moviesRecommend = useSelector((state) => state.moviesRecommend);

  useEffect(() => {
    apiRequest.getMoviesNominated(dispatch);
    apiRequest.getMoviesNew(dispatch);
    apiRequest.getMoviesAnime(dispatch);
    apiRequest.getMoviesCinema(dispatch);
    apiRequest.getMoviesSeri(dispatch);
    apiRequest.getMoviesOdd(dispatch);
    apiRequest.getMoviesChart(dispatch);
    apiRequest.getMoviesUpComing(dispatch);
    apiRequest.getMoviesRecommend(dispatch);
  }, []);
  // const

  return (
    <>
      {moviesNominated.isFetch ? (
        <Loading />
      ) : (
        <section className={cx("home-page")}>
          <section className={cx("movies-nominated", "grid")}>
            <div className={cx("movies-nominated__content", "movies__content")}>
              <MoviesTitle showTitleRight type={0} title="PHIM ĐỀ CỬ" path="/" />
              <div className={cx("row")}>
                <div className={cx("col", "l-6", "m-6", "s-12")}>
                  <MoviesItem
                    type={1}
                    isItemHot
                    movie={moviesNominated.data?.items[0]}
                    pathImage={moviesNominated.data?.pathImage}
                  />
                </div>
                <div className={cx("col", "l-6", "m-6", "s-12")}>
                  <div className={cx("row")}>
                    {moviesNominated.data &&
                      moviesNominated.data.items.slice(1, 5).map((movie, index) => {
                        return (
                          <div key={index} className={cx("col", "l-6", "m-6", "s-6")}>
                            <MoviesItem
                              type={1}
                              isItemHot={false}
                              movie={movie}
                              pathImage={moviesNominated.data?.pathImage}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className={cx("row")}>
                {moviesNominated.data &&
                  moviesNominated.data.items.slice(5, 9).map((movie, index) => {
                    return (
                      <div key={index} className={cx("col", "l-3", "m-3", "s-6")}>
                        <MoviesItem
                          type={1}
                          isItemHot={false}
                          movie={movie}
                          pathImage={moviesNominated.data?.pathImage}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
          <section className={cx("movies-new", "grid")}>
            <div className={cx("movies-new__content", "movies__content")}>
              <MoviesTitle showTitleRight type={0} title="PHIM MỚI CẬP NHẬT" />
              <div className={cx("row")}>
                <div className={cx("col", "l-4-8", "m-6", "s-12")}>
                  <MoviesItem
                    type={2}
                    isItemHot
                    movie={moviesNew.data?.items[0]}
                    pathImage={moviesNew.data?.pathImage}
                  />
                </div>
                <div className={cx("col", "l-7-2", "m-6", "s-12")}>
                  <div className={cx("row")}>
                    {moviesNew.data &&
                      moviesNew.data.items.slice(1, 7).map((movie, index) => {
                        if (index === 4 || index === 5)
                          return (
                            <div key={index} className={cx("col", "l-4", "m-0", "s-6")}>
                              <MoviesItem
                                type={2}
                                isItemHot={false}
                                movie={movie}
                                pathImage={moviesNew.data?.pathImage}
                              />
                            </div>
                          );
                        return (
                          <div key={index} className={cx("col", "l-4", "m-6", "s-6")}>
                            <MoviesItem
                              type={2}
                              isItemHot={false}
                              movie={movie}
                              pathImage={moviesNew.data?.pathImage}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className={cx("row")}>
                {moviesNew.data &&
                  moviesNew.data.items.slice(7, 12).map((movie, index) => {
                    if (index === 4)
                      return (
                        <div key={index} className={cx("col", "l-2-4", "m-0", "s-0")}>
                          <MoviesItem type={2} isItemHot={false} movie={movie} pathImage={moviesNew.data?.pathImage} />
                        </div>
                      );
                    return (
                      <div key={index} className={cx("col", "l-2-4", "m-3", "s-0")}>
                        <MoviesItem type={2} isItemHot={false} movie={movie} pathImage={moviesNew.data?.pathImage} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
          <section className={cx("movies-anime", "grid")}>
            <div className={cx("movies-anime__content", "movies__content")}>
              <MoviesTitle showTitleRight type={0} title="PHIM HOẠT HÌNH" />
              <div className={cx("row")}>
                <div className={cx("col", "l-4-8", "m-6", "s-12")}>
                  <MoviesItem
                    type={2}
                    isItemHot
                    movie={moviesAnime.data?.items[0]}
                    pathImage={moviesAnime.data?.pathImage}
                  />
                </div>
                <div className={cx("col", "l-7-2", "m-6", "s-12")}>
                  <div className={cx("row")}>
                    {moviesAnime.data &&
                      moviesAnime.data.items.slice(1, 7).map((movie, index) => {
                        if (index === 4 || index === 5)
                          return (
                            <div key={index} className={cx("col", "l-4", "m-0", "s-0")}>
                              <MoviesItem
                                type={2}
                                isItemHot={false}
                                movie={movie}
                                pathImage={moviesAnime.data?.pathImage}
                              />
                            </div>
                          );
                        return (
                          <div key={index} className={cx("col", "l-4", "m-6", "s-6")}>
                            <MoviesItem
                              type={2}
                              isItemHot={false}
                              movie={movie}
                              pathImage={moviesAnime.data?.pathImage}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={cx("movies-cinema")} style={{ marginTop: 40 }}>
            <MoviesTitle showTitleRight type={1} title="PHIM CHIẾU RẠP" />
            <div className={cx("movies-cinema__icon")}>
              <FontAwesomeIcon icon={faClapperboard} />
            </div>
            <div className={cx("movies-cinema__content", "movies__content", "grid")}>
              <div className={cx("row", "no-gutters")}>
                {moviesCinema.data &&
                  moviesCinema.data.items.slice(0, 10).map((movie, index) => {
                    if (index === 8 || index === 9)
                      return (
                        <div key={index} className={cx("col", "no-gutters", "l-2-4", "m-0", "s-6")}>
                          <MoviesItem
                            type={3.1}
                            isItemHot={false}
                            movie={movie}
                            pathImage={moviesCinema.data?.pathImage}
                          />
                        </div>
                      );
                    return (
                      <div key={index} className={cx("col", "no-gutters", "l-2-4", "m-3", "s-6")}>
                        <MoviesItem
                          type={3.1}
                          isItemHot={false}
                          movie={movie}
                          pathImage={moviesCinema.data?.pathImage}
                        />
                      </div>
                    );
                  })}
                {/*  */}
              </div>
            </div>
          </section>
          <section className={cx("movies-series", "grid")}>
            <div className={cx("movies-series__content", "movies__content")}>
              <MoviesTitle showTitleRight type={0} title="PHIM BỘ MỚI" />
              <div className={cx("row")}>
                {moviesSeri.data &&
                  moviesSeri.data.items.slice(0, 5).map((movie, index) => {
                    if (index === 4)
                      return (
                        <div key={index} className={cx("col", "l-2-4", "m-0", "s-0")}>
                          <MoviesItem
                            type={3.2}
                            isItemHot={false}
                            movie={movie}
                            pathImage={moviesSeri.data?.pathImage}
                          />
                        </div>
                      );
                    return (
                      <div key={index} className={cx("col", "l-2-4", "m-3", "s-6")}>
                        <MoviesItem type={3.2} isItemHot={false} movie={movie} pathImage={moviesSeri.data?.pathImage} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
          <section className={cx("movies-odd", "grid")}>
            <div className={cx("movies-odd__content", "movies__content")}>
              <MoviesTitle showTitleRight type={0} title="PHIM LẺ MỚI" />
              <div className={cx("row")}>
                {moviesOdd.data &&
                  moviesOdd.data.items.slice(0, 5).map((movie, index) => {
                    if (index === 4)
                      return (
                        <div key={index} className={cx("col", "l-2-4", "m-0", "s-0")}>
                          <MoviesItem
                            type={3.2}
                            isItemHot={false}
                            movie={movie}
                            pathImage={moviesOdd.data?.pathImage}
                          />
                        </div>
                      );
                    return (
                      <div key={index} className={cx("col", "l-2-4", "m-3", "s-6")}>
                        <MoviesItem type={3.2} isItemHot={false} movie={movie} pathImage={moviesOdd.data?.pathImage} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
          <section className={cx("movies-charts", "grid")}>
            <div className={cx("movies-charts__content", "movies__content")}>
              <MoviesTitle showTitleRight type={2} title="BẢNG XẾP HẠNG" />

              <div className={cx("row")}>
                {moviesChart.data &&
                  moviesChart.data.items.slice(0, 5).map((movie, index) => {
                    if (index === 4)
                      return (
                        <div key={index} className={cx("col", "l-2-4", "m-0", "s-0")}>
                          <RankingItem rank={index + 1} movie={movie} pathImage={moviesOdd.data?.pathImage} />
                        </div>
                      );
                    return (
                      <div key={index} className={cx("col", "l-2-4", "m-3", "s-6")}>
                        <RankingItem rank={index + 1} movie={movie} pathImage={moviesOdd.data?.pathImage} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
          <section className={cx("movies-upcoming", "grid")}>
            <div className={cx("movies-upcoming__content", "movies__content")}>
              <MoviesTitle showTitleRight type={0} title="PHIM SẮP CHIẾU" />
              <div className={cx("row")}>
                {moviesUpComing.data &&
                  moviesUpComing.data.items.slice(0, 5).map((movie, index) => {
                    if (index === 4)
                      return (
                        <div key={index} className={cx("col", "l-2-4", "m-0", "s-0")}>
                          <MoviesItem
                            type={3.2}
                            isItemHot={false}
                            movie={movie}
                            pathImage={moviesUpComing.data?.pathImage}
                          />
                        </div>
                      );
                    return (
                      <div key={index} className={cx("col", "l-2-4", "m-3", "s-6")}>
                        <MoviesItem
                          type={3.2}
                          isItemHot={false}
                          movie={movie}
                          pathImage={moviesUpComing.data?.pathImage}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>

          <MoviesRecommend moviesRecommend={moviesRecommend} />
          <MoviesCollection />
        </section>
      )}
    </>
  );
};

export default Home;
