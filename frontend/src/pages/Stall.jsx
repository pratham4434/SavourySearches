import React, { useEffect, useState } from "react";
import { Tabs } from "@mantine/core";
import Menu from "../component/stall/Menu";
import Review from "../component/stall/Review";
import Rating from "../components/rating/Rating";
import p1 from "../assets/ai.png";
import axios from "axios";
import { useParams } from "react-router-dom";
const Stall = () => {
  const { stallid } = useParams();
  const [stall, setStall] = useState({});
  const [loading, setLoading] = useState(false);

  const email = localStorage.getItem("userEmail");

  const getStallDetails = async () => {
    setLoading(true);
    const res = (
      await axios.get(
        `${process.env.REACT_APP_BACKENDURL}/poststall/${stallid}`
      )
    ).data;
    // console.log(res.menu);
    setStall(res);
    setLoading(false);
  };
  console.log(stall);
  useEffect(() => {
    getStallDetails();
  }, []);

  return (
    <>
      <div className="w-11/12 m-auto mt-5">
        {loading ? (
          <>LOADING....</>
        ) : (
          <>
            <div className="flex flex-row justify-between">
              <div className="rounded overflow-hidden shadow-lg">
                <img className="h-3/4 w-full" src={stall.stallImage} alt="" />
              </div>
              <div>
                <h1 className="text-4xl py-2">{stall.stallname}</h1>
                <h3 className="text-slate-400 text-lg">
                  Rolls,chinese,italian,Fast food,Sichan
                </h3>
                <h3 className="text-slate-300">{stall.address}</h3>
                <p className="text-slate-400">
                  <span className="text-red-600">Open - </span> {stall.openTime}{" "}
                  - {stall.closeTime}
                </p>
              </div>
              <div>
                <h1 className="border-2 border-green-600 rounded-lg p-3 bg-lime-500 text-white">
                  <span className="font-bold">Rating - </span>
                  {stall.ratings?.length === 0
                    ? 0
                    : stall.ratings?.reduce((accumulator, a) => {
                        return accumulator + a;
                      }, 0) / stall.ratings?.length}
                </h1>
              </div>
            </div>
            <div></div>

            <div className="m-5">
              <Tabs color="teal" defaultValue="first">
                <Tabs.List>
                  <Tabs.Tab value="first" className="text-2xl">
                    Menu
                  </Tabs.Tab>
                  <Tabs.Tab value="second" className="text-2xl">
                    Photos
                  </Tabs.Tab>
                  <Tabs.Tab value="third" className="text-2xl">
                    Reviews
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="first" pt="xs">
                  <Menu enlister={stall.postedBy} menuUrl={""} />
                </Tabs.Panel>

                <Tabs.Panel value="second" pt="xs">
                  <div className="flex flex-row flex-wrap">
                    {stall.foodImage?.map((val, index) => {
                      return (
                        <img
                          className="w-1/4 h-auto rounded-lg drop-shadow-lg m-5"
                          src={val}
                          alt=""
                          key={index}
                        />
                      );
                    })}
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="third" pt="xs">
                  <Review email={email} />
                </Tabs.Panel>
              </Tabs>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Stall;
