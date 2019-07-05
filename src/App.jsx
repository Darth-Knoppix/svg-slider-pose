import React, { useState } from "react";
import Slider from "./Slider";

function App() {
  const [value, setValue] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: '100vh'
      }}
    >
      <div style={{ display: "flex", alignItems: "center", width: '13rem' }}>
        <Slider
          rightColour="#E1EDEB"
          leftColour="#5285CC"
          onChange={setValue}
          knobColour="#7DD2DB"
        />
        <h1
          style={{
            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI"',
            opacity: value / 100,
            marginLeft: "1rem"
          }}
        >
          {value}
        </h1>
      </div>
    </div>
  );
}

export default App;
