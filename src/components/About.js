import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I play basketball.Getting into the NBA is my life long dream. I also love music</p>
    <img src={image} alt="I made this" />
  </div>
  )
}

export default About;
