const ComponentPeople = ({
  id = -1,
  firstName = "Unknown Name",
  lastName = "Unknown",
  age = -1,
}: {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}) => {
  const labelStyle = {
    display: "inline-block",
    width: "6rem",
  };
  const itemStyle = {
    display: "inline-block",
    width: "20rem",
  };
  return (
    <div
      style={{ marginTop: 10, textAlign: "left", marginLeft: "40px" }}
      className="form-group"
    >
      <div>
        <label style={labelStyle}>ID:</label>
        <span style={itemStyle} className="blue-color">
          {id}
        </span>
      </div>
      <div>
        <label style={labelStyle}>First Name:</label>
        <span style={itemStyle}>{firstName}</span>
      </div>
      <div>
        <label style={labelStyle}>Last Name:</label>
        <span style={itemStyle}>{lastName}</span>
      </div>
      <div>
        <label style={labelStyle}>Age:</label>
        <span style={itemStyle}>{age}</span>
      </div>
    </div>
  );
};

export default ComponentPeople;
