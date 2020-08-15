export const reducer = (prevState, action) => {
    switch (action.type){   
        // Top sell courses
        case "GET_ALL_CATEGORY_LOADING":
            return{
                ...prevState,
                getAllCategoryLoading: true,
                getAllCategorySuccess: false,
                category: null
            }
        case "GET_ALL_CATEGORY_SUCCESSED":
            return {
                ...prevState,
                getAllCategoryLoading: false,
                getAllCategorySuccess: true,
                category: action.data
            }
        case "GET_ALL_CATEGORY_FAILED":
            return {
                ...prevState,
                getAllCategoryLoading: false,
                getAllCategorySuccess: false,
                category: action.data
            }
        default: 
            throw new Error();
    }
}