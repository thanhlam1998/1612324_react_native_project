import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SectionTopics from './SectionTopics/SectionTopics'

const Topics = (props) => {
  const data = props.route.params.data;
  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: !data.imageUrl
            ? 'https://image.freepik.com/free-vector/futuristic-technology-background-with-honeycombs_23-2148481277.jpg'
            : data.imageUrl,
        }}
        style={styles.image}>
        <View style={styles.view}>
          <Text style={styles.text}>{data.name}</Text>
        </View>
      </ImageBackground>
        <SectionTopics data={data} navigation={props.navigation}/>
    </ScrollView>
  );
};

export default Topics;

const styles = StyleSheet.create({
  image: {
    height: 200,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
