//import { hasAnyRoles } from 'util/auth';

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <div className="container-fluid">
        <a href="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </a>
        <div className="nav-login-logout">
              <a href="#logout">
                SAIR
              </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
