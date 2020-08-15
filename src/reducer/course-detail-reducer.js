export const reducer = (prevState, action) => {
    switch (action.type){   
        // Get search result
        case "GET_COURSE_DETAIL_LOADING":
            return{
                ...prevState,
                getCourseDetailLoading: true,
                getCourseDetailSuccess: false,
                courseDetail: null
            }
        case "GET_COURSE_DETAIL_SUCCESSED":
            return {
                ...prevState,
                getCourseDetailLoading: false,
                getCourseDetailSuccess: true,
                courseDetail: action.data
            }
        case "GET_COURSE_DETAIL_FAILED":
            return {
                ...prevState,
                getCourseDetailLoading: false,
                getCourseDetailSuccess: false,
                courseDetail: action.data
            }
        // Get search result
        case "CHECK_OWN_COURSE_LOADING":
            return{
                ...prevState,
                checkOwnCourseLoading: true,
                checkOwnCourseSuccess: false,
                ownCourse: null
            }
        case "CHECK_OWN_COURSE_SUCCESSED":
            return {
                ...prevState,
                checkOwnCourseLoading: false,
                checkOwnCourseSuccess: true,
                ownCourse: action.data
            }
        case "CHECK_OWN_COURSE_FAILED":
            return {
                ...prevState,
                checkOwnCourseLoading: false,
                checkOwnCourseSuccess: false,
                ownCourse: action.data
            }
        // Get search result
        case "GET_COURSE_LIKE_STATUS_LOADING":
            return{
                ...prevState,
                getCourseLikeStatusLoading: true,
                getCourseLikeStatusSuccess: false,
                courseLike: null
            }
        case "GET_COURSE_LIKE_STATUS_SUCCESSED":
            return {
                ...prevState,
                getCourseLikeStatusLoading: false,
                getCourseLikeStatusSuccess: true,
                courseLike: action.data
            }
        case "GET_COURSE_LIKE_STATUS_FAILED":
            return {
                ...prevState,
                getCourseLikeStatusLoading: false,
                getCourseLikeStatusSuccess: false,
                courseLike: action.data
            }

        // Get search result
        case "LIKE_COURSE_LOADING":
            return{
                ...prevState,
                likeCourseLoading: true,
                likeCourseSuccess: false,
            }
        case "LIKE_COURSE_SUCCESSED":
            return {
                ...prevState,
                likeCourseLoading: false,
                likeCourseSuccess: true,
            }
        case "LIKE_COURSE_FAILED":
            return {
                ...prevState,
                likeCourseLoading: false,
                likeCourseSuccess: false,
            }
       
            // Get search result
        case "GET_FREE_COURSE_LOADING":
            return{
                ...prevState,
                getFreeCourseLoading: true,
                getFreeCourseSuccess: false,
                freeCourse:action.null
            }
        case "GET_FREE_COURSE_SUCCESSED":
            return {
                ...prevState,
                getFreeCourseLoading: false,
                getFreeCourseSuccess: true,
                freeCourse:action.data
            }
        case "GET_FREE_COURSE_FAILED":
            return {
                ...prevState,
                getFreeCourseLoading: false,
                getFreeCourseSuccess: false,
                freeCourse:action.data
            }
      
        default: 
            throw new Error();
    }
}