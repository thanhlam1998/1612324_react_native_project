import axios from "axios";
import {config} from "../config/config";

import AsyncStorage from "@react-native-community/async-storage";

const baseApi = config.baseApi;

/* -------------------------- get top sell courses -------------------------- */
export const getDetailCourse = (dispatch) => async(id) => {
    const access_token = await AsyncStorage.getItem('@access_token')
    var config = {
      method: "get",
      url: `${baseApi}/course/detail-with-lesson/${id}`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${access_token}`
      },
    };
    dispatch({
      type: "GET_COURSE_DETAIL_LOADING"
    })
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "GET_COURSE_DETAIL_SUCCESSED", data: res.data });
        }
      })
      .catch((error) => {
        dispatch({ type: "GET_COURSE_DETAIL_FAILED", data: error.response });
      });
  };

/* -------------------------- get top sell courses -------------------------- */
export const checkOwnCourse = (dispatch) => async(id) => {
    const access_token = await AsyncStorage.getItem('@access_token')
    var config = {
      method: "get",
      url: `${baseApi}/user/check-own-course/${id}`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${access_token}`
      },
    };
    dispatch({
      type: "CHECK_OWN_COURSE_LOADING"
    })
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "CHECK_OWN_COURSE_SUCCESSED", data: res.data });
        }
      })
      .catch((error) => {
        dispatch({ type: "CHECK_OWN_COURSE_FAILED", data: error.response });
      });
  };

/* -------------------------- get top sell courses -------------------------- */
export const getCourseLikeStatus = (dispatch) => async(id) => {
    const access_token = await AsyncStorage.getItem('@access_token')
    var config = {
      method: "get",
      url: `${baseApi}/user/get-course-like-status/${id}`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${access_token}`
      },
    };
    dispatch({
      type: "GET_COURSE_LIKE_STATUS_LOADING"
    })
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "GET_COURSE_LIKE_STATUS_SUCCESSED", data: res.data });
        }
      })
      .catch((error) => {
        dispatch({ type: "GET_COURSE_LIKE_STATUS_FAILED", data: error.response });
      });
  };