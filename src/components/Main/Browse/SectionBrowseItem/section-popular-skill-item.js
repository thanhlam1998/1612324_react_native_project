import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const PopularSkillItem = (props) => {
  return (
    <TouchableOpacity style={styles.touchable} onclick={() => alert("hi")}>
      <Text style={styles.text}>{props.item.name}</Text>
    </TouchableOpacity>
  );
};

export default PopularSkillItem;

const styles = StyleSheet.create({
    touchable:{
        backgroundColor: "#000000",
        opacity: 0.2,
        borderRadius: 15,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 10
    },
    text: {
        color: "#ffffff"
    }
});
