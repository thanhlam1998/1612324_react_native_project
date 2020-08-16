import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import DefaultStyle from '../../globals/style'
import PathItem from './PathItem/PathItem'
import ListCourseItem from '../Courses/ListCoursesItem/list-course-item'
import ExpandableText from '../Others/ExpandableText'
import { CoursesContext } from '../../../data/Courses'

const PathDetail = (props) => {
    const path = props.route.params.item
    const courses  = useContext(CoursesContext)
    const data = courses.filter(item => path.courses.includes(item.id))
    return (
        <View style={DefaultStyle.marginForLayout}>
            <PathItem item={path}/>
            <ExpandableText minLines={6} content={path.description}/>
            <Text style={styles.textStyle}>COURSES</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => <ListCourseItem item={item} navigation={props.navigation}/>}
            />
        </View>
    )
}

export default PathDetail

const styles = StyleSheet.create({
    textStyle: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: "bold"
    }
})
