import { DATA_REQUEST } from "../constants/productConstants";
export const productReducer = (
  state = { graphdata: [], nodes: [] },
  action
) => {
  switch (action.type) {
    case DATA_REQUEST:
      return {
        graphdata: action.payload.graphData,
        nodes: action.payload.nodes,
      };
      break;

    default:
      return state;
      break;
  }
};
