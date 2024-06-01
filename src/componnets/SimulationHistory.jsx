import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const SimulationHistory = () => {
  const simulations = useSelector((state) => state.simulations);

  return (
    <div className="container">
      <h2 className="my-4">Historique des Simulations</h2>
      <ul className="list-group">
        {simulations.map((simulation, index) => (
          <li key={index} className="list-group-item">
            Simulation {index + 1}: Prix de Base: {simulation.prixBase} DH, Options: {simulation.options.join(', ')}, Taux de Taxe: {simulation.taxRate}, Prix Total: {simulation.totalPrice} DH
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimulationHistory;
