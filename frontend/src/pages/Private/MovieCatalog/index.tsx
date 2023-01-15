import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Movies } from 'type/movies';
import { MoviePage } from 'type/vendor/movieflix';
import { requestBackend } from 'util/requests';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const Movie = () => {

  const { movieId } = useParams<UrlParams>();
  const [page, setPage] = useState<MoviePage<Movies>>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: "/movies",
      withCredentials: true,
      params: {
        page: 0,
        size: 1,
      }
    };

    requestBackend(config)
    .then((response) => {
      setPage(response.data);
    });
     
  }, [movieId]);

  return (
    <div className="container moviecatalog-container">
      <div className="moviecatalog-tittle-container">
        <h1>Tela listagem de filmes</h1>
      </div>
      {page?.content.map((movie) => (
        <div className="container moviecatalog-link" key={movie.id}>
        <Link to="/movies/1">
          <p>Acessar /movies/1</p>
        </Link>
        <Link to="/movies/2">
          <p>Acessar /movies/2</p>
        </Link>
      </div>
      ))}
    </div>
  );
};

export default Movie;
