import React, { useState, useReducer } from "react";
import { reducer } from "../reducer/course-reducer";
import {
  getTopSellCourse,
  getTopNewCourse,
  getTopRateCourse,
  getProcessCourse,
  getFavoriteCourse
} from "../action/course-action";

export const CourseContext = React.createContext();

const initialState = {
  getTopSellLoading: false,
  getTopSellSuccess: false,
  topSell: null,

  getTopNewLoading: false,
  getTopNewSuccess: false,
  topNew: null,

  getTopRateLoading: false,
  getTopRateSuccess: false,
  topRate: null,

  getMyCourseLoading: false,
  getMyCourseSuccess: false,
  myCourse: null,

  getFavoriteCourseLoading: false,
  getFavoriteCourseSuccess: false,
  favoriteCourse: null,
};

const CourseProvider = (props) => {
  // const [authentication, setAuthentication] = useState()
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CourseContext.Provider
      value={{
        state,
        getTopSell: getTopSellCourse(dispatch),
        getTopNew: getTopNewCourse(dispatch),
        getTopRate: getTopRateCourse(dispatch),
        getMyCourse: getProcessCourse(dispatch),
        getFavoriteCourse: getFavoriteCourse(dispatch)
      }}>
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
