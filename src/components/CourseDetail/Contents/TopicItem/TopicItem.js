import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import LessonList from '../LessonList/LessonList'
import style from '../../../../globals/style'

const TopicItem = (props) => {
    return (
        <View style={styles.borderBottom}>
            <View style={styles.itemHorrizontal}>
                <View style={styles.imageSize}>
                    <Text style={styles.text}>{props.index + 1}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>{props.item.name}</Text>
                    <Text style={styles.darkText}>{`${props.item.sumHours}h`}</Text>
                </View>
            </View>
            <LessonList data={props.item.lesson}/>
        </View>
    )
}

export default TopicItem

const styles = StyleSheet.create({
    imageSize: {
        width: 50,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#222222",
    }, 
    itemHorrizontal: {
        flexDirection: 'row',
        margin: 5,
    },
    borderBottom: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    container: {
        flexGrow: 1,
        flex: 1,
        marginLeft:5,
        marginBottom: 5 
    },
    title: {
        fontSize: 15
    },
    darkText: {
        color: "#888888"
    }, 

    text:{
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    }
})
