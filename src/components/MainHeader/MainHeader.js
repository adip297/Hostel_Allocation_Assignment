import React from "react";
import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <h1>Hostel Allocation</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
