import { useDispatch } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/store/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        TMDB_MOVIE_URL + "/upcoming?page=1",
        API_OPTIONS
      );

      const json = await data.json();
      console.log(json.results);
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
