import { useEffect } from "react";
import { useState } from "react";

import "./App.css";
import logo from "../assets/devflix.png";

import MovieCard from "../componentes/movieCard/movieCard";
import searchIcon from "../assets/search.svg";
import Footer from "../componentes/footer/footer";



const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const[movies, setMovies] = useState ([])

  const apiKey = "e4d577fa"; // https://omdbapi.com/?apikey=e4d577fa&s=Batman
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //   fetch(apiUrl)
  // .then((response) => response.json())
  // .then((data) => console.log(data));

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(searchTerm);
  };

  return (
    <>
      <div id="app">
        <div className="logo">
          <img src={logo} alt="Logo devflix" />
        </div>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            type="text"
            placeholder="Pesquise por filmes"
          />
          <img
            src={searchIcon}
            alt=""
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (<MovieCard key={movie.imdbID} movies={movie} />))}
          </div>
        ): (
          
          <div className="empty">
            <h2>Nenhum filme encocntrado 😥</h2>
          </div>
          )}
          
          <Footer link={"https://github.com"}>Otávio</Footer>
      </div>
    </>
  );
};

export default App;
