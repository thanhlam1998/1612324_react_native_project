import React, { useState, useReducer } from "react";
import { reducer } from "../reducer/browse-reducer";
import { getAllCategory } from "../action/browse-action";

export const BrowseContext = React.createContext();

const initialState = {
  getAllCategoryLoading: false,
  getAllCategorySuccess: false,
  category: null,
};

const BrowseProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowseContext.Provider
      value={{
        state,
        getAllCategory: getAllCategory(dispatch),
      }}>
      {props.children}
    </BrowseContext.Provider>
  );
};

export default BrowseProvider;
