import React from "react";
import styles from "./list_banner.module.css";

const ListBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.image}>
        <h2 className={styles.text}>차량이 조회 되었습니다.</h2>
        <img src="/images/search_image.png" />
      </div>
    </div>
  )
}

export default ListBanner;