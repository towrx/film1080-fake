import React from "react";
import classNames from "classnames/bind";

import styles from "~/pages/Home/Home.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const CollectionItem = ({ srcCollection }) => {
  return (
    <Link to="/the-loai/phim-sap-chieu?page=1">
      <div className={cx("movies-collection__item")}>
        <img src={srcCollection} alt="img-collection" />
      </div>
    </Link>
  );
};

export default CollectionItem;
