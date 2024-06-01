import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';

const cars = [
  { id: 1, marque: 'Toyota', modele: 'Corolla', prixBase: 200000, carburant: 'Essence', annee: 2021 },
  { id: 2, marque: 'Honda', modele: 'Civic', prixBase: 250000, carburant: 'Diesel', annee: 2020 },
  { id: 3, marque: 'BMW', modele: 'X5', prixBase: 400000, carburant: 'Électrique', annee: 2022 },
 
];


const CarList = () => {
    const dispatch = useDispatch()
     const [selectedCar, setSelectedCar] = useState(null);
//   dispatch(addSimulation({ brand, model, fuelType, options, totalPrice }));
  const handleDetailClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="container">
      <h2 className="my-4">Liste de Voitures</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Marque</th>
            <th>Modèle</th>
            <th>Prix de Base (DH)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.marque}</td>
              <td>{car.modele}</td>
              <td>{car.prixBase}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleDetailClick(car)}>Détailler</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCar && (
        <div className="mt-4">
          <h3>Détails de la Voiture</h3>
          <p><strong>Marque:</strong> {selectedCar.marque}</p>
          <p><strong>Modèle:</strong> {selectedCar.modele}</p>
          <p><strong>Prix de Base:</strong> {selectedCar.prixBase} DH</p>
          <p><strong>Carburant:</strong> {selectedCar.carburant}</p>
          <p><strong>Année:</strong> {selectedCar.annee}</p>
        </div>
      )}
    </div>
  );
};

export default CarList;
