import React from "react";
import ChildComponentWithDestrucingPropsArgs from "./ChildComponentWithDestrucingPropsArgs";
import ChildComponentWithPropsArgs from "./ChildComponentWithPropsArgs";
import Person from "./Person";
import "./list-style.css";

const FunctionComponentsDisplay: React.FC = () => {
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
              &lt;ChildComponentWithPropsArgs <br />
              &nbsp;&nbsp;&nbsp;&nbsp;name=&quot;John Doe&quot; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;age=&#123;30&#125; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;location=&quot;New York&quot; <br />
              /&gt;
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
              &lt;ChildComponentWithPropsArgs <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#123; ...person&#125; <br />
              /&gt;
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
              &lt;ChildComponentWithDestrucingPropsArgs <br />
              &nbsp;&nbsp;&nbsp;&nbsp;name=&quot;John Doe&quot; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;age=&#123;30&#125; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;location=&quot;New York&quot; <br />
              /&gt;
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
              &lt;ChildComponentWithDestrucingPropsArgs <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#123; ...person&#125; <br />
              /&gt;
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
              &lt;ChildComponentWithPropsArgs /&gt;
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
              &lt;ChildComponentWithDestrucingPropsArgs /&gt;
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
