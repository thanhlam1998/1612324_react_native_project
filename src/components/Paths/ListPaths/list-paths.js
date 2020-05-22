import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListPathItem from '../ListPathItem/list-path-item';
import DefaultStyle from '../../../globals/style';
import { FlatList } from 'react-native-gesture-handler';

const ListPath = (props) => {
  const featurePaths = [
    {
      title: 'Visual Studio',
      total: 10,
    },
    {
      title: 'Apllication Development on Microsoft Azure',
      total: 9,
    },
    {
      title: 'Angular',
      total: 14,
    },
    {
      title: 'Designing Microsoft Azure Applications',
      total: 8,
    },
    {
      title: 'C# Development Fundamental',
      total: 14,
    },
  ];

  return (
    <View style={DefaultStyle.marginForLayout}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={featurePaths}
        renderItem={({ item }) => <ListPathItem item={item} />}
      />
    </View>
  );
};

export default ListPath;

const styles = StyleSheet.create({});
