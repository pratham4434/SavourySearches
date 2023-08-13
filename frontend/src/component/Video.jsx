import React, { useRef, useEffect, useState } from "react";
import ReactDom from "react-dom";
import Footer from "./Footer/Footer";
// import Video1 from './Video1';
import "./Video.css";
const Video = ({ channel, song, url, likes, comment, shares, id }) => {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);

  const vidRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    e.target.muted = !e.target.muted;
  };
  const handlescroll = (e) => {
    let next = ReactDom.findDOMNode(e.target).parentNode.nextSibling;
    if (next) {
      next.scrollIntoView();
      e.target.muted = true;
    }
  };
  return (
    <>
      <div className="video-cards">
        {/* <Header /> */}
        <video
          onClick={handleClick}
          className="video-player"
          ref={vidRef}
          src={url}
          muted="muted"
          loop
          autoPlay
          onEnded={handlescroll}
        />
        <Footer
          channel={channel}
          song={song}
          likes={likes}
          shares={shares}
          videoUrl={url}
          id={id}
        />
      </div>
    </>
  );
};

export default Video;
