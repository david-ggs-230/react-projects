import "./App.css";
import ClassComponentChild from "./ClassComponentChild";
import ClassComponentParent from "./ClassComponentParent";
import FunctionComponentChild from "./FunctionComponentChild";
import FunctionComponentParent from "./FunctionComponentParent";
import "./list-styles.css";

function App() {
  return (
    <>
      <div className="tree-container" style={{ display: "block" }}>
        <div className="tree">
          <ul>
            <FunctionComponentParent
              label={"Function Component: Parent"}
              name={"Jane Doe"}
              age={48}
              location={"New York"}
            >
              <FunctionComponentChild
                label={"Child 3: As {children}"}
                name={"Lisa Smith"}
                age={18}
                location={"Boston"}
              ></FunctionComponentChild>
            </FunctionComponentParent>
          </ul>
        </div>

        <div className="tree">
          <ul>
            <ClassComponentParent
              label={"Class Component: Parent"}
              name={"Jane Doe"}
              age={48}
              location={"New York"}
            >
              <ClassComponentChild
                label={"Child 3: As {children}"}
                name={"Lisa Smith"}
                age={18}
                location={"Boston"}
              ></ClassComponentChild>
            </ClassComponentParent>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
