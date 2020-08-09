import React from "react";
import "./Video.scss";
import ReactPlayer from "react-player";

export default function Video() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=2YJHcGQnpAk"
      className="video"
      height="100vh"
      width="100%"
    />
  );
}
