import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './componnets/Home';
import CarList from './componnets/CarList';
import Simulation from './componnets/Simulation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import SimulationHistory from './componnets/SimulationHistory';


function App() {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CarList" element={<CarList />} />
            <Route path="/Simulation" element={<Simulation />} />
            <Route path="/SimulationHistory" element={<SimulationHistory />} />
          </Routes>
        </div>
      </Router>
</Provider>
    </div>
  );
}

export default App;
