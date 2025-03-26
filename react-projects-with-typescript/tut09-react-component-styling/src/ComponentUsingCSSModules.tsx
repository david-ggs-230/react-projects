import styles from "./custom-style.module.css";

const ComponentUsingCSSModules = () => {
  return (
    <div className="App">
      <h4
        className={`${styles.blueColor} ${styles["margin-top-0"]} ${styles["margin-bottom-20"]}`}
      >
        Using CSS Modules
      </h4>
      <div>
        <div className={`${styles.bgBlue} ${styles.redColor}`}>
          Blue background with red text
        </div>
      </div>
    </div>
  );
};

export default ComponentUsingCSSModules;
