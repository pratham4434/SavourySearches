import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useAuth0 } from "@auth0/auth0-react";

import "./Footer.css";
import axios from "axios";

export default function Footer({
  channel,
  song,
  likes,
  comment,
  shares,
  videoUrl,
  id,
}) {
  const [Follow, setFollow] = useState(false);
  const [email, setEmail] = useState("");
  const { user } = useAuth0();
  const [like, setLike] = useState(false);
  const [share, setShare] = useState(false);

  // let config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  const likeClicked = async () => {
    const email = localStorage.getItem("userEmail");
    const response = await axios.put(
      `${process.env.REACT_APP_BACKENDURL}/postreel/${id}/like`,
      { email }
    );
    if (response.data === "Post liked") {
      setLike(true);
    } else if (response.data === "Post disliked") {
      setLike(false);
    }
    console.log("the response", response);
  };

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (likes.includes(email)) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, []);

  return (
    <div className="video-footer">
      {/*  */}
      <div className="footer-buttons">
        <div className="video-text">
          <h2 className="reels_id-name">
            {channel} 🔴 ({song})
            {/* {!Follow ? (
            <button
              onClick={() => {
                setFollow(true);
              }}
              className="buttons"
            >
              <h4 style={{ color: "white" }}>Follow</h4>
            </button>
          ) : (
            <button className="buttons-following">
              <h4 style={{ color: "white" }}>Following</h4>
            </button>
          )} */}
          </h2>
        </div>
        <div className="flex-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={likeClicked}
            style={{
              fill: like ? "blue" : "white",
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-11 h-11"
          >
            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-11 h-11 other_css"
            onClick={() => {
              setShare(true);
            }}
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>

          {shares}
          {share ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Modal Title</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShare(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div>
                        <label
                          type="text"
                          id="first_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {videoUrl}
                        </label>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShare(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
