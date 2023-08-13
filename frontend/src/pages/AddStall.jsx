import React, { useState, useRef, useContext } from "react";
import LocationPicker from "../components/LocationPicker";
import { AuthContext } from "../context/AuthContext";
import { MultiSelect } from "@mantine/core";
import axios from "axios";

const AddStall = () => {
  // const [searchValue, onSearchChange] = useState("");
  const userEmail = localStorage.getItem("userEmail");
  const [shopPicIsUploaded, setShopPicIsUploaded] = useState(false);
  const [foodPicIsUploaded, setFoodPicIsUploaded] = useState(false);
  const [menuPicIsUploaded, setMenuPicIsUploaded] = useState(false);

  const [lngLat, setLngLat] = useState([]);
  const [shopImageUrls, setShopImageUrls] = useState([]);
  const [foodImageUrls, setFoodImageUrls] = useState([]);
  const [menuImageUrls, setMenuImageUrls] = useState([]);

  const stallNameRef = useRef();
  const addressRef = useRef();
  const ownerNameRef = useRef();
  const openingTimeRef = useRef();
  const closingTimeRef = useRef();
  const shopImageRef = useRef();
  const foodImageRef = useRef();
  const menuImageRef = useRef();

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(shopImageUrls);
    console.log(foodImageUrls);
    console.log(menuImageUrls);

    if (
      shopImageUrls.length === 0 ||
      foodImageUrls.length === 0 ||
      menuImageUrls.length === 0
    ) {
      alert("Please upload all images");
      return;
    }

    try {
      let data = JSON.stringify({
        stallname: stallNameRef.current.value,
        address: addressRef.current.value,
        ownername: ownerNameRef.current.value,
        openTime: openingTimeRef.current.value,
        closeTime: closingTimeRef.current.value,
        menu: menuImageUrls,
        stallImage: shopImageUrls,
        foodImage: foodImageUrls,
        postedBy: userEmail,
        location: {
          lng: lngLat.lng,
          ltd: lngLat.lat,
        },
      });
      console.log("data", data);

      // let config = {
      //   method: "post",
      //   maxBodyLength: Infinity,
      //   url: `http://localhost:5000/poststall/`,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   data: data,
      // };

      await axios
        .post("http://localhost:5000/poststall/", { data })
        // .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
    // console.log(link);
  };
  const uploadImage = async (
    imageInputRef,
    setIsUploaded,
    ImageUrls,
    setImageUrls
  ) => {
    const images = imageInputRef.current.files;
    for (let i = 0; i < images.length; i++) {
      const data = new FormData();
      data.append("file", images[i]);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dxdctwwyf");
      fetch("https://api.cloudinary.com/v1_1/dxdctwwyf/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          let temp = data.url.toString();
          setImageUrls([...ImageUrls, temp]);
          // setImages([...images, data.url.toString()]);
          console.log("image", data.url);
          setIsUploaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // console.log(images);
  return (
    <>
      <div class="flex justify-center w-full max-w-sm mx-auto  overflow-hidden my-24 bg-white rounded-lg shadow-lg  lg:max-w-4xl">
        {/* <div class="hidden bg-cover lg:block lg:w-1/2" id="signup"></div> */}

        <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div class="flex justify-center mx-auto">
            <h1 className="font-bold">Savoury Searches</h1>
          </div>

          <p class="mt-3 text-xl text-center  font-semibold">
            Add your Fav Stall here !
          </p>

          {/* <a
            href="#"
            class="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg border-gray-700  hover:bg-gray-50 hover:bg-gray-600"
          ></a> */}

          {/* <div class="flex items-center justify-between mt-4"></div> */}
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Name */}
            <div class="mt-4">
              <label
                class="block mb-2 text-sm font-medium text-gray-600 "
                for="LoggingEmailAddress"
              >
                Stall Name
              </label>
              <input
                id="LoggingEmailAddress"
                name="stallname"
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  border-gray-600 focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                ref={stallNameRef}
              />
            </div>
            <div class="mt-4">
              <label
                class="block mb-2 text-sm font-medium text-gray-600 "
                for="LoggingEmailAddress"
              >
                Address
              </label>
              <input
                id="LoggingEmailAddress"
                name="address"
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   border-gray-600 focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                ref={addressRef}
              />
            </div>
            <div class="mt-4">
              <label
                class="block mb-2 text-sm font-medium text-gray-600 "
                for="LoggingEmailAddress"
              >
                Marker Location Lng:{lngLat.lng} Lat:{lngLat.lat}
                {}
              </label>
              <LocationPicker lngLat={lngLat} setLngLat={setLngLat} />
              {/* {console.log(lngLat)} */}
            </div>
            {/* owner name */}
            <div class="mt-4">
              <label
                class="block mb-2 text-sm font-medium text-gray-600 "
                for="LoggingEmailAddress"
              >
                Owner Name
              </label>
              <input
                id="LoggingEmailAddress"
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   border-gray-600 focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="ownerName"
                ref={ownerNameRef}
              />
            </div>
            {/* single shop pic */}
            <div className="mt-4">
              <label
                class="block mb-2 text-sm font-medium text-black-600 "
                for="multiple_files"
              >
                Upload your shop picture
              </label>
              <input
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   border-gray-600 focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                id="multiple_files"
                type="file"
                multiple
                accept="image/*"
                ref={shopImageRef}
              />
              {shopPicIsUploaded ? (
                <button
                  className="bg-green-700 text-white py-1 p-2 rounded-md"
                  // onClick={uploadImage}
                >
                  Uploaded
                </button>
              ) : (
                <button
                  className="bg-green-400 text-white py-1 p-2 rounded-md"
                  onClick={() =>
                    uploadImage(
                      shopImageRef,
                      setShopPicIsUploaded,
                      shopImageUrls,
                      setShopImageUrls
                    )
                  }
                >
                  Upload
                </button>
              )}
            </div>
            {/* food images shop pic */}
            <div className="mt-4">
              <label
                class="block mb-2 text-sm font-medium text-black-600 "
                for="multiple_files"
              >
                Upload food pictures
              </label>
              <input
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   border-gray-600 focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                id="multiple_files"
                type="file"
                multiple
                ref={foodImageRef}
              />
              {foodPicIsUploaded ? (
                <button
                  className="bg-green-700 text-white py-1 p-2 rounded-md"
                  // onClick={uploadImage}
                >
                  Uploaded
                </button>
              ) : (
                <button
                  className="bg-green-400 text-white py-1 p-2 rounded-md"
                  onClick={() =>
                    uploadImage(
                      foodImageRef,
                      setFoodPicIsUploaded,
                      foodImageUrls,
                      setFoodImageUrls
                    )
                  }
                >
                  Upload
                </button>
              )}
            </div>
            {/* menue  pic */}
            <div className="mt-4">
              <label
                class="block mb-2 text-sm font-medium text-black-600 "
                for="multiple_files"
              >
                Upload menu images
              </label>
              <input
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   border-gray-600 focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                id="multiple_files"
                type="file"
                multiple
                ref={menuImageRef}
              />
              {menuPicIsUploaded ? (
                <button
                  className="bg-green-700 text-white py-1 p-2 rounded-md"
                  // onClick={uploadImage}
                >
                  Uploaded
                </button>
              ) : (
                <button
                  className="bg-green-400 text-white py-1 p-2 rounded-md"
                  onClick={() =>
                    uploadImage(
                      menuImageRef,
                      setMenuPicIsUploaded,
                      menuImageUrls,
                      setMenuImageUrls
                    )
                  }
                >
                  Upload
                </button>
              )}
            </div>
            {/* food name */}
            {/* <div className="mt-4">
              <MultiSelect
                data={[
                  "chowmin",
                  "momo",
                  "pizza",
                  "chat",
                  "golgappa",
                  "Roll",
                  "litti choka",
                ]}
                label="Choose Food Items"
                placeholder="Pick all that you have"
                searchable
                searchValue={searchValue}
                onSearchChange={onSearchChange}
                nothingFound="Nothing found"
                name="food"
              />
            </div> */}
            {/* opening and closing time */}
            <div className="flex">
              <div class="mt-4 mr-2">
                <label
                  class="block mb-2 text-sm font-medium text-gray-600 "
                  for="LoggingEmailAddress"
                >
                  Opening time
                </label>
                <input
                  id="LoggingEmailAddress"
                  class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   border-gray-600 focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="openTime"
                  ref={openingTimeRef}
                />
              </div>
              <div class="mt-4">
                <label
                  class="block mb-2 text-sm font-medium text-gray-600 "
                  for="LoggingEmailAddress"
                >
                  Closing time
                </label>
                <input
                  id="LoggingEmailAddress"
                  class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   border-gray-600 focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="closeTime"
                  ref={closingTimeRef}
                />
              </div>
            </div>

            <div class="mt-6">
              <button
                class="w-full bg-sky-500 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-head-color rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                onClick={formSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStall;
