import { ADD_SIMULATION } from "./action";


const initialState = [];

const simulationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SIMULATION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default simulationReducer;
