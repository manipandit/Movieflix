import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/moviesSlice";
import { API_OPTIONS, TMDB_MOVIE_URL } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        TMDB_MOVIE_URL + "/now_playing?page=1",
        API_OPTIONS
      );

      const json = await data.json();
      // console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
