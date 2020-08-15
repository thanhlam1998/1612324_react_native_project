import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MaterialcomunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ExpandableText = (props) => {
    const [expand, setExpand] = useState(false)
    return (
        <View style={styles.flatListCell}>
              <Text
                numberOfLines={expand===true ? undefined : props.minLines}
                style={styles.description}>
                {props.content}
              </Text>
              <TouchableOpacity
                onPress={() => setExpand(expand => !expand)}
                style={{backgroundColor: "#636E72", justifyContent:"center"}}>
                    <MaterialcomunnityIcons name="chevron-down" color={"#ffffff"} size={25}/>
              </TouchableOpacity>
        </View>
    )
}

export default ExpandableText

const styles = StyleSheet.create({
    flatListCell: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight:10,
        marginTop: 20
    }
})
