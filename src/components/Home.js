import React from "react";

function Home(props) {
  // console.log(props.info)
  return (
    <div id="home">
      <h1 style = {{color: props.info.color}}>
        {props.info.name} is a Web Developer from {props.info.city}
      </h1>
    </div>
  );
}

export default Home;
