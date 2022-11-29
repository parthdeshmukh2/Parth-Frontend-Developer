import * as types from "./actionTypes";
import axios from "axios";

export const getData = () => (dispatch) => {
  dispatch({ type: types.GET_CAPSULES_DATA_REQUEST });

  axios
    .get("http://localhost:8080/")
    .then((res) =>
      dispatch({ type: types.GET_CAPSULES_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_CAPSULES_DATA_FAILURE, payload: err })
    );
};
