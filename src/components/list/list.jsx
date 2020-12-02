import React from "react";
import styles from "./list.module.css";
import Header from "../header/header";
import Search from "../search/search";
import ListBanner from "../list_banner/list_banner";
import ListData from "../list_data/list_data";

const List = () => {
  return(
    <div className={styles.list}>
      <Header />
      <ListBanner />
      <Search />
      <ListData />
    </div>
  )
}

export default List;