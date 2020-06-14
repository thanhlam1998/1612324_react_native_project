import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ImageButton from '../../../Common/image-button'

const SectionCategoryItem = (props) => {
    return (
        <ScrollView style={styles.item}>
            <ImageButton url={props.item.imageUrl} title={props.item.name} 
            onPress={() => props.navigation.navigate("Topics", {data: props.item})}/>
        </ScrollView>
    )
}

export default SectionCategoryItem

const styles = StyleSheet.create({
    item: {
    width: 200,
    height: 100,
    marginBottom: 5,
    marginRight: 5,
    backgroundColor: '#F4F4F4',
    }
})
