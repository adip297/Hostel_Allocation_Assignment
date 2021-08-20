import React from "react";
import Hostel from "../HostelData/Hostel";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
const Home = (props) => {
  return (
    <Card className={classes.home}>
      <Hostel />
    </Card>
  );
};

export default Home;
