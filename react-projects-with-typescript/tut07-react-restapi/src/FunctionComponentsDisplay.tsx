import AxiosGetComponent from "./AxiosGetComponent";
import AxiosPostComponent from "./AxiosPostComponent";
import FetchGetComponent from "./FetchGetComponent";
import FetchPostComponent from "./FetchPostComponent";
import "./list-style.css";

const FunctionComponentsDisplay = () => {
  return (
    <div className="list-container">
      <h2>React RESTful API</h2>
      <ol>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Fetch API: GET Requests</h3>
            <div>
              <FetchGetComponent />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Fetch API: Post Requests</h3>
            <div>
              <FetchPostComponent />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Axios API: GET Requests</h3>
            <div>
              <AxiosGetComponent />
            </div>
          </div>
        </li>
        <li className="list-item">
          <div className="list-item-number"></div>
          <div className="list-item-content">
            <h3>Axios API: Post Requests</h3>
            <div>
              <AxiosPostComponent />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default FunctionComponentsDisplay;
