import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {Link, useNavigate, useLocation} from "react-router-dom"

const Navbar = ({ handleSearch }, { onReset }) => {
  const [input, setInput] = useState("");
  const history = useNavigate();
  const handleReload = () => {
      onReset();
      history.push('/');
      // window.location.href = '/';
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(input);
  }

  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link className="navbar-brand" to="/" onClick={handleReload}>Newsmonkey</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/general"> General</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/techonology">Techonology</Link>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <div className="container">
                <form className="d-flex" onSubmit={handleSearchSubmit}>
                  <input type="text" className="form-control" placeholder="Search News..."
                    value={input}
                    onChange={handleInputChange}
                    style={{ margin: '0.5em' }} />
                  <button type="submit" className="btn btn-secondary mt-2" style={{ margin: '0.5em' }}>
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Navbar
