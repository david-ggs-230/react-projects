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
            <p>&quot;&lt;&gt;The Rules of JSX&lt;/&gt;&quot;</p>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Attributes in JSX</h3>
            <p>&lt;p className=&quot;red-color&quot;&gt;Red&lt;/p&gt;</p>
            <p className="red-color">Red</p>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Event Handling</h3>
            <p>
              &lt;button onClick=&#123;handleClick&#125;&gt;count is
              &#123;count&#125;&lt;/button&gt;
            </p>
            <p>
              <button onClick={handleClick}>count is {count}</button>
            </p>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>JavaScript Expressions: Attributes</h3>
            <p>const classNames=&quot;red-color bg-blue&quot;</p>
            <p>&lt;p className=&#123; classNames &#125;&gt;Red&lt;/p&gt;</p>
            <p className={classNames}>Red</p>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>JavaScript Expressions: Contents</h3>
            <p>const textContent= &quot;JSX Expressions&quot;;</p>
            <p>
              &lt;p
              className=&quot;blue-color&quot;&gt;&#123;textContent&#125;&lt;
              /p&gt;
            </p>
            <p className="blue-color">{textContent}</p>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Inline CSS Styles</h3>
            <p>
              &lt;p style=&#123;&#123; backgroundColor: &quot;grey&quot;, color:
              &quot;blue&quot;
              <br /> &#125;&#125; &gt; Grey background with blue text &lt;
              /p&gt;
            </p>
            <p style={{ backgroundColor: "grey", color: "blue" }}>
              Grey background with blue text
            </p>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>JavaScript Objects</h3>
            <div style={{ textAlign: "left" }}>
              const person = &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;name: &quot;George Bush&quot;,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;theme: &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: &quot;black&quot;,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;color: &quot;pink&quot;, &#125;
              <br />
              &#125;;
            </div>
            <p>
              &lt;p style=&#123;person.theme&#125;&gt;&#123;person.name&#125;
              &lt;/p&gt;
            </p>
            <p style={person.theme}>{person.name}</p>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;
