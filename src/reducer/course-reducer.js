export const reducer = (prevState, action) => {
    switch (action.type){
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
        default: 
            throw new Error();
    }
}