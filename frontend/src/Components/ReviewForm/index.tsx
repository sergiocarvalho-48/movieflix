import ButtonForm from 'Components/ButtonForm';
import './styles.css';

const ReviewForm = () => {
  return (
    <div className="base-card review-form-card">
      <form>
        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Deixe sua avaliação aqui"
            name="review"
          />
          <div className="review-form-submit">
            <ButtonForm />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
