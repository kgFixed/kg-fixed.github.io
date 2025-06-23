import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/navBar.css"

const NavBar: React.FC = () => {

  let nav = useNavigate();

  const handleClickHome = () => {
    nav('/');
  }

  const handleClickRor = () => {
    nav('/ror');
  }

  const handleClickOrcid = () => {
    nav('/orcid');
  }

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">VLIZ</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasNavbar" 
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div 
          className="offcanvas offcanvas-end" 
          tabIndex={-1} 
          id="offcanvasNavbar" 
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">VLIZ</h5>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="offcanvas" 
              aria-label="Close"
            ></button>
          </div>
          
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <p className="link" onClick={handleClickHome}>Home</p>
              </li>
              <li className="nav-item">
                <p className="link" onClick={handleClickRor}>ROR.org</p>
              </li>
              <li className="nav-item dropdown">
                <p className="link" onClick={handleClickOrcid}>ORCID.org</p>
              </li>
            </ul>
            
            <form className="d-flex mt-3" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;