import axios from "axios";
import {config} from "../config/config";

const baseApi = config.baseApi;

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