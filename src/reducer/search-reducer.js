export const reducer = (prevState, action) => {
    switch (action.type){   
        // Get search result
        case "SEARCH_LOADING":
            return{
                ...prevState,
                searchLoading: true,
                searchSuccess: false,
                result: null
            }
        case "SEARCH_SUCCESSED":
            return {
                ...prevState,
                searchLoading: false,
                searchSuccess: true,
                result: action.data
            }
        case "SEARCH_FAILED":
            return {
                ...prevState,
                searchLoading: false,
                searchSuccess: false,
                result: action.data
            }
        // Get search history
        case "SEARCH_HISTORY_LOADING":
            return{
                ...prevState,
                searchHistoryLoading: true,
                searchHistorySuccess: false,
                history: null
            }
        case "SEARCH_HISTORY_SUCCESSED":
            return {
                ...prevState,
                searchHistoryLoading: false,
                searchHistorySuccess: true,
                history: action.data
            }
        case "SEARCH_HISTORY_FAILED":
            return {
                ...prevState,
                searchHistoryLoading: false,
                searchHistorySuccess: false,
                history: action.data
            }
        // delete search history
        case "DELETE_HISTORY_LOADING":
            return{
                ...prevState,
                deleteHistoryLoading: true,
                deleteHistorySuccess: false,
            }
        case "DELETE_HISTORY_SUCCESSED":
            return {
                ...prevState,
                deleteHistoryLoading: false,
                deleteHistorySuccess: true,
            }
        case "DELETE_HISTORY_FAILED":
            return {
                ...prevState,
                deleteHistoryLoading: false,
                deleteHistorySuccess: false,
            }
      
        default: 
            throw new Error();
    }
}