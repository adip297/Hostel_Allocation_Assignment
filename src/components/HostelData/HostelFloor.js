import { useState } from "react";
import Button from "../UI/Button/Button";
import HostelRoomDetails from "./HostelRoomDetails";
const HostelFloor = (props) => {
  const leftSideRooms = [1, 2, 3, 4, 5];
  const rightSideRooms = [6, 7, 8, 9, 10];
  const [selectedRoom, setSelectedRoom] = useState("");
  const [displayBookingBtn, setDisplayBookingBtn] = useState(false);
  const [roomBooked, setRoomBooked] = useState(false);
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
        <HostelRoomDetails wing={props.wing} room={selectedRoom} />
      ) : (
        <>
          <h3 className="floorSelection">Choose a floor</h3>
          <div className="chooseFloor">
            <select name="floors" id="floors">
              <option value="floor1">floor1</option>
              <option value="floor2">floor2</option>
              <option value="floor3">floor3</option>
              <option value="floor4">floor4</option>
              <option value="floor5">floor5</option>
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
