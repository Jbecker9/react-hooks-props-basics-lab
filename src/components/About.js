import React from "react";
import Links from './Links';

function About(props) {
  console.log(`Second here: ${props}`)

  return (
    <div id="about">
      <h2>About Me</h2>
      <p> </p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* <Links gitHub = {props.info} />  */}
    </div>
  );
}

export default About;
