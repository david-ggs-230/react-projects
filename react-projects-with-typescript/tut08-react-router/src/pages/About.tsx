import { useState } from "react";
import "./../App.css";

const About = () => {
  const [count, setCount] = useState(0);

  if (count === 3) {
    throw new Error("Intentional error");
  }

  return (
    <div>
      <h2 className="App">About Page</h2>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default About;
