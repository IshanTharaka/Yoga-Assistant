import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="split left">
        <div className="centered">
          <div className="home-heading">
            <h1 id="head1">Yoga</h1>
            <h1>Assistant</h1>
          </div>

          <div id="left-text-container">
            <div className="text-container">
              <h2 id="text1">Practice At Home</h2>
              <h2>With Our Yoga Assistant</h2>
            </div>
            <h6>Yoga trainings to nourish your body, mind and soul.</h6>

            <div className="btn-section">
              <Link to="/start">
                <button className="btn btn-primary" id='start-btn'>
                  Let's Start
                </button>
              </Link>

              <Link to="/tutorials">
                <button className="btn btn-dark" id="tutorial-btn">
                  Tutorials
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="split right">
        <div className="centered"></div>
        <div className="btn-section headlinks">
          <Link to="/about">
            <button id="about-btn">About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
