export const reducer = (prevState, action) => {
    switch (action.type){   
        // Top sell courses
        case "GET_TOP_SELL_LOADING":
            return{
                ...prevState,
                getTopSellLoading: true,
                getTopSellSuccess: false,
                topSell: null
            }
        case "GET_TOP_SELL_SUCCESSED":
            return {
                ...prevState,
                getTopSellLoading: false,
                getTopSellSuccess: true,
                topSell: action.data
            }
        case "GET_TOP_SELL_FAILED":
            return {
                ...prevState,
                getTopSellLoading: false,
                getTopSellSuccess: false,
                topSell: action.data
            }
        // top new courses
        case "GET_TOP_NEW_LOADING":
            return{
                ...prevState,
                getTopNewoading: true,
                getTopNewSuccess: false,
                topNew: null
            }
        case "GET_TOP_NEW_SUCCESSED":
            return {
                ...prevState,
                getTopNewLoading: false,
                getTopNewSuccess: true,
                topNew: action.data
            }
        case "GET_TOP_NEW_FAILED":
            return {
                ...prevState,
                getTopNewLoading: false,
                getTopNewSuccess: false,
                topNew: action.data
            }
        // top rate courses
        case "GET_TOP_RATE_LOADING":
            return{
                ...prevState,
                getTopRateoading: true,
                getTopRateSuccess: false,
                topRate: null
            }
        case "GET_TOP_RATE_SUCCESSED":
            return {
                ...prevState,
                getTopRateLoading: false,
                getTopRateSuccess: true,
                topRate: action.data,
            }
        case "GET_TOP_RATE_FAILED":
            return {
                ...prevState,
                getTopRateLoading: false,
                getTopRateSuccess: false,
                topRate: action.data
            }
        default: 
            throw new Error();
    }
}