import { Link, Outlet } from "react-router";
import "./../App.css";

const Products = () => {
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
      <h4>Products with Nested Routing</h4>
      <nav
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "blue",
        }}
      >
        <div>Link inside the parent component</div>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link to="/products/1">Product 1</Link>
          </li>
          <li>
            <Link to="/products/2">Product 2</Link>
          </li>
          <li>
            <Link to="/products/3">Product 3</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
