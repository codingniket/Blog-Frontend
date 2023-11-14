import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Navbar = () => {
  const [cookies, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const logout = () => {
    setCookies('access_token', '');
    window.localStorage.clear();
    navigate('/auth/login');
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="badge bg-light text-dark">THE JAIN</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/createArticle">
              Create
            </Link>
            <Link className="nav-link" to="/savedArticle">
              Saved
            </Link>
            {!cookies.access_token ? (
              <Link className="nav-link" to="/auth/login">
                Login
              </Link>
            ) : (
              <button className="btn btn-warning btn-block" onClick={logout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
