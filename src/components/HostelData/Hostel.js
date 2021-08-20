import { useState } from "react";
import MainHeader from "../MainHeader/MainHeader";
import HostelFloor from "./HostelFloor";
const Hostel = () => {
  const [girlsFlag, setGirlsFlag] = useState(false);
  const [boysFlag, setBoysFlag] = useState(false);
  const [wingFlag, setWingFlag] = useState(false);
  const [wingName, setWingName] = useState("");
  const girlsHostelWings = ["G1", "G2", "G3", "G4", "G5", "G6"];
  const boysHostelWings = ["B1", "B2", "B3", "B4", "B5", "B6"];
  const girlsHostelClickHandler = () => {
    setGirlsFlag(true);
  };
  const boysHostelClickHandler = () => {
    setBoysFlag(true);
  };
  const wingSelectHandler = (e) => {
    setWingFlag(true);
    // console.log(e.target.innerText);
    setWingName(e.target.innerText);
  };
  let chooseHostelContent = (
    <>
      <h2 className="chooseHostel">Choose your Hostel</h2>
      <div className="girlsHostel">
        <img
          onClick={girlsHostelClickHandler}
          style={{
            height: "250px",
            width: "225px",
            backgroundColor: "white",
          }}
          alt="girlsHostel"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRxth383GYbrkKnJ-BPVS9ZVGYLV2uzUrvMqx4z0PqDBdASWWT1DAYxqfF6cStg2BEZNU&usqp=CAU"
        />
      </div>
      <div className="boysHostel">
        <img
          onClick={boysHostelClickHandler}
          style={{ height: "250px", width: "250px" }}
          alt="boysHostel"
          src="https://st3.depositphotos.com/3557671/12561/v/950/depositphotos_125614292-stock-illustration-boy-icon-cartoon-single-avatarpeaople.jpg"
        />
      </div>
    </>
  );
  if (girlsFlag) {
    chooseHostelContent = (
      <>
        <h3>Choose a Hostel</h3>
        <div className="wings">
          {girlsHostelWings.map((wing) => {
            return (
              <span
                onClick={wingSelectHandler}
                style={{
                  height: "250px",
                  width: "250px",
                  margin: "10px",
                  backgroundColor: "grey",
                  padding: "15px",
                }}
              >
                {wing}
              </span>
            );
          })}
        </div>
      </>
    );
  }
  if (boysFlag) {
    chooseHostelContent = (
      <>
        <h3>Choose a Hostel</h3>
        <br></br>
        <div className="wings">
          {boysHostelWings.map((wing) => {
            return (
              <span
                onClick={wingSelectHandler}
                style={{
                  height: "250px",
                  width: "250px",
                  margin: "10px",
                  backgroundColor: "grey",
                  padding: "15px",
                }}
              >
                {wing}
              </span>
            );
          })}
        </div>
      </>
    );
  }
  return (
    <>
      <MainHeader />
      {wingFlag ? <HostelFloor wing={wingName} /> : chooseHostelContent}
    </>
  );
};
export default Hostel;
