import React from "react";
import "./Video.scss";
import ReactPlayer from "react-player";
import MoreVideo from "./MoreVideo/Morevideo";

export default function Video() {
  return (
    <div>
      <MoreVideo />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=2YJHcGQnpAk"
        className="video"
        height="88vh"
        width="100%"
      />
    </div>
  );
}
