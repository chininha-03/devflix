import { useEffect, useState } from "react";
import styles from "./movieDescription.module.css";
import devFlix from "/favicon.png"

const MovieDesc = ({ movies, click }) => {

  const apiKey = "c5fb8a3d"; // https://omdbapi.com/?apikey=e4d577fa&s=Batman
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}&i=${movies.imdbID}`;
  const[movieDesc, setMovieDesc] = useState ([])

  // console.log(movies.imdbID)
  // fetch()
  useEffect(() => {
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setMovieDesc(data))
    .catch((error) => console.error("Erro: ", error))

  },[apiUrl])
  const movie = movieDesc;
  
  console.log(movie)
  
  return (
    
    <div className={styles.modalBackdrop} onClick={click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={movies.Poster} alt={movie.Title} />
          <button className={styles.btnClose} onClick={click}>X</button>
          <div className={styles.movieType}>
            <div>
            <img src={devFlix} alt="Logo DevFlix" />{movie.Type}
            <h1>{movie.Title}</h1>
            <a href={`https://google.com/search?q=${encodeURIComponent (movie.Title)}`} target="_blank">▶️Assistir</a>
            </div>
          </div>
        </div>
        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
          Avaliação: {movie.imdbRating}| Duração: {movie.Runtime} | {" "}
          {movie.Year}
          </div>
          <div className={styles.containerFlex}>
          <p>Elenco: {movie.Actors}</p>
          <p>Gêneros: {movie.Genre}</p>
          </div>
        </div>
        <div className={styles.desc}>
        <p>Sinopse: {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;
