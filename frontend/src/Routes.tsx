import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'Components/Navbar';


const Routes = () => (
  <BrowserRouter>
    <Navbar />
      <Redirect from="/" to="/home/login" exact />
      <Route path="/home/login">
        <Home />
      </Route>
  </BrowserRouter>
);

export default Routes;