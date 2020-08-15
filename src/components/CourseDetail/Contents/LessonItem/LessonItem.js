import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const LessonItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>{props.item.name}</Text>
            <Text>{`${props.item.hours}h`}</Text>
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
