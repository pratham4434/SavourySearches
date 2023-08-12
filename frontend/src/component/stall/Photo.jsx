import React from 'react'

const Photo = () => {
  return (
    <div className="w-11/12 m-auto flex flex-wrap justify-around">
      {photos.photo.map((val, index) => {
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
  )
}

export default Photo