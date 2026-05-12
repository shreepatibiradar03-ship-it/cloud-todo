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