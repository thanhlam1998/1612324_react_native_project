import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SectionTopAuthorItem = (props) => {
    return (
        <TouchableOpacity style={styles.touchableView}>
            <Image style={styles.circleImage} source={{uri: props.item.url}}></Image>
            <Text numberOfLines={2}>{props.item.name}</Text>
        </TouchableOpacity>
    )
}

export default SectionTopAuthorItem

const styles = StyleSheet.create({
    touchableView:{
        flexDirection: "column",
        marginRight: 15,
        alignItems: "center"
    },
    circleImage: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius:50,
      }
})
