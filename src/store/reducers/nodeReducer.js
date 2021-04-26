import { CHANGE_SELECTED_NODE } from "../constants/nodeConstants";
export const nodeReducer = (state = { selectedRow: -1 }, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_NODE:
      return {
        selectedRow: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};
