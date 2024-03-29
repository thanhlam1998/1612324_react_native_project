import React from 'react'
import { View, Text, FlatList } from 'react-native'
import TopicItem from './TopicItem/TopicItem'

const Contents = (props) => {
    return (
        <View>
            <FlatList 
                data={props.data}
                renderItem={({ item, index }) => <TopicItem item={item} index={index} onPress = {props.onPress}/>}/>
        </View>
    )
}

export default Contents
