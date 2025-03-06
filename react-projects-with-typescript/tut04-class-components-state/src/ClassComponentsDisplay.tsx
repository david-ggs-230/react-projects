import React from "react";
import ParentComponentNoChild from "./ParentComponentNoChild";
import ParentComponentWithChild from "./ParentComponentWithChild";
import "./list-style.css";

class ClassComponentsDisplay extends React.Component {
  render() {
    return (
      <div className="list-container">
        <h2>Using State in a React Class Component</h2>
        <ol>
          <li className="list-item">
            <div className="list-item-number"></div>
            <div className="list-item-content">
              <h3>Parent Counter -- No Child</h3>
              <ParentComponentNoChild />
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-number"></div>
            <div className="list-item-content">
              <h3>Parent Counter -- With Child</h3>
              <ParentComponentWithChild />
            </div>
          </li>
        </ol>
      </div>
    );
  }
}

export default ClassComponentsDisplay;
