import React, { useState, useReducer } from "react";
import { reducer } from "../reducer/search-reducer";
import { search, searchHistory, deleteHistory} from "../action/search-action";

export const SearchContext = React.createContext();

const initialState = {
  searchLoading: false,
  searchSuccess: false,
  result: null,

  searchHistoryLoading: false,
  searchHistorySuccess: false,
  history: null,

  deleteHistoryLoading: false,
  deleteHistorySuccess: false,
};

const SearchProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SearchContext.Provider
      value={{
        state,
        search: search(dispatch),
        searchHistory: searchHistory(dispatch),
        deleteHistory: deleteHistory(dispatch)
      }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
