import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListPathItem from '../ListPathItem/list-path-item';
import DefaultStyle from '../../../globals/style';
import { FlatList } from 'react-native-gesture-handler';

const ListPath = (props) => {

  return (
    <View style={DefaultStyle.marginForLayout}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.route.params.data}
        renderItem={({ item }) => <ListPathItem item={item} />}
      />
    </View>
  );
};

export default ListPath;

const styles = StyleSheet.create({});
