import React, { useState, useReducer } from "react";
import { reducer } from "../reducer/course-detail-reducer";
import {
 getDetailCourse,
 checkOwnCourse,
 getCourseLikeStatus
} from "../action/course-detail-action";

export const CourseDetailContext = React.createContext();

const initialState = {
  
};

const CourseDetailProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CourseDetailContext.Provider
      value={{
        state,
        getDetailCourse: getDetailCourse(dispatch),
        checkOwnCourse: checkOwnCourse(dispatch),
        getCourseLikeStatus: getCourseLikeStatus(dispatch)
      }}>
      {props.children}
    </CourseDetailContext.Provider>
  );
};

export default CourseDetailProvider;
