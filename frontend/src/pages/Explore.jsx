import React, { useRef, useState, useCallback } from "react";
import Map, { GeolocateControl, FullscreenControl, Marker } from "react-map-gl";
import Icon from "../assets/marker.png";
import "mapbox-gl/dist/mapbox-gl.css";
import { AiFillStar } from "react-icons/ai";

const stores = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [88.403088, 22.513429],
      },
      properties: {
        description:
          '<strong><a href="http://www.truckeroodc.com/www/" target="_blank">Food Stall</a></strong><p> Rating: 3.6</p>',
        // icon: "bar",
        name: "Maggie wala",
        address: "Ruby General Hospital, Ananadpur, Kolkata",
        distance: 0,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [88.441464, 22.694254],
      },
      properties: {
        description:
          '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
        // icon: "music",
        name: "Rohit Tea Stall",
        address: "Acropolis Mall, Kasba, Rajdnaga",
        distance: 0,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [88.501464, 22.674254],
      },
      properties: {
        description:
          '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
        // icon: "music",
        name: "Rohit Tea Stall",
        address: "Acropolis Mall, Kasba, Rajdnaga",
        distance: 0,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [88.701464, 22.375254],
      },
      properties: {
        description:
          '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
        // icon: "music",
        name: "Rohit Tea Stall",
        address: "Acropolis Mall, Kasba, Rajdnaga",
        distance: 0,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [88.901564, 22.074254],
      },
      properties: {
        description:
          '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
        // icon: "music",
        name: "Rohit Tea Stall",
        address: "Acropolis Mall, Kasba, Rajdnaga",
        distance: 0,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [88.401404, 22.774254],
      },
      properties: {
        description:
          '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
        // icon: "music",
        name: "Rohit Tea Stall",
        address: "Acropolis Mall, Kasba, Rajdnaga",
        distance: 0,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [88.402464, 22.574254],
      },
      properties: {
        description:
          '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
        // icon: "music",
        name: "Rohit Tea Stall",
        address: "Acropolis Mall, Kasba, Rajdnaga",
        distance: 0,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [88.401664, 22.574254],
      },
      properties: {
        description:
          '<strong><a href="#" target="_blank">Food Stall</a></strong><p> Rating: 4.6</p>',
        // icon: "music",
        name: "Rohit Tea Stall",
        address: "Acropolis Mall, Kasba, Rajdnaga",
        distance: 0,
      },
    },
  ],
};

const Explore = () => {
  const [lng, setLng] = useState(88.403088);
  const [lat, setLat] = useState(22.513429);
  const [zoom, setZoom] = useState(10);
  // let mapRef = useRef(undefined);
  // let map = mapRef.current;

  // function flyToStore(markerInstance) {
  //   console.log(map);
  //   if (!map) {
  //     return;
  //   }
  //   map.flyTo({
  //     center: markerInstance.geometry.coordinates,
  //     zoom: 15,
  //   });
  // }

  const mapRef = useRef();

  const onSelect = useCallback(({ longitude, latitude }) => {



    console.log(longitude, latitude);
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 1500,
      zoom: 15,
    });
    console.log(mapRef.current);
  }, []);

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    var ans = Math.round(d * 100) / 100;
    // console.log("Distance in meters " + d * 1000);
    return ans;
  }
  return (
    <>
      {/* <Navbar /> */}
      <div class=" bg-black w-full flex justify-around">
        <div class="bg-slate-200 w-1/3 h-screen flex flex-col shadow-xl overflow-y-scroll">
          <div class="bg-white p-5 rounded-lg w-full mb-2 h-fit flex justify-center font-semibold text-xl sticky top-0 shadow-xl">
            Nearby Stalls
          </div>
          {stores.features.map((store) => (
            <div class="bg-white p-5 rounded-lg w-full h-fit border-slate-400 border-opacity-50 mb-2 shadow-md ">
              <div class="flex justify-between">
                <span
                  class="font-semibold text-lg cursor-pointer hover:text-black text-slate-600"
                  onClick={() =>
                    onSelect({
                      longitude: store.geometry.coordinates[0],
                      latitude: store.geometry.coordinates[1],
                    })
                  }
                  // onClick={() => flyToStore(store)}
                >
                  {store.properties.name}{" "}
                </span>
                <div className="font-semibold flex flex-row items-center text-[#24963F] hover:scale-105">
                  <span className="m-1">4.5 </span>
                  <AiFillStar className="" />
                </div>
              </div>
              <div class="text-base text-slate-500">
                {store.properties.address}{" "}
              </div>
              <div class="text-sm font-medium text-slate-500">
                {getDistanceFromLatLonInKm(
                  lat,
                  lng,
                  store.geometry.coordinates[1],
                  store.geometry.coordinates[0]
                )}{" "}
                km away from your location
              </div>
              <span className="flex">
                <a class="text-blue-600 hover:text-blue-800 flex items-center mt-5">
                  Get Directions
                </a>
                <a
                  href="#"
                  class="text-red-600 hover:text-red-800 flex items-center mt-5 ml-2"
                  
                >
                  More Info
                </a>
              </span>
            </div>
          ))}
        </div>
        <div class="bg-slate-700 w-2/3 p-2">
          <div className="w-full h-full">
            <Map
              ref={mapRef}
              mapboxAccessToken="pk.eyJ1Ijoic2ltcGxlc29udTk4IiwiYSI6ImNsN3UxZzlhMjBvbWozcGxldTVheDFkdXMifQ.kdwiGRrDf_iMhE3r-V7kgw"
              initialViewState={{
                longitude: lng,
                latitude: lat,
                zoom: zoom,
              }}
              // style={{ width: 1000, height: 1000 }}
              className="w-full h-full"
              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              {stores.features.map((store) => (
                <Marker
                  longitude={store.geometry.coordinates[0]}
                  latitude={store.geometry.coordinates[1]}
                  anchor="bottom"
                  // offset={PointLike}
                >
                  <img src={Icon} />
                </Marker>
              ))}

              <GeolocateControl />
              <FullscreenControl />
            </Map>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
