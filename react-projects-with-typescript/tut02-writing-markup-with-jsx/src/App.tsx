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
    <div className="App listcontainer">
      <h2>{titleElement}</h2>
      <ol className="alternating-colors">
        <li>
          <strong>Return a single root element</strong>
          <div>&quot;&lt;&gt;The Rules of JSX&lt;/&gt;&quot;</div>
        </li>
        <li>
          <strong>Attributes in JSX</strong>
          <div>
            <div>
              &lt;div className=&quot;red-color&quot;&gt;Red&lt;/div&gt;
            </div>
            <div className="red-color">Red</div>
          </div>
        </li>
        <li>
          <strong>Event Handling</strong>
          <div>
            <button onClick={handleClick}>count is {count}</button>
          </div>
        </li>
        <li>
          <strong>JavaScript Expressions</strong>
          <div>
            <div>const classNames=&quot;red-color bg-blue&quot;</div>
            <div>
              &lt;div className=&#123; classNames &#125;&gt;Red&lt;/div&gt;
            </div>
            <div className={classNames}>Red</div>
            <div>const textContent= &quot;JSX Expressions&quot;;</div>
            <div>
              &lt;div
              className=&quot;blue-color&quot;&gt;&#123;textContent&#125;&lt;/div&gt;
            </div>
            <div className="blue-color">{textContent}</div>
          </div>
        </li>
        <li>
          <strong>JavaScript Objects and CSS</strong>
          <div>
            <div>
              {" "}
              &lt;div
              style=&#123;&#123;backgroundColor:&apos;grey&apos;,color:&apos;blue&apos;&#125;&#125;&gt;...&lt;/div&gt;
            </div>
            <div style={{ backgroundColor: "grey", color: "blue" }}>
              Grey with blue text
            </div>
            <div>
              &lt;div style=&#123;person.theme&#125;&gt;&#123;person.name&#125;
              &lt;/div&gt;
            </div>
            <div style={person.theme}>{person.name}</div>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;
