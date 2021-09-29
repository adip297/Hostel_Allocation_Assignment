import MainHeader from "../MainHeader/MainHeader";

const HostelRoomDetails = (props) => {
  return (
    <>
      <MainHeader />
      <div
        className="hostelDetails"
        style={{
          border: "2px solid black",
          margin: "10px",
          paddingBottom: "30px",
        }}
      >
        <h1>Success</h1>
        <p>Your room has been booked successfully.</p>
        <p>Your room details are as follows:</p>
        <div className="roomDetails">
          <div className="hostelWing">
            <label style={{ fontSize: "xx-large" }}>Hostel No.{"  "}</label>
            <text style={{ color: "red", fontSize: "xx-large" }}>
              {props.wing}
            </text>
          </div>
          <div className="hostelFloor">
            <label style={{ fontSize: "xx-large" }}>Floor.{"  "}</label>
            <text style={{ color: "red", fontSize: "xx-large" }}>
              {props.floor}
            </text>
          </div>
          <div className="hostelRoom">
            <label style={{ fontSize: "xx-large" }}>Room No.{"  "}</label>
            <text style={{ color: "red", fontSize: "xx-large" }}>
              {props.room}
            </text>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostelRoomDetails;
