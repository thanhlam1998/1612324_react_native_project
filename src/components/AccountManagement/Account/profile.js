import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const profile = (props) => {
    return (     
        <View >
            <Text></Text>
        </View>
    )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    textInput: {
        height: 40,
        marginTop: 20,
        textAlign: "center",
        width: "90%",
        borderColor: "gray",
        borderWidth: 1
    }
})
