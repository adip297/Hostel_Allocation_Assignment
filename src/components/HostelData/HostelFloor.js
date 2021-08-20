const HostelFloor = (props) => {
  const leftSideRooms = [1, 2, 3, 4, 5];
  const rightSideRooms = [6, 7, 8, 9, 10];
  return (
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
              style={{
                height: "250px",
                width: "250px",
                margin: "10px",
                backgroundColor: "grey",
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
              style={{
                height: "250px",
                width: "250px",
                margin: "10px",
                backgroundColor: "grey",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              {room}
            </span>
          );
        })}
      </div>
    </>
  );
};
export default HostelFloor;
