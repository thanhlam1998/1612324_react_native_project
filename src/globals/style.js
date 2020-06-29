import React from 'react-native';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  /* ------------ Default style for item in FlatView or SectionView ----------- */
  item: {
    marginRight: 10,
    marginTop: 10,
    width: 200,
    backgroundColor: '#222222',
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
  },
  darkText: {
    color: '#888888',
  },
  title: {
    fontSize: 16,
  },
  contentMargin: {
    margin: 5,
  },

  /* ------------------------ Default margin for layout with status bar ----------------------- */
  marginForLayout: {
    marginLeft: 10,
    marginRight: 10,
  },

  /* -- Default style for item in FlatView, SectionView with horizontal view -- */
  item_horizontal: {
    flexDirection: 'row',
    margin: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  item_horizontal_image: {
    width: 100,
    height: 50,
  },
});
