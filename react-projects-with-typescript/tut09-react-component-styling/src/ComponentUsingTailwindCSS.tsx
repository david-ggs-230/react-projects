import "./tailwind.css";

const ComponentUsingTailwindCSS = () => {
  return (
    <div className="App">
      <div className="text-sm font-bold underline text-blue-600 mb-4">
        Using Tailwind CSS
      </div>
      <div>
        <div className="text-green-900 bg-blue-300">
          Blue background with green text
        </div>
      </div>
    </div>
  );
};

export default ComponentUsingTailwindCSS;
