import axios from "axios";
import * as types from "./actionTypes";

export const userLogin = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios({
    method: "post",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  })
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
      localStorage.setItem("isAuth", true)

      console.log(payload, "login");
    })
    .catch((err) => dispatch({ type: types.LOGIN_FAILURE }));
};

