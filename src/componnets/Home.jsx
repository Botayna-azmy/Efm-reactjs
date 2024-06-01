import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Page Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CarList">Liste de Voitures</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Simulation">Simulation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SimulationHistory">Simulation History</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Home;
