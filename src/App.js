import React, { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput("");
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.calculator}>
        <h2 style={styles.title}>Calculator</h2>

        <div style={styles.screen}>{input || "0"}</div>

        <div style={styles.grid}>
          <button style={styles.btn} onClick={clear}>C</button>
          <button style={styles.btn} onClick={backspace}>⌫</button>
          <button style={styles.btn} onClick={() => handleClick("/")}>/</button>
          <button style={styles.btn} onClick={() => handleClick("*")}>*</button>

          <button style={styles.btn} onClick={() => handleClick("7")}>7</button>
          <button style={styles.btn} onClick={() => handleClick("8")}>8</button>
          <button style={styles.btn} onClick={() => handleClick("9")}>9</button>
          <button style={styles.btn} onClick={() => handleClick("-")}>-</button>

          <button style={styles.btn} onClick={() => handleClick("4")}>4</button>
          <button style={styles.btn} onClick={() => handleClick("5")}>5</button>
          <button style={styles.btn} onClick={() => handleClick("6")}>6</button>
          <button style={styles.btn} onClick={() => handleClick("+")}>+</button>

          <button style={styles.btn} onClick={() => handleClick("1")}>1</button>
          <button style={styles.btn} onClick={() => handleClick("2")}>2</button>
          <button style={styles.btn} onClick={() => handleClick("3")}>3</button>
          <button style={styles.equal} onClick={calculate}>=</button>

          <button style={styles.zero} onClick={() => handleClick("0")}>0</button>
          <button style={styles.btn} onClick={() => handleClick(".")}>.</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(to right, #1d4350, #346d31)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
  },

  calculator: {
    background: "#2c2c2c",
    padding: "20px",
    borderRadius: "20px",
    width: "90%",
    maxWidth: "380px",
    boxShadow: "0px 0px 25px rgba(0,0,0,0.5)",
  },

  title: {
    color: "white",
    textAlign: "center",
    marginBottom: "15px",
    fontSize: "28px",
  },

  screen: {
    background: "#000",
    color: "#00ff88",
    fontSize: "32px",
    padding: "18px",
    borderRadius: "12px",
    textAlign: "right",
    marginBottom: "15px",
    minHeight: "50px",
    overflowX: "auto",
    wordWrap: "break-word",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "12px",
  },

  btn: {
    padding: "18px",
    fontSize: "20px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "#444",
    color: "white",
    transition: "0.2s",
  },

  equal: {
    padding: "18px",
    fontSize: "20px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "#00c853",
    color: "white",
  },

    zero: {
    gridColumn: "span 2",
    padding: "18px",
    fontSize: "20px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "#444",
    color: "white",
  },
};

export default App;