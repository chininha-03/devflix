import styles from "./movieDescription.module.css";

const MovieDesc = (movies) => {
  const movie = movies;
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.movieModal}>
        <div className={styles.movieInfo}>
          <img src="https://via.placeholder.com/400" />
          <button className={styles.btnClose}>X</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;
