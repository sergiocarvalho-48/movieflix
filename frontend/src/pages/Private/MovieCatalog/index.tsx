
import './styles.css';

const Movies = () => {
  return (
    <div className="container moviecatalog-container">
      <div className="moviecatalog-tittle-container">
        <h1>Tela listagem de filmes</h1>
      </div>
      <div className="container moviecatalog-link">
      <a href="/movies/moviesdetails" className="moviecatalog-text">
          Acessar /movies/1
        </a>
        <a href="/movies/moviesdetails" className="moviecatalog-text">
          Acessar /movies/2
        </a>
        </div>
    </div>
  );
};

export default Movies;
