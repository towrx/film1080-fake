import React from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.css";

const cx = classNames.bind(styles);

const Footer = () => {
  return <h2 className={cx("heading")}>Footer</h2>;
};

export default Footer;
