export const reducer = (prevState, action) => {
    switch (action.type){
        case "LOGIN_SUCCESSED":
            return {
                ...prevState,
                isAuthenticated: true,
                token: action.data.token,
                userInfo: action.data.userInfo
            }
        case "LOGIN_FAILED":
            return {
                ...prevState,
                isAuthenticated: false,
            }
        case "REGISTER_SUCCESSED":
            return {
                ...prevState,
                isRegisterSuccess: true,
                data: action.data,
            }
        case "REGISTER_FAILED":
            return {
                ...prevState,
                isRegisterSuccess: false,
                data: action.data
            }
        default: 
            throw new Error();
    }
}