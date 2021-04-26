import { CHANGE_SELECTED_NODE } from "../constants/nodeConstants";

export const SelectRow = (number) => {
  return {
    type: CHANGE_SELECTED_NODE,
    payload: number,
  };
};
