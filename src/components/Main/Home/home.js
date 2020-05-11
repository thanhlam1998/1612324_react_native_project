import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SectionCourse from './SectionCourse/section-course'
import ImageButton from '../../Common/image-button'

const Home = (props) => {
    const onPressNewReleases = () => {
        alert('Press on new release')
    }
    return (
        <ScrollView>
            <ImageButton title='NEW RELEASES' onPress={onPressNewReleases}></ImageButton>
            <SectionCourse title='Continue learning'/>
            <SectionCourse title='Path'/>
            <SectionCourse title='Channel'/>
            <SectionCourse title='Bookmarks'/>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})
