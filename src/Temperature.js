import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Temperature.css";



export default function Temperature() {
  return (
    <div className="row">
      <div className="col-5">
        <span id="temperature">25</span>
        <span id="units">
          <a href="#" id="celsius">
            {" "}
            °C |
          </a>{" "}
          <a href="#" id="fahrenheit">
            °F
          </a>
        </span>
      </div>
      <div className="col-7">
        <img id="icon" src="" width="75 px" />
        <span id="description">Sunny</span>
      </div>
    </div>
  );
}
