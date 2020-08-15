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

