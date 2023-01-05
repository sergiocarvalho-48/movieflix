import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'Components/Navbar';
import Movies from 'pages/Private/MovieCatalog';
import MovieDetails from 'pages/Private/MovieDetails';


const Routes = () => (
  <BrowserRouter>
    <Navbar />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
  </BrowserRouter>
);

export default Routes;