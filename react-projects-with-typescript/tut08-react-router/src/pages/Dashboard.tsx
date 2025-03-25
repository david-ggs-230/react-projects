import { Link, Outlet } from "react-router";
import "./../App.css";

const Dashboard = () => {
  return (
    <div
      className="App"
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "red",
        padding: "10px",
      }}
    >
      <h2>Parent Component</h2>
      <h4>Dashboard with Nested Routing</h4>
      <nav
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "blue",
        }}
      >
        <div>Link inside the parent component</div>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
