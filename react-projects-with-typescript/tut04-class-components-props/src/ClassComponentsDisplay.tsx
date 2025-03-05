import React from "react";
import ClassComponentAccessProps from "./ClassComponentAccessProps";
import ClassComponentPropsAccessMethods from "./ClassComponentPropsAccessMethods";
import Person from "./Person";
import "./list-style.css";
class ClassComponentsDisplay extends React.Component {
  render() {
    const person: Person = {
      name: "John Doe",
      age: 30,
      location: "New York",
      label: "Person Label",
    };
    return (
      <div className="list-container">
        <h2>Using Props in a React Class Component</h2>
        <ol>
          <li className="list-item">
            <div className="list-item-number"></div>
            <div className="list-item-content">
              <h3>Parent: Passing props</h3>
              <p>
                <div style={{ textAlign: "left", paddingLeft: "20px" }}>
                  &lt;ClassComponentAccessProps <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;name=&quot;John Doe&quot; <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;age=&#123;30&#125; <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;location=&quot;New York&quot; <br />{" "}
                  /&gt;
                </div>
              </p>
              <p>
                <ClassComponentAccessProps
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
                  &lt;ClassComponentAccessProps <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&#123;...person&#125; <br />
                  /&gt;
                </div>
              </p>
              <p>
                <ClassComponentAccessProps {...person} />
              </p>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-number"></div>
            <div className="list-item-content">
              <h3>Parent: Passing default props </h3>
              <p>
                <div style={{ textAlign: "left", paddingLeft: "20px" }}>
                  &lt;ClassComponentAccessProps /&gt;
                </div>
              </p>
              <p>
                <ClassComponentAccessProps />
              </p>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-number"></div>
            <div className="list-item-content">
              <h3>Child: Accessing props through this</h3>
              <p>
                <div style={{ textAlign: "left", paddingLeft: "20px" }}>
                  &lt;&gt; <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Name:
                  &#123;this.props.name&#125;&lt;/div&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Age:
                  &#123;this.props.age&#125;&lt;/div&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Location:
                  &#123;this.props.location&#125;&lt;/div&gt;
                  <br />
                  &lt;/&gt;
                </div>
              </p>
              <p>
                <ClassComponentPropsAccessMethods
                  propAccess="this"
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
                <ClassComponentPropsAccessMethods
                  propAccess="destructuring"
                  {...person}
                />
              </p>
            </div>
          </li>
        </ol>
      </div>
    );
  }
}

export default ClassComponentsDisplay;
