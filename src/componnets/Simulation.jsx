import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSimulation } from '../action';
import 'bootstrap/dist/css/bootstrap.min.css';

const Simulation = () => {
    const dispatch = useDispatch();
    const [car, setCar] = useState({
      brand: '',
      model: '',
      fuelType: '',
      options: [],
    });
  
    const handleOptionChange = (event) => {
      const option = event.target.value;
      const updatedOptions = car.options.includes(option)
        ? car.options.filter((o) => o !== option)
        : [...car.options, option];
      setCar({ ...car, options: updatedOptions });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const { brand, model, fuelType, options } = car;
  
      // Calculer le prix total de la voiture
      const basePrice = 300000;
      const optionsPrice = options.reduce((acc, option) => {
        switch (option) {
          case 'Sunroof':
            return acc + 10000;
          case 'GPS':
            return acc + 5000;
          case 'LEDHeadlights':
            return acc + 3000;
          case 'RearCamera':
            return acc + 2000;
          default:
            return acc;
        }
      }, 0);
      const salesTax = 0.1;
      const registrationFee = 5000; 
  
      const totalPrice =
        (basePrice + optionsPrice) * (1 + salesTax) + registrationFee;
  
      // Enregistrer la simulation dans le store Redux
      dispatch(addSimulation({ brand, model, fuelType, options, totalPrice }));
  
      
      console.log('Prix total:', totalPrice);
      alert(`Prix total estimé: ${totalPrice} DH`);
    };
  
    return (
      <div className="container">
        <h2 className="my-4">Simulateur d'achat de voiture</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Marque:</label>
            <input
              type="text"
              className="form-control"
              value={car.brand}
              onChange={(event) => setCar({ ...car, brand: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Modèle:</label>
            <input
              type="text"
              className="form-control"
              value={car.model}
              onChange={(event) => setCar({ ...car, model: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Type de carburant:</label>
            <select
              className="form-control"
              value={car.fuelType}
              onChange={(event) => setCar({ ...car, fuelType: event.target.value })}
            >
              <option value="essence">Essence</option>
              <option value="diesel">Diesel</option>
              <option value="hybride">Hybride</option>
              <option value="electrique">Électrique</option>
            </select>
          </div>
          <div className="form-group">
            <label>Options:</label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={car.options.includes('Sunroof')}
                onChange={handleOptionChange}
                value="Sunroof"
              />
              <label className="form-check-label">Toit ouvrant (10 000 DH)</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={car.options.includes('GPS')}
                onChange={handleOptionChange}
                value="GPS"
              />
              <label className="form-check-label">Système de navigation GPS (5 000 DH)</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={car.options.includes('LEDHeadlights')}
                onChange={handleOptionChange}
                value="LEDHeadlights"
              />
              <label className="form-check-label">Phares LED (3 000 DH)</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={car.options.includes('RearCamera')}
                onChange={handleOptionChange}
                value="RearCamera"
              />
              <label className="form-check-label">Caméra de Recul (2 000 DH)</label>
            </div>
          </div>
          <button type="submit" className="btn btn-success">Simuler</button>
        </form>
      </div>
    );
}

export default Simulation;
