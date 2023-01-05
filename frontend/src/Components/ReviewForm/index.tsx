
import ButtonIcon from 'Components/ButtonIcon';
import './styles.css'



 
const ReviewForm = () => {
  return (
    <div className="base-card review-form-card">
      <form>
        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Deixe sua avalição aqui"
            name="review"
          />
        </div>
        <div className="review-form-submit">
          <ButtonIcon text="Salvar Avalição" />
        </div>
      </form>
    </div>
  );
};
 
export default ReviewForm;