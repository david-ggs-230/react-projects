import React from "react";
import FunctionComponentWithDestrucingPropsArgs from "./FunctionComponentWithDestrucingPropsArgs";
import FunctionComponentWithPropsArgs from "./FunctionComponentWithPropsArgs";
import Person from "./Person";
import "./list-style.css";

const FunctionComponentsDisplay: React.FC = () => {
  const person: Person = {
    name: "John Doe",
    age: 30,
    location: "New York",
    label: "Person Label",
  };
  return (
    <div className="list-container">
      <h2>Using Props in a React Function Component</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Parent: Passing props arguments</h3>
            <p>
              <div style={{ textAlign: "left", paddingLeft: "20px" }}>
                &lt;FunctionComponentWithDestructuringPropsArgs <br />
                &nbsp;&nbsp;&nbsp;&nbsp;name=&quot;John Doe&quot; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;age=&#123;30&#125; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;location=&quot;New York&quot; <br />{" "}
                /&gt;
              </div>
            </p>
            <p>
              <FunctionComponentWithDestrucingPropsArgs
                name="John Doe"
                age={30}
                location="New York"
              />
            </p>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Parent: Passing destructuring props</h3>
            <p>
              <div style={{ textAlign: "left", paddingLeft: "20px" }}>
                &lt;FunctionComponentWithPropsArgs <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#123; ...person&#125; <br />
                /&gt;
              </div>
            </p>
            <p>
              <FunctionComponentWithDestrucingPropsArgs {...person} />
            </p>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Parent: Passing default props </h3>
            <p>
              <div style={{ textAlign: "left", paddingLeft: "20px" }}>
                &lt;FunctionComponentWithDestrucingPropsArgs /&gt;
              </div>
            </p>
            <p>
              <FunctionComponentWithDestrucingPropsArgs />
            </p>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Child: Accessing props through props</h3>
            <p>
              <div style={{ textAlign: "left", paddingLeft: "20px" }}>
                &lt;&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Name:
                &#123;props.name&#125;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Age:
                &#123;props.age&#125;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Location:
                &#123;props.location&#125;&lt;/div&gt;
                <br />
                &lt;/&gt;
              </div>
            </p>
            <p>
              <FunctionComponentWithPropsArgs
                propAccess="default"
                {...person}
              />
            </p>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Child: Accessing props through destructuring</h3>
            <p>
              <div style={{ textAlign: "left", paddingLeft: "20px" }}>
                &lt;&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Name:
                &#123;name&#125;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Age:
                &#123;age&#125;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Location:
                &#123;location&#125;&lt;/div&gt;
                <br />
                &lt;/&gt;
              </div>
            </p>
            <p>
              <FunctionComponentWithPropsArgs
                propAccess="destructuring"
                {...person}
              />
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default FunctionComponentsDisplay;
