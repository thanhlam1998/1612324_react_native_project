import axios from "axios";
import {config} from "../config/config";

const baseApi = config.baseApi;

export const login = (dispatch) => (username, password) => {
  var data = JSON.stringify({ email: username, password: password });
  var config = {
    method: "post",
    url: `${baseApi}/user/login`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: data,
  };
  dispatch({
    type: "LOGIN_LOADING"
  })
  axios(config)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: "LOGIN_SUCCESSED", data: res.data });
      } else {
        dispatch({ type: "LOGIN_FAILED" });
      }
    })
    .catch((error) => {
      dispatch({ type: "LOGIN_FAILED", data: error.response });
    });
};

export const register = (dispatch) => (username, email, phone, password) => {
  var data = JSON.stringify({
    username: username,
    email: email,
    phone: phone,
    password: password,
  });
  var config = {
    method: "post",
    url: `${baseApi}/user/register`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: data,
  };
  dispatch({
    type: "REGISTER_LOADING"
  })
  axios(config)
    .then((res) => {
        if(res.status === 200){
            dispatch({
              type: "REGISTER_SUCCESSED",
            });
        }
    })
    .catch((error) => {
      dispatch({ type: "REGISTER_FAILED", data: error.response });
    });
};

export const forgotPassword = (dispatch) => (email) => {
  var data = JSON.stringify({
    email: email
  });
  var config = {
    method: "post",
    url: `${baseApi}/user/forget-pass/send-email`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: data,
  };
  dispatch({
    type: "FORGOT_PASSWORD_LOADING"
  })
  axios(config)
    .then((res) => {
        if(res.status === 200){
            dispatch({
              type: "FORGOT_PASSWORD_SUCCESSED",
            });
        }
    })
    .catch((error) => {
      dispatch({ type: "FORGOT_PASSWORD_FAILED", data: error.response });
    });
};
