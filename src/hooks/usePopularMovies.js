import { useDispatch } from "react-redux";

import { API_OPTIONS, TMDB_MOVIE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/store/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const data = await fetch(TMDB_MOVIE_URL + "/popular?page=1", API_OPTIONS);

      const json = await data.json();
      console.log(json.results);
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
