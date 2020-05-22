import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListChannelItem from '../ListChannelItem/list-channel-item';
import DefaultStyle from '../../../globals/style';
import { FlatList } from 'react-native-gesture-handler';

const ListChannel = (props) => {
    const featureChannels = [
        {
          title: 'Microsoft Azure Developers',
          author: 'Pluralsight + Microsoft',
          total: 8227,
        },
        {
          title: 'Microsoft Azure Solution Architects',
          author: 'Pluralsight + Microsoft',
          total: 12481,
        },
        {
          title: 'Microsoft Azure Devops Engineers',
          author: 'Pluralsight + Microsoft',
          total: 2208,
        },
        {
          title: '.NET Developer on Microsoft Azure',
          author: 'Pluralsight + Microsoft',
          total: 689,
        },
        {
          title: 'Node.js Developer on Microsoft Azure',
          author: 'Pluralsight + Microsoft',
          total: 226,
        },
      ];
    

  return (
    <View style={DefaultStyle.marginForLayout}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={featureChannels}
        renderItem={({ item }) => <ListChannelItem item={item} />}
      />
    </View>
  );
};

export default ListChannel;

const styles = StyleSheet.create({});
