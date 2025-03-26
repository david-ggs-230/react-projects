import "./tailwind.css";
import logo from "./assets/react.svg";
import ViteLogo from "../public/vite.svg?react";

const ComponentUsingSVG = () => {
  return (
    <div className="App">
      <div className="text-sm font-bold underline text-blue-600 mb-1 mt-4">
        As {`<img />`} Element
      </div>
      <div className="flex justify-center">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="text-sm font-bold underline text-blue-600 mb-1 mt-4">
        As ReactComponent {`<SvgComponent />`}
      </div>
      <div className="flex justify-center">
        <ViteLogo />
      </div>
    </div>
  );
};

export default ComponentUsingSVG;
