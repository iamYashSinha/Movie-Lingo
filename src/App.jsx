import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "./main";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SeachBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSeachQuery] = useState("");

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://movies-app.${server}.repl.co/api/movies`
      );
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
  movie.name.toLowerCase().includes(searchQuery.toLowerCase())
);


  return (
    <>
    
      <header>
        <div className="heading-1">Welcome To Movie Lingo</div>
      </header>
      <SearchBar setSeachQuery={setSeachQuery} />
      <div className="main">
        {filteredMovies &&
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              img={movie.img_link}
              title={movie.name}
              genre={movie.genre}
              rating={movie.imdb_rating}
              duration={movie.duration}
            />
          ))}
      </div>
      </>
  );
}

export default App;
