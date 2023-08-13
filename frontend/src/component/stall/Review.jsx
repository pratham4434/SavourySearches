import React, { useState, useEffect } from "react";
import { Avatar } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { Button } from "@mantine/core";
import axios from "axios";
import { useParams } from "react-router-dom";

const Review = ({ email }) => {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const { stallid } = useParams();

  const getData = async () => {
    const data = (
      await axios.get(
        `${process.env.REACT_APP_BACKENDURL}/poststall/${stallid}`
      )
    ).data;
    setAllComments([...data.comments]);
    // return data;
  };
  useEffect(() => {
    getData();
  }, []);

  const send = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKENDURL}/poststall/${stallid}/comments`,
      {
        comment,
        email,
      }
    );
    console.log(res);
    getData();
  };

  console.log(allComments);
  return (
    <>
      <div>
        {allComments.map((comment, index) => (
          <div
            className="flex bg-white shadow-lg rounded-lg mx-4 max-w-fit "
            key={index}
          >
            <div className="flex items-start px-4 py-6">
              <img
                className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
              <div className="">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                    {comment.email}
                  </h2>
                </div>
                <p className="text-gray-700 text-sm">4.2 star</p>
                <p className="mt-3 text-gray-700 text-sm">{comment.comment}</p>
              </div>
            </div>
          </div>
        ))}

        {/* comment */}
        <div className="flex flex-row mt-5">
          <Textarea
            placeholder="Your comment"
            label="Your comment"
            withAsterisk
            className="w-1/2 rounded-lg"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="mt-10 ml-5">
            <svg
              onClick={send}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 mb-3 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
