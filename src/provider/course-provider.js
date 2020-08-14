import React, { useState, useReducer } from 'react'
import {reducer} from '../reducer/course-reducer'
import {getTopSellCourse} from '../action/course-action'

export const CourseContext = React.createContext()

const initialState = {
    getTopSellLoading: false,
    getTopSellSuccess: false,
    topSell: null
}

const CourseProvider = (props) => {
    // const [authentication, setAuthentication] = useState()
    const [state, dispatch] = useReducer(reducer, initialState)
    return <CourseContext.Provider value = {{state, getTopSell: getTopSellCourse(dispatch)}}>
        {props.children}
    </CourseContext.Provider>
}

export default CourseProvider