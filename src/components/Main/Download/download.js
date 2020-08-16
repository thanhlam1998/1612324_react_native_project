import React, { useLayoutEffect, useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ListCourseItem from '../../../components/Courses/ListCoursesItem/list-course-item';
import { FlatList } from 'react-native-gesture-handler';
import DefaultStyle from '../../../globals/style';
import MaterialcomunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { myAccountContext } from '../../../../data/MyAccount';
import { CoursesContext } from '../../../../data/Courses';
import { themeContext } from '../../../../data/Theme';
import AsyncStorage from "@react-native-community/async-storage";

const Download = (props) => {
  const {theme} = useContext(themeContext);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <MaterialcomunnityIcons name="account-circle" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialcomunnityIcons name="settings" size={25} />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  /* -------------------------- Get data from context ------------------------- */
  const  [download, setDownload]  = useState([]);


  useEffect(() => {
    getDownload()
  }, [])

  const getDownload = async () => {
    var downloadData = await AsyncStorage.getItem("@downloaded")
    if(downloadData){
      downloadData = await JSON.parse(downloadData)
      setDownload(downloadData)
    }
  }

  const handleRemove = async () => {
    AsyncStorage.removeItem("@downloaded")
    setDownload([])
  }

  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
      marginBottom: 5,
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: 120,
    },
    textColorTheme: {
      color: theme.foreground,
    },
  });
  return (
    <ScrollView style={{backgroundColor: theme.background}}>
      <ScrollView
        style={DefaultStyle.marginForLayout}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.textColorTheme}>
            {download ? download.length : "0"}
            {download && download.length > 1 ? ' courses' : ' course'}
          </Text>
          <TouchableOpacity onPress={handleRemove}>
            <Text style={styles.textColorTheme}>REMOVE ALL ></Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={download}
          renderItem={({ item }) => <ListCourseItem item={item} navigation = {props.navigation}/>}></FlatList>
      </ScrollView>
    </ScrollView>
  );
};

export default Download;
