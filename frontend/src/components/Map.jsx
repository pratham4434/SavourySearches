import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./map.css";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import Navbar from "./navbar/Navbar";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

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

// const res = await axios.get("http://localhost:3000/api/stalls");
// console.log(res);

// const fetchData = async () => {
//   const res = await axios.get("http://localhost:3000/api/stalls");
//   console.log(res);
//   // return res;
// };

/* Assign a unique ID to each store */
stores.features.forEach(function (store, i) {
  store.properties.id = i;
});

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(88.403088);
  const [lat, setLat] = useState(22.513429);
  const [zoom, setZoom] = useState(10);

  // console.log(lng, lat);

  let mapRef = useRef(undefined);
  let map = mapRef.current;

  function flyToStore(markerInstance) {
    console.log(map);
    if (!map) {
      return;
    }
    map.flyTo({
      center: markerInstance.geometry.coordinates,
      zoom: 15,
    });
  }

  // ruby - 88.403088,22.513429
  //  Get user location
  if (window.navigator.geolocation) {
    // Geolocation available
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      var crd = pos.coords;

      // const userLocation = [crd.longitude, crd.latitude];
      setLng(crd.longitude);
      setLat(crd.latitude);

      // console.log("Your current position is:");
      // console.log(userLocation);
      // console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  } else {
    console.log("Please enable Geolocation to use this app.");
  }

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

  // Initialize map when component mounts
  useEffect(() => {
    // fetchData();
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    map = mapRef.current;

    function addMarkers() {
      /* For each feature in the GeoJSON object above: */
      for (const marker of stores.features) {
        /* Create a div element for the marker. */
        const el = document.createElement("div");
        /* Assign a unique `id` to the marker. */
        el.id = `marker-${marker.properties.id}`;
        /* Assign the `marker` class to each marker for styling. */
        el.className = "marker";

        el.addEventListener("click", (e) => {
          flyToStore(marker);
          console.log(marker);

          // while (Math.abs(e.lngLat.lng - marker.geometry.coordinates) > 180) {
          //   marker.geometry.coordinates +=
          //     e.lngLat.lng > marker.geometry.coordinates ? 360 : -360;
          // }

          new mapboxgl.Popup()
            .setLngLat(marker.geometry.coordinates)
            .setHTML(marker.properties.description)
            .addTo(map);
        });

        /**
         * Create a marker using the div element
         * defined above and add it to the map.
         **/
        new mapboxgl.Marker(el, { offset: [0, -23] })
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      }
    }

    addMarkers();

    // console.log(map);

    // Add navigation control (the +/- zoom buttons)
    // map.addControl(new mapboxgl.NavigationControl(), 'top-left');

    map.on("click", (event) => {
      /* Determine if a feature in the "locations" layer exists at that point. */
      const features = map.queryRenderedFeatures(event.point, {
        layers: ["locations"],
      });

      /* If it does not exist, return */
      if (!features.length) return;

      const clickedPoint = features[0];

      /* Fly to the point */
      flyToStore(clickedPoint);

      /* Close all other popups and display popup for clicked store */
      //   createPopUp(clickedPoint);

      /* Highlight listing in sidebar (and remove highlight for all other listings) */
      const activeItem = document.getElementsByClassName("active");
      if (activeItem[0]) {
        activeItem[0].classList.remove("active");
      }
      const listing = document.getElementById(
        `listing-${clickedPoint.properties.id}`
      );
      listing.classList.add("active");
    });

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Add geocoder control to the map.

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: {
        color: "orange",
      },
      flyTo: {
        bearing: 0, // Control the flight curve, making it move slowly and zoom out almost completely before starting to pan.
        speed: 0.9, // Make the flying slow.
        curve: 1, // Change the speed at which it zooms out.
        easing: function (t) {
          return t;
        },
      },
    });
    map.addControl(geocoder, "top-left");

    map.on("load", () => {
      map.addSource("places", {
        type: "geojson",
        data: stores,
      });

      map.on("mouseenter", "places", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "places", () => {
        map.getCanvas().style.cursor = "";
      });

      // Add a layer showing the places.
      // map.addLayer({
      //   id: "places",
      //   type: "symbol",
      //   source: "places",
      //   layout: {
      //     "icon-image": ["get", "icon"],
      //     "icon-allow-overlap": true,
      //   },
      // });

      // map.on("click", "places", (e) => {
      //   // Copy coordinates array.
      //   const coordinates = e.features[0].geometry.coordinates.slice();
      //   const description = e.features[0].properties.description;

      //   flyToStore(e.features[0]);

      //   // Ensure that if the map is zoomed out such that multiple
      //   // copies of the feature are visible, the popup appears
      //   // over the copy being pointed to.
      //   while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      // }

      // new mapboxgl.Popup()
      //   .setLngLat(coordinates)
      //   .setHTML(description)
      //   .addTo(map);
      // });

      // Change the cursor to a pointer when the mouse is over the places layer.

      // Add an image to use as a custom marker
      // map.loadImage(
      //   "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
      //   (error, image) => {
      //     if (error) throw error;
      //     map.addImage("custom-marker", image);
      //     // Add a GeoJSON source with 2 points
      //     map.addSource("points", {
      //       type: "geojson",
      //       data: {
      //         type: "FeatureCollection",
      //         features: [
      //           {
      //             // feature for Mapbox DC
      //             type: "Feature",
      //             geometry: {
      //               type: "Point",
      //               coordinates: [88.403088,
      //                 22.513429],
      //             },
      //             properties: {
      //               title: "Your Location",
      //             },
      //           },
      //         ],
      //       },
      //     });

      //     // Add a symbol layer
      //     map.addLayer({
      //       id: "points",
      //       type: "symbol",
      //       source: "points",
      //       layout: {
      //         "icon-image": "custom-marker",
      //         // get the title name from the source's "title" property
      //         "text-field": ["get", "title"],
      //         "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      //         "text-offset": [0, 1.25],
      //         "text-anchor": "top",
      //       },
      //     });
      //   }
      // );
    });

    // Distance calc

    // for (const store of stores.features) {
    //   // store.properties.distance =
    //   // console.log(getDistanceFromLatLonInKm(lat, lng, lat2, lon2));
    //   // stores.features.sort((a, b) => {
    //   //   if (a.properties.distance > b.properties.distance) {
    //   //     return 1;
    //   //   }
    //   //   if (a.properties.distance < b.properties.distance) {
    //   //     return -1;
    //   //   }
    //   //   return 0; // a must be equal to b
    //   // });
    //   // if (store.properties.distance) {
    //   //   const roundedDistance =
    //   //     Math.round(store.properties.distance * 100) / 100;
    //   //   // console.log(roundedDistance);
    //   // }
    // }

    // geocoder.on("result", (event) => {
    //   const searchResult = event.result.geometry;
    //   // console.log(searchResult);
    //   // Code for the next step will go here

    // });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
     

      <div class="h-screen flex w-full bg-black">
        <div class="bg-slate-200 w-1/3 p-2 flex flex-col shadow-xl overflow-y-scroll">
          <div class="bg-white p-5 rounded-lg w-full mb-2 h-fit flex justify-center font-semibold text-xl sticky top-0 shadow-xl">
            Nearby Stalls
          </div>
          {/* Card */}
          {stores.features.map((store) => (
            <div class="bg-white p-5 rounded-lg w-full h-fit border-slate-400 border-opacity-50 mb-2 shadow-md ">
              <div class="flex justify-between">
                <span
                  class="font-semibold text-lg cursor-pointer hover:text-black text-slate-600"
                  onClick={() => flyToStore(store)}
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
                <a
                  href="#"
                  class="text-blue-600 hover:text-blue-800 flex items-center mt-5"
                >
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
        <div class="bg-slate-700 w-2/3">
          <div className="h-full w-full">
            {/* <div>
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div> */}
            <div className="h-full w-full" ref={mapContainerRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
