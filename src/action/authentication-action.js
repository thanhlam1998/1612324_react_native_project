import axios from 'axios'

const baseApi = "https://api.itedu.me/user/"

export const login = dispatch = (username, password) => {
    axios.post(`${baseApi}/login`, {
        email: username,
        password: password
    }).then((res) => {
        if(res.status === 200){
            dispatch({type: "LOGIN_SUCCESS", data: res.data})
        } else {
            dispatch({type: "LOGIN_FAILED"})
        }
    }).catch((error) => {
        dispatch({type: "LOGIN_FAILED"})
    })

}