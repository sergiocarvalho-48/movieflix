import { Route, Router, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'Components/Navbar';
import MovieDetails from 'pages/Private/MovieDetails';
import Movie from 'pages/Private/MovieCatalog';
import history from 'util/history';
import PrivateRoute from 'Components/PrivateRoute';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <Movie />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
