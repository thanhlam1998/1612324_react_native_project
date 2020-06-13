import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import ListAuthorItem from '../ListAuthorsItem/list-author-item';
import DefaultStyle from '../../../globals/style';
import { FlatList } from 'react-native-gesture-handler';

const ListAuthors = (props) => {

  return (
    <View style={DefaultStyle.marginForLayout}>
       <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.data}
            renderItem={({ item }) => <ListAuthorItem item={item} />}
          />
    </View>
  );
};

export default ListAuthors;

const styles = StyleSheet.create({});
