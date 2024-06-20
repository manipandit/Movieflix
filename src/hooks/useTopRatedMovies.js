import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/store/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        TMDB_MOVIE_URL + "/top_rated?page=1",
        API_OPTIONS
      );

      const json = await data.json();
      console.log(json.results);
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
