import { FC } from "react";
import ChildComponentWithDestrucingPropsArgs from "./ChildComponentWithDestrucingPropsArgs";
import ChildComponentWithPropsArgs from "./ChildComponentWithPropsArgs";
import Person from "./Person";
import "./list-style.css";

const FunctionComponentsDisplay: FC = () => {
  const person: Person = {
    name: "John Doe",
    age: 30,
    location: "New York",
  };
  return (
    <div className="list-container">
      <h2>Using Props in a React Function Component</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Parent: Passing props arguments</h3>
            <h5 className="blue-color" style={{ marginTop: "0px" }}>
              Child: Accessing arguments using props
            </h5>
            <div style={{ textAlign: "left", paddingLeft: "20px" }}>
              <div>{`<ChildComponentWithPropsArgs`}</div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <div>{`name="John Doe"`}</div>
                <div>{`age={30}`}</div>
                <div>{`location="New York"`}</div>
              </div>
              <div>{`/>`}</div>
            </div>
            <div>
              <ChildComponentWithPropsArgs
                name="John Doe"
                age={30}
                location="New York"
              />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Parent: Passing destructuring props</h3>
            <h5 className="blue-color" style={{ marginTop: "0px" }}>
              Child: Accessing arguments using props
            </h5>
            <div style={{ textAlign: "left", paddingLeft: "20px" }}>
              <div>{`<ChildComponentWithPropsArgs {...person} />`}</div>
            </div>
            <div>
              <ChildComponentWithPropsArgs {...person} />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Parent: Passing props arguments</h3>
            <h5 className="blue-color" style={{ marginTop: "0px" }}>
              Child: Accessing arguments using destrucing props
            </h5>
            <div style={{ textAlign: "left", paddingLeft: "20px" }}>
              <div>{`<ChildComponentWithDestrucingPropsArgs`}</div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <div>{`name="John Doe"`}</div>
                <div>{`age={30}`}</div>
                <div>{`location="New York"`}</div>
              </div>
              <div>{`/>`}</div>
            </div>
            <div>
              <ChildComponentWithDestrucingPropsArgs
                name="John Doe"
                age={30}
                location="New York"
              />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Parent: Passing destructuring props</h3>
            <h5 className="blue-color" style={{ marginTop: "0px" }}>
              Child: Accessing arguments using destrucing props
            </h5>
            <div style={{ textAlign: "left", paddingLeft: "20px" }}>
              <div>{`<ChildComponentWithDestrucingPropsArgs`}</div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <div>{`{...person}`}</div>
              </div>
              <div>{`/>`}</div>
            </div>
            <div>
              <ChildComponentWithDestrucingPropsArgs {...person} />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Parent: Passing no arguments</h3>
            <h5 className="blue-color" style={{ marginTop: "0px" }}>
              Child: Accessing default arguments using props
            </h5>

            <div style={{ textAlign: "left", paddingLeft: "20px" }}>
              <div>{`<ChildComponentWithPropsArgs />`}</div>
            </div>

            <div>
              <ChildComponentWithPropsArgs />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Parent: Passing no arguments</h3>
            <h5 className="blue-color" style={{ marginTop: "0px" }}>
              Child: Accessing default arguments using destrucing props
            </h5>

            <div style={{ textAlign: "left", paddingLeft: "20px" }}>
              <div>{`<ChildComponentWithDestrucingPropsArgs />`}</div>
            </div>

            <div>
              <ChildComponentWithDestrucingPropsArgs />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default FunctionComponentsDisplay;
