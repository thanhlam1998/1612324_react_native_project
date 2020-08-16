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
        // Top reccomend courses
        case "GET_SUGGESTED_COURSE_LOADING":
            return{
                ...prevState,
                getSuggestedCourseLoading: true,
                getSuggestedCourseSuccess: false,
                suggestedCourse: null
            }
        case "GET_SUGGESTED_COURSE_SUCCESSED":
            return {
                ...prevState,
                getSuggestedCourseLoading: false,
                getSuggestedCourseSuccess: true,
                suggestedCourse: action.data
            }
        case "GET_SUGGESTED_COURSE_FAILED":
            return {
                ...prevState,
                getSuggestedCourseLoading: false,
                getSuggestedCourseSuccess: false,
                suggestedCourse: action.data
            }

        // Top reccomend courses
        case "GET_COURSE_BY_CATEGORY_LOADING":
            return{
                ...prevState,
                getCourseByCategoryLoading: true,
                getCourseByCategorySuccess: false,
                courses: null
            }
        case "GET_COURSE_BY_CATEGORY_SUCCESSED":
            return {
                ...prevState,
                getCourseByCategoryLoading: false,
                getCourseByCategorySuccess: true,
                courses: action.data
            }
        case "GET_COURSE_BY_CATEGORY_FAILED":
            return {
                ...prevState,
                getCourseByCategoryLoading: false,
                getCourseByCategorySuccess: false,
                courses: action.data
            }
        default: 
            throw new Error();
    }
}