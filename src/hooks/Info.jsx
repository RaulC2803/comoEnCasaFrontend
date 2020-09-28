import React from "react";

import "./style/Info.css";

import Video from "../assets/videos/comoEnCasa Pitch video.mp4";

const Info = () => (
  <div className="Container">
    <h1 className="titulo">ComoEnCasa</h1>
    <div className="video">
    <h2 className="subtitulo">Sé parte de una comunidad esperanzadora y de nuevos retos</h2>
      <video src={Video} controls></video>
    </div>
  </div>
);

export default Info;
