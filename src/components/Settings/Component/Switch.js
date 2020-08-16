import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Switch = (props) => {
    return (
        <Switch 
                trackColor={{ false: "#222222", true: "#74b9ff" }}
                thumbColor={props.isEnabled ? "#0984e3" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={props.toggleSwitch}
                value={props.isEnabled}/>
    )
}

export default Switch

const styles = StyleSheet.create({})
