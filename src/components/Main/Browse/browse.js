import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DefaultStyle from '../../../globals/style'
import { ScrollView } from 'react-native-gesture-handler'
import ImageButton from '../../Common/image-button'
import SectionBrowse from '../Browse/SectionBrowse/section-browse'


const Browse = () => {
    const titles = [
        '',
        'Popular Skills',
        'Paths',
        'Top Authors'
    ]   
    return (
        <ScrollView style={DefaultStyle.marginForLayout}>
            <ImageButton title="NEW RELEASE" url={"https://www.conceptdata.co.uk/images/blog/blog-flat-wallpapers.gif"}/>
            <ImageButton title="RECOMMEND FOR YOU" url={"https://hd-background.com/wp-content/uploads/2019/12/blue-vector-wallpaper-7216-hd-wallpapers.jpg"}/>
            {titles.map((title, key) => (
            <SectionBrowse key={key} title={title} />
            ))}
        </ScrollView>
    )
}

export default Browse

const styles = StyleSheet.create({})
