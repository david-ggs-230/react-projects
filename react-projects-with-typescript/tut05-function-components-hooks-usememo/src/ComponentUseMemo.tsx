import ComponentReactMemo from "./ComponentReactMemo";
import ComponentWithOutUseMemo from "./ComponentWithOutUseMemo";
import ComponentWithUseMemo from "./ComponentWithUseMemo";
import "./list-style.css";

const ComponentUseMemo = () => {
  return (
    <>
      <ComponentWithUseMemo />
      <ComponentWithOutUseMemo />
      <ComponentReactMemo />
    </>
  );
};

export default ComponentUseMemo;
