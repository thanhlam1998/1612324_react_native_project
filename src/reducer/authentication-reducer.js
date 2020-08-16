import AsyncStorage from '@react-native-community/async-storage'

export const reducer = (prevState, action) => {
    switch (action.type){
        case "LOGIN_LOADING":
            return{
                ...prevState,
                isLoginLoading: true,
                isAuthenticated: false,
            }
        case "LOGIN_SUCCESSED":
            AsyncStorage.setItem('@access_token', action.data.token)
            AsyncStorage.setItem('@id', action.data.userInfo.id)
            return {
                ...prevState,
                isLoginLoading: false,
                isAuthenticated: true,
                token: action.data.token,
                userInfo: action.data.userInfo,
            }
        case "LOGIN_FAILED":
            return {
                ...prevState,
                isLoginLoading: false,
                isAuthenticated: false,
                data: action.data
            }
        case "REGISTER_LOADING":
            return {
                ...prevState,
                isRegisterLoading: true,
                isRegisterSuccess: false,
                data: null
            }
        case "REGISTER_SUCCESSED":
            return {
                ...prevState,
                isRegisterLoading: false,
                isRegisterSuccess: true,
                data: null,
            }
        case "REGISTER_FAILED":
            return {
                ...prevState,
                isRegisterLoading: false,
                isRegisterSuccess: false,
                data: action.data,
            }
        case "FORGOT_PASSWORD_LOADING":
            return {
                ...prevState,
                isForgotPasswordLoading: true,
                isForgotPasswordSuccess: false,
                data: null
            }
        case "FORGOT_PASSWORD_SUCCESSED":
            return {
                ...prevState,
                isForgotPasswordLoading: false,
                isForgotPasswordSuccess: true,
                data: null,
            }
        case "FORGOT_PASSWORD_FAILED":
            return {
                ...prevState,
                isForgotPasswordLoading: false,
                isForgotPasswordSuccess: false,
                data: action.data,
            }
        default: 
            throw new Error();
    }
}