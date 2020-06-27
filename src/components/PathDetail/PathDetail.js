import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PathItem from './PathItem/PathItem'

const PathDetail = (props) => {
    return (
        <View>
            <PathItem item={props.route.params.item}/>
        </View>
    )
}

export default PathDetail

const styles = StyleSheet.create({})
