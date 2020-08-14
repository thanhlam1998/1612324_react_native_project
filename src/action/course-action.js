import axios from "axios";
import {config} from "../config/config";

import AsyncStorage from "@react-native-community/async-storage";

AsyncStorage.setItem(
  "@access_token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg4ZTA0OWQ4LTY4MzctNDQxYi1hOGUzLThkNTkxZDU3ZDEwZSIsImlhdCI6MTU5NzQxMTkwOSwiZXhwIjoxNTk3NDE5MTA5fQ.W6yZsDi4Dtw0mfzw39eQBQVMrUUTFtasIl-0TdOtXc8"
);

var token

const getData = async () => {
  try {
    token = await AsyncStorage.getItem('@access_token')
  } catch(e) {
    // error reading value
  }
}

getData();

const baseApi = config.baseApi;

/* -------------------------- get top sell courses -------------------------- */
export const getTopSellCourse = (dispatch) => (limit, page=1) => {
    var data = JSON.stringify({ limit: limit, page:page});
    var config = {
      method: "post",
      url: `${baseApi}/course/top-sell`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: data,
    };
    dispatch({
      type: "GET_TOP_SELL_LOADING"
    })
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "GET_TOP_SELL_SUCCESSED", data: res.data });
        }
      })
      .catch((error) => {
        dispatch({ type: "GET_TOP_SELL_FAILED", data: error.response });
      });
  };

/* --------------------------- get top new courses -------------------------- */
export const getTopNewCourse = (dispatch) => (limit, page=1) => {
    var data = JSON.stringify({ limit: limit, page:page});
    var config = {
      method: "post",
      url: `${baseApi}/course/top-new`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: data,
    };
    dispatch({
      type: "GET_TOP_NEW_LOADING"
    })
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "GET_TOP_NEW_SUCCESSED", data: res.data });
        }
      })
      .catch((error) => {
        dispatch({ type: "GET_TOP_NEW_FAILED", data: error.response });
      });
  };

/* --------------------------- get top rate courses -------------------------- */
export const getTopRateCourse = (dispatch) => (limit, page=1) => {
    var data = JSON.stringify({ limit: limit, page:page});
    var config = {
      method: "post",
      url: `${baseApi}/course/top-rate`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: data,
    };
    dispatch({
      type: "GET_TOP_RATE_LOADING"
    })
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "GET_TOP_RATE_SUCCESSED", data: res.data });
        }
      })
      .catch((error) => {
        dispatch({ type: "GET_TOP_RATE_FAILED", data: error.response });
      });
  };

/* --------------------------- get top rate courses -------------------------- */
export const getProcessCourse = (dispatch) => () => {
    var config = {
      method: "get",
      url: `${baseApi}/user/get-process-courses`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${token}`
      },
    };
    dispatch({
      type: "GET_MY_COURSE_LOADING"
    })
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "GET_MY_COURSE_SUCCESSED", data: res.data });
        }
      })
      .catch((error) => {
        dispatch({ type: "GET_MY_COURSE_FAILED", data: error.response });
      });
  };