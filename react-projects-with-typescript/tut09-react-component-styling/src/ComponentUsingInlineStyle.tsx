const ComponentUsingInlineStyle = () => {
  const styleObject = { backgroundColor: "blue", color: "red" };
  return (
    <div className="App">
      <h4 style={{ marginTop: "0px", marginBottom: "20px", color: "blue" }}>
        Using Inline Style
      </h4>
      <div>
        <div style={styleObject}>Blue background with red text</div>
      </div>
    </div>
  );
};

export default ComponentUsingInlineStyle;
