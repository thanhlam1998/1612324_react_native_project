import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {themeContext} from '../../../../data/Theme'

const ListAuthorItem = (props) => {
    const {theme} = useContext(themeContext)
    return (
        <TouchableOpacity style={styles.touchableView}>
            <Image style={styles.circleImage} source={{uri: props.item.imageUrl || "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"}}></Image>
            <Text numberOfLines={2} style={{color: theme.foreground}}>{props.item.name}</Text>
        </TouchableOpacity>
    )
}

export default ListAuthorItem

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
        width:70,
        height:70,
        backgroundColor:'#fff',
        borderRadius:50,
      }
})
