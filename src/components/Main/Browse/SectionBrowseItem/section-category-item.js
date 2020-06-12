import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageButton from '../../../Common/image-button'

const SectionCategoryItem = (props) => {
    return (
        <View style={styles.item}>
            <ImageButton url={props.item.imageUrl} title={props.title}/>
        </View>
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
