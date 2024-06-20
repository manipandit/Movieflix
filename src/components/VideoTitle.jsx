import { Info, Play } from "lucide-react";
import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="absolute w-screen px-6 text-white pt-[13%] bg-gradient-to-r from-black aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/3 py-6 text-lg ">{overview}</p>

      <div className="">
        <button className="p-4 px-10 text-xl text-black bg-white rounded-lg hover:bg-opacity-80">
          <div className="flex items-center gap-x-2">
            <Play className="text-black" />
            <span className="text-xl font-bold">Play</span>
          </div>
        </button>
        <button className="p-4 px-10 mx-2 text-xl text-white bg-gray-500 rounded-lg bg-opacity-20 hover:bg-opacity-30">
          <div className="flex items-center gap-x-2">
            <Info className="" />
            <span className="text-xl font-bold">More Info</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
