import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import LessonItem from '../LessonItem/LessonItem'

const LessonList = (props) => {
    return (
        <View>
            <FlatList 
                data={props.data}
                renderItem={({ item }) => <LessonItem item={item} onPress = {() => props.onPress(item.id)}/>}/>
        </View>
    )
}

export default LessonList

const styles = StyleSheet.create({
})


