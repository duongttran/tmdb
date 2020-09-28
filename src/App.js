import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  let [movieList, setMovieList] = useState(null);

  const getNowPlayingMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    let data = await fetch(url);
    let result = await data.json();
    setMovieList(result.resutls);
    console.log("movie", result);
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);

  if (movieList === null) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h1>Duong's movie</h1>
      <div>
        <MovieList movieList={movieList} />
      </div>
    </div>
  );
}

export default App;
