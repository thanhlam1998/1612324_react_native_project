import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const LessonItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>{props.item.title}</Text>
            <Text>{props.item.duration}</Text>
        </TouchableOpacity>
    )
}

export default LessonItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    }
})
