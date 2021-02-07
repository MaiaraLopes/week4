import React from "react";
import "./Description.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Description() {
  return (
    <div>
      <h4 id="date">17 January</h4>
      <div className="row">
        <div className="col-4">
          <span id="min-temp">17</span>° | <span id="max-temp">28</span>°
        </div>
        <div className="col-4">
          Wind: <span id="wind">12</span> km/h
        </div>
        <div className="col-4">
          Humidity: <span id="humidity">75</span>%
        </div>
      </div>
    </div>
  );
}
