import React from "react";
import Form from "./Form";
import Temperature from "./Temperature";
import Description from "./Description";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="weather-app">
            <Form />
            <Temperature />
            <Description />
          </div>
          <small className="footer"><a href="https://github.com/MaiaraLopes/weather-react" target="_blank">Open-source code</a> by Maiara Lopes</small>
        </div>
      </div>
    </div>
  );
}
