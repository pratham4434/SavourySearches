import React from 'react'
import { Tabs } from "@mantine/core";
import Menu from '../component/stall/Menu';
import Review from '../component/stall/Review';
import p1 from "../assets/ai.png";
const Stall = () => {
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
  return (
    <>
    <div className="w-11/12 m-auto mt-5">
      <div className="flex flex-row justify-between">
      <div className='rounded overflow-hidden shadow-lg' >
        <img className='h-3/4 w-full' src="https://media-cdn.tripadvisor.com/media/photo-s/1c/5b/0a/7f/best-burger-van.jpg" alt="" />
      </div>
        <div>
          <h1 className="text-4xl py-2">Hot Food</h1>
          <h3 className="text-slate-400 text-lg">
            Rolls,chinese,italian,Fast food,Sichan
          </h3>
          <h3 className="text-slate-300">Park street,kolkata</h3>
          <p className="text-slate-400">
            <span className="text-red-600">Open - </span> 11am - 3am
          </p>
        </div>
        <div>
          <h1 className="border-2 border-green-600 rounded-lg p-3 bg-lime-500 text-white">
            <span className="font-bold">Rating - </span>4.5
          </h1>
        </div>
      </div>
      <div></div>

      {/* tabs */}

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
            <Menu />
          </Tabs.Panel>

          <Tabs.Panel value="second" pt="xs">
           <div className='flex flex-row flex-wrap'>
           {assets.map((val, index) => {
              return (
                <img
                  className="w-1/4 h-auto rounded-lg drop-shadow-lg m-5"
                  src={val.url}
                  alt=""
                  key={index}
                />
              );
            })}
           </div>
          </Tabs.Panel>
          <Tabs.Panel value="third" pt="xs">
            <Review />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  </>
  )
}

export default Stall