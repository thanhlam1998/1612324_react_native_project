import axios from 'axios'

const baseApi = "https://api.itedu.me/user"


export const login = (dispatch) => (username, password) => {
    var data = JSON.stringify({"email":username,"password":password});
    var config = {
    method: 'post',
    url: 'https://api.itedu.me/user/login',
    headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    data : data
    };
    axios(config).then((res) => {
        if(res.status === 200){
            dispatch({type: "LOGIN_SUCCESSED", data: JSON.stringify(res.data)})
        } else {
            dispatch({type: "LOGIN_FAILED"})
        }
    }).catch((error) => {
        dispatch({type: "LOGIN_FAILED"})
    })
}

export const register = (dispatch) => (username, email, phone, password) => {
    var data = JSON.stringify({"username": username, 'email': email, 'phone': phone, "password": password});
    var config = {
    method: 'post',
    url: 'https://api.itedu.me/user/register',
    headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    data : data
    };
    axios(config).then((res) => {
        if(res.status === 200){
            dispatch({type: "REGISTER_SUCCESSED", data: JSON.stringify(res.data)})
        } else {
            dispatch({type: "REGISTER_FAILED", data: JSON.stringify(res.data)})
        }
    }).catch((error) => {
        dispatch({type: "REGISTER_FAILED", data: JSON.stringify(error)})
    })
}