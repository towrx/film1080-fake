import React, { useRef } from "react";
import classNames from "classnames/bind";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MoviesItem.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const MoviesItem = ({ type, isItemHot, movie, pathImage }) => {
  const infoMovieFake = useRef({
    audio: [
      "VietSub",
      "Thuyết minh",
      "Lồng tiếng",
      "VíetSub + Thuyết minh",
      "Thuyết minh + Lồng tiếng",
      "VietSub + Lồng tiếng",
    ],
    quantity: ["FHD", "HD", "HDRip", "CAM", "Raw"],
    genres: ["Hài Hước", "Âm Nhạc", "Gia Đình", "Rùng rợn", "Huyền bí", "Lãng mạn", "Giật gân", "Kịch"],
  });
  return (
    <>
      {/* movies-nominated__item */}
      {type === 1 && (
        <div className={cx("item", "type01", { "item--hot": isItemHot })}>
          <Link className={cx("item__link")} to={movie && "/watch/" + movie.slug}>
            <div className={cx("item__thumb")}>
              <img src={movie && pathImage && pathImage + movie.poster_url} alt="" />
            </div>
            <span className={cx("item__audio")}>
              {infoMovieFake.current.audio[Math.floor(Math.random() * infoMovieFake.current.audio.length)]}
            </span>
            <div className={cx("item__description")}>
              <div className={cx("item__left")}>
                <span className={cx("item__quantity")}>
                  {infoMovieFake.current.quantity[Math.floor(Math.random() * infoMovieFake.current.quantity.length)]}
                </span>
                <span className={cx("item__title-vie")}>{movie && movie.name}</span>
                <span className={cx("item__title-eng")}>{movie && movie.origin_name}</span>
                <span className={cx("item__views")}>{(Math.random() * 20 + 1).toFixed(1)}K xem</span>
              </div>
              <div className={cx("item__right")}>
                <div className={cx("item__vote")}>
                  <FontAwesomeIcon icon={faStar} className={cx("item__start-vote")} />
                  <span className={cx("item__imdb")}>{Math.floor(Math.random() * 10 + 1) + "/" + 10}</span>
                </div>
                <span className={cx("item__episode")}>
                  {Math.floor(Math.random() * 14 + 1) + "/" + Math.floor(Math.random() * 16 + 14) + " "} tập
                </span>
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
            <span className={cx("item__audio")}>
              {infoMovieFake.current.audio[Math.floor(Math.random() * infoMovieFake.current.audio.length)]}
            </span>
            <div className={cx("item__description")}>
              <div className={cx("item__left")}>
                <span className={cx("item__episode")}>Tập {" " + Math.floor(Math.random() * 20 + 1)}</span>
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
            <span className={cx("item__audio")}>
              {infoMovieFake.current.audio[Math.floor(Math.random() * infoMovieFake.current.audio.length)]}
            </span>
            <div className={cx("item__description")}>
              <div className={cx("item__left")}>
                <div className={cx("wrap")}>
                  <span className={cx("item__quantity")}>
                    {infoMovieFake.current.quantity[Math.floor(Math.random() * infoMovieFake.current.quantity.length)]}
                  </span>
                  <div className={cx("item__vote")}>
                    <FontAwesomeIcon icon={faStar} className={cx("item__start-vote")} />
                    <span className={cx("item__imdb")}>{(Math.random() * 10 + 1).toFixed(1) + "/" + 10}</span>
                  </div>
                </div>
                <span className={cx("item__title-vie")}>{movie && movie.name}</span>
                {type === 3.1 && (
                  <span className={cx("item__category")}>
                    {infoMovieFake.current.genres
                      .reduce((value, genre, index, originGenres) => {
                        if (value.length < 3) value.push(originGenres[Math.floor(Math.random() * originGenres.length)]);
                        return value;
                      }, [])
                      .join(", ")}
                  </span>
                )}

                {type === 3.2 && (
                  <span className={cx("item__category")}>
                    <div className="item__view">{(Math.random() * 20 + 1).toFixed(1)}K xem</div>
                    <div className="item__episode">
                      {Math.floor(Math.random() * 14 + 1) + "/" + Math.floor(Math.random() * 16 + 12) + " "} tập
                    </div>
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
                <div className={cx("related__update")}>
                  {" "}
                  {Math.floor(Math.random() * 14 + 1) + "/" + Math.floor(Math.random() * 16 + 12) + " "}
                </div>
                <div className={cx("related__views")}>{(Math.random() * 20 + 1).toFixed(1)}K xem</div>
              </div>
            </div>
          </li>
        </Link>
      )}
    </>
  );
};

export default MoviesItem;
