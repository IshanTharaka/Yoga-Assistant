import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="heading-container">
        <h1 className="aboutus-heading1">About</h1>
        <h1 className="aboutus-heading2">Us</h1>
      </div>

      <div className="about-main">
        <p className="about-content">
          This is a deep learning model which act as a personal Yoga Instructor.
          Here, Real Time Human Interactions are estimated in order to
          monitor the correctness of Yoga postures. We have developed this as
          our final project of CSC 317 1.5 Human Computer Interaction.
        </p>
        <p className="about-content">
          When it comes to our project, at first it predicts the coordinates of
          different parts of the body and using another classification model it
          classifies the poses( There are seven different poses in our syetem).
          If a real time pose of a user is detected by the system with more than
          95% of probability, the system will make the virtual skeleton green to
          inform the correctness of the relevant pose. Here in order to predict
          the body coordinates and to classify the yoga poses, we have used
          Tensorflow pretrained Movenet Model. We have trained the model in
          Python because of TensorflowJs we can leverage the support of the
          browser. Therefore keras/ tensorflow model has been converted
          into tensorflowJs.
        </p>
        <p className="about-content">
          The code is available on the GitHub -{" "}
          <a href="https://github.com/IshanTharaka/Yoga-Assistant">
            https://github.com/IshanTharaka/Yoga-Assistant
          </a>
        </p>
        <div className="developer-info">
          <h4>About Developers</h4>
          <p className="about-content">
            Name      :- Ishan Tharaka  <br></br>
            Index No  :- AS2019550 <br></br>  <br></br>

            Name      :- Vihanga Perera   <br></br>
            Index No  :- AS2019489  
          </p>
        </div>
      </div>
    </div>
  );
}
