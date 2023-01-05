import StarImg from 'assets/images/star.png';
import './styles.css';

const ReviewCard = () => {

    return (
        <div className="base-card review-card">
            <h1> <img src={StarImg} alt="" />Maria Silva</h1>
            <div className="card-top-container">
                <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
            </div>
            <h1> <img src={StarImg} alt="" />Maria Silva</h1>
            <div className="card-top-container">
                <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
            </div>
        </div>
    );
}

export default ReviewCard;