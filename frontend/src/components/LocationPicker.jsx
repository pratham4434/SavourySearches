import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import "./map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const LocationPicker = ({ lngLat, setLngLat }) => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(88.403088);
  const [lat, setLat] = useState(22.513429);
  const [zoom, setZoom] = useState(10);

  // console.log(lng, lat);

  let mapRef = useRef(undefined);
  let map = mapRef.current;

  // ruby - 88.403088,22.513429

  // Initialize map when component mounts
  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    map = mapRef.current;

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

    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([lng, lat])
      .addTo(map);

    function onDragEnd() {
      const lngLat = marker.getLngLat();
      setLngLat(lngLat);
    }

    marker.on("dragend", onDragEnd);

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div class="h-screen flex w-full bg-black">
        <div className="h-full w-full">
          {/* <div>
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div> */}
          <div className="h-full w-full" ref={mapContainerRef} />
        </div>
      </div>
    </>
  );
};

export default LocationPicker;
