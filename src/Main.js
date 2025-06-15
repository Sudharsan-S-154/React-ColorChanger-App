import React, { useState } from "react";

function Main({ colorName, setColorName }) {
  let [toggleColor, setToogleColor] = useState("white");

  let [hexColor,setHexColor] = useState("");

  function handleToogle() {
    toggleColor === "white" ? setToogleColor("black") : setToogleColor("white");
  }

  function colorNameToHex(colorName) {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = colorName;
    return ctx.fillStyle;
  }

  return (
    <main className="colorInfo">
      <section
        className="color"
        style={{ backgroundColor: colorName, color: toggleColor }}
      >
        <div className="colorByName">{colorName}</div>
        <div className="colorByHex">{hexColor}</div>
      </section>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input
          type="text"
          className="colorName"
          placeholder="Type any color.."
          autoFocus
          value={colorName}
          onChange={(e) => {
            const newColor = e.target.value;
            setColorName(newColor);
            setHexColor(()=>
                colorNameToHex(newColor))
          }
        }
        />
      </form>
      <button className="toogle" onClick={handleToogle}>
        Toggle Text Color
      </button>
    </main>
  );
}

export default Main;
