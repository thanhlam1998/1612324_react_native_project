import React, { useState, useReducer } from 'react'
import {reducer} from '../reducer/authentication-reducer'
import {login} from '../action/authentication-action'

export const AuthenticationContext = React.createContext()

const initialState = {
    isAuthenticated : false,
    userInfo: null,
    token: null
}

const AuthenticationProvider = (props) => {
    // const [authentication, setAuthentication] = useState()
    const [state, dispatch] = useReducer(reducer, initialState)
    return <AuthenticationContext.Provider value = {{state, login: login(dispatch)}}>
        {props.children}
    </AuthenticationContext.Provider>
}

export default AuthenticationProvider
