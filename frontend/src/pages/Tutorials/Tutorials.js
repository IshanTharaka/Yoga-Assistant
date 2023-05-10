import React from "react";

import "./Tutorials.css";

import { tutorials, fixCamera } from "../../utils/data";
import { div } from "@tensorflow/tfjs";

export default function Tutorials() {
  return (
    <div className="tutorials-container">
      <div className="main-conatiner">
        <div className="heading-container">
          <h1 className="tutorials-heading1">Basic</h1>
          <h1 className="tutorials-heading2">Tutorials</h1>
        </div>

        <div className="tutorials-content-container">
          {tutorials.map((tutorial, stepNum) => (
            <div className="step-container">
              <p className="topic">Step {stepNum + 1}</p>
              <p className="tutorials-content">{tutorial}</p>
            </div>
          ))}
        </div>

        <div className="heading-container">
          <h1 className="tutorials-heading1">Camera</h1>
          <h1 className="tutorials-heading2">Not Working?</h1>
        </div>
        <div className="tutorials-content-container">
          {fixCamera.map((points, stepNum) => (
            <div className="step-container">
              <p className="topic">Solution {stepNum + 1}</p>
              <p className="tutorials-content">{points}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
