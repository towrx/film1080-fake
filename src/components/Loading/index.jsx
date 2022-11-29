import React from "react";
import classNames from "classnames/bind";

import styles from "./Loading.module.css";

const cx = classNames.bind(styles);

const Loading = () => {
  return (
    <div className={cx("wrap")}>
      <div className={cx("fade-loading")}></div>
    </div>
  );
};

export default Loading;
