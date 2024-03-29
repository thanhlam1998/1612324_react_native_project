import axios from "axios";
import {config} from "../config/config";

import AsyncStorage from "@react-native-community/async-storage";

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
export const getProcessCourse = (dispatch) => async () => {
  const access_token = await AsyncStorage.getItem('@access_token')
    var config = {
      method: "get",
      url: `${baseApi}/user/get-process-courses`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${access_token}`
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

/* --------------------------- get top rate courses -------------------------- */
export const getFavoriteCourse = (dispatch) => async() => {
    const access_token = await AsyncStorage.getItem('@access_token')
    var config = {
      method: "get",
      url: `${baseApi}/user/get-favorite-courses`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${access_token}`
      },
    };
    dispatch({
      type: "GET_FAVORITE_COURSE_LOADING"
    })
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "GET_FAVORITE_COURSE_SUCCESSED", data: res.data });
        }
      })
      .catch((error) => {
        dispatch({ type: "GET_FAVORITE_COURSE_FAILED", data: error.response });
      });
  };