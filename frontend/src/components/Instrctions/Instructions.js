import React, { useState } from "react";

import { poseInstructions } from "../../utils/data";

import { poseImages } from "../../utils/pose_images";

import "./Instructions.css";

export default function Instructions({ currentPose }) {
  const [instructions, setInsntructions] = useState(poseInstructions);

  return (
    <div className="instructions-container">
      <div className="instructions">
        <div>
        <h3 className="title">Instructions</h3>

        </div>

       <div className="instructions-list">
       <ol>
          {instructions[currentPose].map((instruction) => {
            return <li className="instruction">{instruction}</li>;
          })}
        </ol>
       </div>
        
      </div>

      <div>
        <h3 className="title">Pose</h3>

        <img className="pose-demo-img" src={poseImages[currentPose]} />
      </div>
    </div>
  );
}
