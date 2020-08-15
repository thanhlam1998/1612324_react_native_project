import axios from "axios";
import { config } from "../config/config";

import AsyncStorage from "@react-native-community/async-storage";

const baseApi = config.baseApi;

/* -------------------------- get search results -------------------------- */
export const search = (dispatch) => async (keyword, limit=100) => {
  const access_token = await AsyncStorage.getItem('@access_token')
  var data = JSON.stringify({ 
    token: access_token,
    keyword: keyword,
    limit: limit});
  var config = {
    method: "post",
    url: `${baseApi}/course/searchV2`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: data
  };
  dispatch({
    type: "SEARCH_LOADING",
  });
  axios(config)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: "SEARCH_SUCCESSED", data: res.data });
      }
    })
    .catch((error) => {
      dispatch({ type: "SEARCH_FAILED", data: error.response });
    });
};

/* -------------------------- get search history -------------------------- */
export const searchHistory = (dispatch) => async () => {
  const access_token = await AsyncStorage.getItem('@access_token')
  var config = {
    method: "get",
    url: `${baseApi}/course/search-history`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${access_token}`
    },
  };
  dispatch({
    type: "SEARCH_HISTORY_LOADING",
  });
  axios(config)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: "SEARCH_HISTORY_SUCCESSED", data: res.data });
      }
    })
    .catch((error) => {
      dispatch({ type: "SEARCH_HISTORY_FAILED", data: error.response });
    });
};

/* -------------------------- delete search history -------------------------- */
export const deleteHistory = (dispatch) => async (id) => {
  const access_token = await AsyncStorage.getItem('@access_token')
  var config = {
    method: "delete",
    url: `${baseApi}/course/delete-search-history/${id}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${access_token}`
    },
  };
  dispatch({
    type: "DELETE_HISTORY_LOADING",
  });
  axios(config)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: "DELETE_HISTORY_SUCCESSED", data: res.data });
      }
    })
    .catch((error) => {
      dispatch({ type: "DELETE_HISTORY_FAILED", data: error.response });
    });
};
