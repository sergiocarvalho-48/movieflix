import ReviewCard from 'Components/ReviewCard';
import ReviewForm from 'Components/ReviewForm';
import './styles.css';

const MovieDetails = () => {
  return (
    <>
      <div className="text-datails">
        <h1>Tela detalhes do filme id: 1</h1>
      </div>
      <ReviewForm />
      <ReviewCard />
    </>
  );
};

export default MovieDetails;
