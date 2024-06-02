import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-3 text-lg w-1/4">{overview}</p>
      <div className="space-x-2">
        <button className="bg-white text-black text-lg p-2 px-16 w-15 rounded-lg hover:bg-opacity-70 ">
          Play
        </button>
        <button className="bg-gray-300 text-black text-lg p-2 px-12 w-15 bg-opacity-50 rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
