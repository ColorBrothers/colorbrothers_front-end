import React from "react";
import styles from "./colbro.module.css";
import Banner from "../banner/banner";
import Header from "../header/header";
import Search from "../search/search";

const ColBro = () => {
  return(
    <div className={styles.colbro}>
      <Header />
      <Banner />
      <Search />
    </div>
  )
}

export default ColBro;