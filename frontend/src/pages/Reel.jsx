import React, { useEffect } from "react";
import "./reel.css";
import Video from "../component/Video";
import videos1 from "../data/videos/vid1.mp4";
import videos2 from "../data/videos/vid2.mp4";

import videos3 from "../data/videos/vid3.mp4";

const Reel = () => {
  const data = [
    {
      channel: "aaa",
      song: "song-1",
      url: videos1,
      likes: "32",
      comment: "2",
      shares: "23",
    },
    {
      channel: "bbb",
      song: "song-2",
      url: videos2,
      likes: "3",
      comment: "22",
      shares: "23",
    },
    {
      channel: "ccc",
      song: "song-3",
      url: videos3,
      likes: "89",
      comment: "23",
      shares: "29",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".videos");
    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);
  const callback = (entries) => {
    entries.forEach((entry) => {
      const e = entry.target.childNodes[0];
      const videoElement = e.childNodes[0];
      console.log(videoElement)
      videoElement.play().then(() => {
        if (!videoElement.paused && !entry.isIntersecting) {
          videoElement.pause();
        }
      });
    });
  };
  let observer = new IntersectionObserver(callback, { threshold: 0.6 });

  return (
    <>
      <div className="App">
        <center>
          {/* <div className="logo">
          <img alt="logo" src={Logo} className="insta-logo" />
        </div>
        <h3>Reel</h3> */}
          {/*  */}

          <div className="video-container" id="video-container">
            {/*  */}

            {data.map((list, i) => (
              <div className="videos">
                <Video
                  key={i}
                  channel={list.channel}
                  song={list.song}
                  url={list.url}
                  likes={list.likes}
                  comment={list.comment}
                  shares={list.shares}
                />
              </div>
            ))}

            {/*  */}
          </div>
        </center>
      </div>
    </>
  );
};

export default Reel;
