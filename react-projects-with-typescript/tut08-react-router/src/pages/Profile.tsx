import "./../App.css";

const Profile = () => {
  return (
    <div
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "green",
        marginTop: "20px",
      }}
    >
      <h2 className="App">Nested Child Components</h2>
      <h4 className="App">Profile Contents</h4>
    </div>
  );
};

export default Profile;
