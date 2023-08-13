import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Uploadreel = () => {
  const reelRef = useRef();
  const captionRef = useRef();
  const navigate = useNavigate();
  const { userEmail } = useContext(AuthContext);
  console.log(userEmail);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(reelRef.current.files[0]);
    console.log(captionRef.current.value);
    const data = new FormData();
    data.append("reel", reelRef.current.files[0]);
    data.append("caption", captionRef.current.value);
    data.append("postedBy", userEmail);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BACKENDURL}/postreel`,
      data: data,
    };
    const result = await axios.request(config);
    console.log(result.data);
    if (result.status === 200) {
      navigate("/reel");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <>
      <div className="w-4/5 m-auto mt-5">
        <form>
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                name="reel"
                ref={reelRef}
              />
            </label>
          </div>
          {/* caption
           */}
          <div class="mt-4">
            <div class="flex justify-between">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                caption
              </label>
              {/* button */}
            </div>

            <input
              class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              name="caption"
              ref={captionRef}
            />
          </div>
          {/* button */}
          <div class="mt-6">
            <button
              class="w-full bg-yellow-500 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-head-color rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              onClick={(e) => handleSubmit(e)}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Uploadreel;
