import { DATA_REQUEST } from "../constants/productConstants";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  const response = await axios.get(
    "http://www.json-generator.com/api/json/get/bUgMRhYjKG?indent=2"
  );

  if (response && response.data) {
    dispatch({ type: DATA_REQUEST, payload: response.data });
  }
};
