import { AxiosRequestConfig } from 'axios';
import ReviewCard from 'Components/ReviewCard';
import ReviewForm from 'Components/ReviewForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Reviews } from 'type/reviews';
import { hasAnyRoles } from 'util/auth';
import { requestBackend } from 'util/requests';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [reviews, setReviews] = useState<Reviews[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);


  const handleInsertReview = (review: Reviews) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  }

  return (
    <>
      <div className="text-datails">
        <h1>Tela detalhes do filme id: {movieId}</h1>
      </div>
      {
      hasAnyRoles(['ROLE_MEMBER']) && 
      <ReviewForm movieId={movieId} onInsertReview={handleInsertReview}/>
      }
      <ReviewCard reviews={reviews} />
    </>
  );
};

export default MovieDetails;
