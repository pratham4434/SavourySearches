import React, { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from "../context/AuthContext";
import p1 from "../assets/ai.png";
import Uploadreel from "../component/upload/Uploadreel";

const Profile = () => {
  const assets = [
    {
      url: p1,
    },
    {
      url: p1,
    },
    {
      url: p1,
    },
    {
      url: p1,
    },
    {
      url: p1,
    },
  ];
  const [follow, setFollow] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [open, setOpen] = useState(false);

  const { setUserEmail } = useContext(AuthContext);
  setUserEmail(user?.email);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {open ? (
        <Uploadreel />
      ) : (
        // isAuthenticated && (
        <div>
          {/* <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p> */}
          <div className=" h-auto flex justify-center items-center  my-5">
            <div className=" pb-8 shadow-xl shadow-btn-color md:w-2/4 lg:w-2/4 xl:w-2/4 w-4/5 md:h-3/5 lg:h-3/5 xl:h-3/5 h-1/4 rounded-lg bg-card-color">
              {/* heading edit and personal details */}
              <div className="flex justify-between m-4 ">
                <h3 className="font-semibold underline underline-offset-8 ">
                  Profile details
                </h3>
                <h3
                  onClick={() => setOpen(true)}
                  className=" font-semibold cursor-pointer hover:underline"
                >
                  upload
                </h3>
              </div>

              {/* profile picture and name */}

              <div className="flex flex-col items-center my-4">
                <div className="w-32  md:h-32 lg:h-32 bg-cover bg-center rounded-md ">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
                    alt
                    className="cursor-pointer h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                  />
                </div>
                <h1 className="lg:text-2xl xl:text-2xl 2xl:text-2xl sm:text-xl text-lg font-bold my-3">
                  Jyotiraditya mishra
                </h1>
              </div>
              {/* peronal details heading */}
              <div className="flex justify-around">
                <button
                  type="button"
                  class="inline-flex items-center ml-5 px-5 py-2.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg"
                >
                  Following
                  <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-red-200 rounded-full">
                    2
                  </span>
                </button>
                <button
                  type="button"
                  class="inline-flex items-center ml-5 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg"
                >
                  Followers
                  <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                    5
                  </span>
                </button>
              </div>
              {/* uploaded section details */}

              <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="flex flex-wrap justify-center">
                {assets.map((list) => {
                  return (
                    <>
                      <div className="w-1/3 h-1/3 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-7">
                        <img src={list.url} />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        // ))}
      )}
    </>
  );
};

export default Profile;
