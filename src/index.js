import React from "react";
import ReactDOM from "react-dom";
import Typing from "react-typing-animation";
import Typist from "react-typist";
import Typed from "react-typed";
import "./styles.css";
import Button from "@material-ui/core/Button";
import GlitchEffect from "react-glitch-effect";

function App() {
  return (
    <div
      className="App"
      style={{
        color: "#fff",
        backgroundColor: "#000",
        height: "100vh",
        fontSize: 23,
        fontFamily: "monospace",
        padding: 100
      }}
    >
      <h1>Typing Effect</h1>
      <h2>react-typing-animation</h2>

      <div style={{ color: "#0f0" }}>
        <Typing speed={50}>
          This line will be typed at 50ms/character,
          <Typing.Speed ms={20} />
          then this will be typed at 20ms/character.
        </Typing>

        <Typing>
          <span>This span will get typed, then erased.</span>
          <Typing.Backspace count={20} />
        </Typing>

        <Typing>
          <span>This line will stay.</span>
          <span>This line will get instantly removed after a 500 ms delay</span>
          <Typing.Reset count={1} delay={500} />
        </Typing>
      </div>
      <h2>react-typist</h2>
      <div style={{ color: "#00f" }}>
        <Typist>
          <p> First Sentence </p>
          <Typist.Delay ms={20} />
          This won't be animated until 20ms after the first sentenced is
          rendered
        </Typist>

        <Typist>
          <span> First Sentence </span>
          <Typist.Backspace count={9} delay={200} />
          <span> Phrase </span>
        </Typist>
      </div>

      <h2>react-typed</h2>

      <div style={{ color: "#f00" }}>
        <GlitchEffect>
          <h1>НАЧАЛАСЬ</h1>

          <Typed
            strings={["Get a Job 👨‍💻", "Get a Car 🚗", "Get a TV 📺"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </GlitchEffect>
        <br />
        <br />
        <Typed strings={["Here you can find anything"]} typeSpeed={40} />
        <br />

        <Typed
          strings={[
            "Search for answers",
            "Search for life",
            "Search for purpose"
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input type="text" />
        </Typed>

        <div>
          <Typed
            strings={["Hello Friend ", "Long time no see"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
