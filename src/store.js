import { legacy_createStore, combineReducers } from 'redux';
import simulationReducer from './simulationReducer';

const rootReducer = combineReducers({
  simulations: simulationReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
