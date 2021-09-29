import { useState } from "react";
import Button from "../UI/Button/Button";
import HostelRoomDetails from "./HostelRoomDetails";
const HostelFloor = (props) => {
  const leftSideRooms = [1, 2, 3, 4, 5];
  const rightSideRooms = [6, 7, 8, 9, 10];
  const [selectedRoom, setSelectedRoom] = useState("");
  const [displayBookingBtn, setDisplayBookingBtn] = useState(false);
  const [roomBooked, setRoomBooked] = useState(false);
  const [floor, setFloor] = useState(1);
  const selectRoomHandler = (e) => {
    // console.log(e.target.innerText);
    setSelectedRoom(e.target.innerText);
    e.target.style.backgroundColor = "grey";
    setDisplayBookingBtn(true);
  };
  const roomBookedHandler = () => {
    setRoomBooked(true);
  };

  return (
    <>
      {roomBooked ? (
        <HostelRoomDetails
          floor={floor}
          wing={props.wing}
          room={selectedRoom}
        />
      ) : (
        <>
          <h3 className="floorSelection">Choose a floor</h3>
          <div className="chooseFloor">
            <select
              onChange={(e) => {
                setFloor(e.target.value);
              }}
              name="floors"
              id="floors"
            >
              <option value="1">floor 1</option>
              <option value="2">floor 2</option>
              <option value="3">floor 3</option>
              <option value="4">floor 4</option>
              <option value="5">floor 5</option>
            </select>
          </div>
          <br></br>
          <br></br>
          <div className="chooseRoom">
            {leftSideRooms.map((room) => {
              return (
                <span
                  key={room}
                  onClick={selectRoomHandler}
                  style={{
                    height: "250px",
                    width: "250px",
                    margin: "10px",
                    backgroundColor: "#98FB98",
                    padding: "15px",
                    borderRadius: "5px",
                  }}
                >
                  {room}
                </span>
              );
            })}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {rightSideRooms.map((room) => {
              return (
                <span
                  key={room}
                  onClick={selectRoomHandler}
                  style={{
                    height: "250px",
                    width: "250px",
                    margin: "10px",
                    backgroundColor: "#98FB98",
                    padding: "15px",
                    borderRadius: "5px",
                  }}
                >
                  {room}
                </span>
              );
            })}
          </div>
          <br></br>
          <br></br>
          <div>
            {displayBookingBtn && (
              <Button onClick={roomBookedHandler}>Book Room</Button>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default HostelFloor;
