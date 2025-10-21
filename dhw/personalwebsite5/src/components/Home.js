import React, { useState } from "react";
import Navbar from "./Navbar"

function Home() {
  const [bgColor, setBgColor] = useState("teal");

  const buttonClick = () => {
    document.getElementById("demo").innerHTML =
      "Hello from React! I love this page!";
    setBgColor("lightblue");
  };

  return (
  <div>
    <div><Navbar/></div>
    <div
      className="card p-3 mb-4"
      style={{
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <h1>Home</h1>
      <p>This is the Home Page</p>
      <button className="btn btn-primary" onClick={buttonClick}>
        Show Enthusiasm
      </button>
      <p id="demo">Click the button to see my enthusiasm!</p>
    </div>
  </div>
  );
}

export default Home;
