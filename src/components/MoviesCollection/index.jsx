import React from "react";
import classNames from "classnames/bind";

import styles from "~/pages/Home/Home.module.css";
import MoviesTitle from "../MoviesTitle";
import CollectionItem from "../CollectionItem";
import srcCollection1 from "../../assets/images/collection1.jpg";
import srcCollection2 from "../../assets/images/collection2.jpg";
import srcCollection3 from "../../assets/images/collection3.jpg";
import srcCollection4 from "../../assets/images/collection4.jpg";
import srcCollection5 from "../../assets/images/collection5.jpg";
import srcCollection6 from "../../assets/images/collection6.jpg";
import srcCollection7 from "../../assets/images/collection7.jpg";
import srcCollection8 from "../../assets/images/collection8.jpg";
const cx = classNames.bind(styles);

const MoviesCollection = () => {
  return (
    <section className={cx("movies-collection", "grid")}>
      <MoviesTitle type={1} title="BỘ SƯU TẬP" />

      <div className={cx("movies-collection__content", "movies__content")}>
        <div className={cx("row")}>
          <div className={cx("col", "l-3", "m-3", "s-6")}>
            <CollectionItem srcCollection={srcCollection8} />
          </div>
          <div className={cx("col", "l-3", "m-3", "s-6")}>
            <CollectionItem srcCollection={srcCollection1} />
          </div>
          <div className={cx("col", "l-3", "m-3", "s-6")}>
            <CollectionItem srcCollection={srcCollection2} />
          </div>
          <div className={cx("col", "l-3", "m-3", "s-6")}>
            <CollectionItem srcCollection={srcCollection3} />
          </div>
          <div className={cx("col", "l-3", "m-3", "s-6")}>
            <CollectionItem srcCollection={srcCollection4} />
          </div>
          <div className={cx("col", "l-3", "m-3", "s-6")}>
            <CollectionItem srcCollection={srcCollection5} />
          </div>
          <div className={cx("col", "l-3", "m-3", "s-6")}>
            <CollectionItem srcCollection={srcCollection6} />
          </div>
          <div className={cx("col", "l-3", "m-3", "s-6")}>
            <CollectionItem srcCollection={srcCollection7} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesCollection;
