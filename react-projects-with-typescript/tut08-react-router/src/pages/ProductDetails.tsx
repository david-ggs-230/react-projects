import { useParams } from "react-router";
import "./../App.css";

function ProductDetails() {
  const { productId } = useParams();
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
      <h4 className="App">Product Contents</h4>
      <h5 className="App">
        Product ID:
        <span
          style={{ color: "blue", fontSize: "1.5rem" }}
        >{` ${productId}`}</span>
      </h5>
    </div>
  );
}

export default ProductDetails;
