import React from 'react-native';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

/* ------------ Default style for item in FlatView or SectionView ----------- */
  item: {
    marginRight: 10,
    marginTop: 10,
    width: 200,
    height: 200,
    backgroundColor: '#F4F4F4',
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
    marginTop: Constants.statusBarHeight,
    margin: 10
  },
});
