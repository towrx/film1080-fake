import React from "react";
import classNames from "classnames/bind";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MoviesItem.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const MoviesItem = ({ type, isItemHot, movie, pathImage }) => {
  return (
    <>
      {/* movies-nominated__item */}
      {type === 1 && (
        <div className={cx("item", "type01", { "item--hot": isItemHot })}>
          <Link className={cx("item__link")} to={movie && "/watch/" + movie.slug}>
            <div className={cx("item__thumb")}>
              <img src={movie && pathImage && pathImage + movie.poster_url} alt="" />
            </div>
            <span className={cx("item__audio")}>Vietsub</span>
            <div className={cx("item__description")}>
              <div className={cx("item__left")}>
                <span className={cx("item__quantity")}>FHD</span>
                <span className={cx("item__title-vie")}>{movie && movie.name}</span>
                <span className={cx("item__title-eng")}>{movie && movie.origin_name}</span>
                <span className={cx("item__views")}>40.6K xem</span>
              </div>
              <div className={cx("item__right")}>
                <div className={cx("item__vote")}>
                  <FontAwesomeIcon icon={faStar} className={cx("item__start-vote")} />
                  <span className={cx("item__imdb")}>9.8/10</span>
                </div>
                <span className={cx("item__episode")}>3 / 16 tập</span>
              </div>
            </div>
          </Link>
        </div>
      )}
      {type === 2 && (
        <div className={cx("item", "type02", { "item--hot": isItemHot })}>
          <Link className={cx("item__link")} to={movie && "/watch/" + movie.slug}>
            <div className={cx("item__thumb")}>
              <img src={movie && pathImage && pathImage + movie.poster_url} alt="" />
            </div>
            <span className={cx("item__audio")}>Vietsub</span>
            <div className={cx("item__description")}>
              <div className={cx("item__left")}>
                <span className={cx("item__episode")}>Tập 12</span>
                <span className={cx("item__title-vie")}>{movie && movie.name}</span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {(type === 3.1 || type === 3.2) && (
        <div className={cx("item", "type03", { mb8: type === 3.2 })}>
          <Link className={cx("item__link")} to={movie && "/watch/" + movie.slug}>
            <div className={cx("item__thumb")}>
              <img src={movie && pathImage && pathImage + movie.thumb_url} alt="" />
            </div>
            <span className={cx("item__audio")}>Vietsub</span>
            <div className={cx("item__description")}>
              <div className={cx("item__left")}>
                <div className={cx("wrap")}>
                  <span className={cx("item__quantity")}>FHD</span>
                  <div className={cx("item__vote")}>
                    <FontAwesomeIcon icon={faStar} className={cx("item__start-vote")} />
                    <span className={cx("item__imdb")}>9.8/10</span>
                  </div>
                </div>
                <span className={cx("item__title-vie")}>{movie && movie.name}</span>
                {type === 3.1 && <span className={cx("item__category")}>Hài Hước, Âm Nhạc, Gia Đình</span>}

                {type === 3.2 && (
                  <span className={cx("item__category")}>
                    <div className="item__view">53.8K xem</div>
                    <div className="item__episode">12 / 16 tập</div>
                  </span>
                )}
              </div>
            </div>
          </Link>
        </div>
      )}
      {type === 4 && (
        <Link to={movie && "/watch/" + movie.slug}>
          <li className={cx("related__item")}>
            <img src={movie && pathImage && pathImage + movie.poster_url} alt="" className={cx("related__thumb")} />
            <div className={cx("related__info")}>
              <h4 className={cx("related__title")}>{movie && movie.name}</h4>
              <div className={cx("relate__footer")}>
                <div className={cx("related__update")}>16 / 21 tập</div>
                <div className={cx("related__views")}>5.9K lượt xem</div>
              </div>
            </div>
          </li>
        </Link>
      )}
    </>
  );
};

export default MoviesItem;
