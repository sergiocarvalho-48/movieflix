import { ReactComponent as MainImage } from 'assets/images/main-image.svg';

import Login from './login';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <div className="home-img-svg">
          <MainImage />
        </div>
      </div>
      <div className="home-form-container">
        <Login />
      </div>
    </div>
  );
};

export default Home;
