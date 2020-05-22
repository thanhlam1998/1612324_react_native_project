import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DefaultStyle from '../../../globals/style'
import { ScrollView } from 'react-native-gesture-handler'
import ImageButton from '../../Common/image-button'


const Browse = () => {
    return (
        <ScrollView styles={DefaultStyle.marginForLayout}>
            <ImageButton title="NEW RELEASE"/>
            <ImageButton title="RECOMMEND FOR YOU"/>
        </ScrollView>
    )
}

export default Browse

const styles = StyleSheet.create({})
