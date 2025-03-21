const ComponentPhone = ({
  id = "-1",
  name = "Unknown Name",
  capacity = "Unknown",
  price = "Unknown",
}: {
  id: string;
  name: string;
  capacity: string;
  price: string;
}) => {
  const labelStyle = {
    display: "inline-block",
    width: "3rem",
    marginRight: "1.5rem",
  };
  const itemStyle = {
    display: "inline-block",
    width: "8rem",
    marginRight: "1.5rem",
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
        <label style={labelStyle}>Name:</label>
        <span style={itemStyle}>{name}</span>
      </div>
      <div>
        <label style={labelStyle}>Capacity:</label>
        <span style={itemStyle}>{capacity}</span>
      </div>
      <div>
        <label style={labelStyle}>Price:</label>
        <span style={itemStyle}>{price}</span>
      </div>
    </div>
  );
};

export default ComponentPhone;
