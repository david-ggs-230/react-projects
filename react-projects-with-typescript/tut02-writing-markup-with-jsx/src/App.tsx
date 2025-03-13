import { useState } from "react";
import "./App.css";
import "./list-style.css";

function App() {
  const [count, setCount] = useState(0);
  const titleElement = <>The Rules of JSX</>;
  const textContent = "JSX Expressions";
  const classNames = "red-color bg-blue";
  const person = {
    name: "George Bush",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };
  function handleClick() {
    setCount((count) => count + 1);
  }
  return (
    <div className="list-container">
      <h2>{titleElement}</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Return a single root element</h3>
            <div>{"<>The Rules of JSX</>"}</div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Attributes in JSX</h3>
            <div>{`<div className="red-color">Red</div>`}</div>
            <div className="red-color">Red</div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Event Handling</h3>
            <div>{`<button onClick={handleClick}> count is {count} </button>`}</div>
            <div>
              <button onClick={handleClick}> count is {count} </button>
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>JavaScript Expressions: Attributes</h3>
            <div>{`const classNames="red-color bg-blue"`}</div>
            <div>{`<div className={ classNames }>Red</div>`}</div>
            <div className={classNames}>Red</div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>JavaScript Expressions: Contents</h3>
            <div>{`const textContent= "JSX Expressions";`}</div>
            <div>{`<div className="blue-color">{textContent}</div>`}</div>
            <div className="blue-color">{textContent}</div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Inline CSS Styles</h3>
            <div>{`<div style={{ backgroundColor: "grey",color: "blue"}}> `}</div>
            <div>{` Grey background with blue text </div>`}</div>
            <div style={{ backgroundColor: "grey", color: "blue" }}>
              Grey background with blue text
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>JavaScript Objects</h3>
            <div style={{ textAlign: "left", marginLeft: "20px" }}>
              <div>{`const person = {`}</div>
              <div style={{ textAlign: "left", marginLeft: "20px" }}>
                <div>{`name: "George Bush",`}</div>
                <div>{`theme: {`}</div>
                <div>{`backgroundColor: "black",`}</div>
                <div>{`color: "pink", }`}</div>
              </div>
              <div>{`};`}</div>
            </div>
            <div>{`<div style={person.theme}>{person.name}</div>`}</div>
            <div style={person.theme}>{person.name}</div>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;
