import axios from "axios";
import {config} from "../config/config";

import AsyncStorage from "@react-native-community/async-storage";

const baseApi = config.baseApi;

/* -------------------------- get top sell courses -------------------------- */
export const getAllCategory = (dispatch) => () => {
    var config = {
      method: "get",
      url: `${baseApi}/category/all`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    dispatch({
      type: "GET_ALL_CATEGORY_LOADING"
    })
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "GET_ALL_CATEGORY_SUCCESSED", data: res.data });
        }
      })
      .catch((error) => {
        dispatch({ type: "GET_ALL_CATEGORY_FAILED", data: error.response });
      });
  };

/* -------------------------- get top sell courses -------------------------- */
export const getSuggestedCourse = (dispatch) => async(limit=12, offset=1) => {
  const user_id = await AsyncStorage.getItem("@id")
    var config = {
      method: "get",
      url: `${baseApi}/user/recommend-course/${user_id}/${limit}/${offset}`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    dispatch({
      type: "GET_SUGGESTED_COURSE_LOADING"
    })
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "GET_SUGGESTED_COURSE_SUCCESSED", data: res.data });
        }
      })
      .catch((error) => {
        dispatch({ type: "GET_SUGGESTED_COURSE_FAILED", data: error.response });
      });
  };

/* -------------------------- get top sell courses -------------------------- */
export const getCourseByCategory = (dispatch) => async(categoryId, keyword = "",limit = 10, offset = 0) => {
    var data = JSON.stringify({keyword: keyword, opt: {category: [categoryId]},limit: limit, offset:offset});
    var config = {
      method: "post",
      url: `${baseApi}/course/search`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: data
    };
    dispatch({
      type: "GET_COURSE_BY_CATEGORY_LOADING"
    })
    axios(config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "GET_COURSE_BY_CATEGORY_SUCCESSED", data: res.data });
        }
      })
      .catch((error) => {
        dispatch({ type: "GET_COURSE_BY_CATEGORY_FAILED", data: error.response });
      });
  };

