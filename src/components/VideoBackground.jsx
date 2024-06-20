import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(movieId);

  return (
    <div className="w-screen overflow-x-hidden ">
      <iframe
        className="w-[99%] aspect-video "
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?playlist=${movieTrailer?.key}&loop=1&autoplay=1&controls=1&showinfo=0&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
