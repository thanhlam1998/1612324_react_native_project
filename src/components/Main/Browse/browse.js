import React, { useLayoutEffect, useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../globals/style';
import { ScrollView } from 'react-native-gesture-handler';
import ImageButton from '../../Common/image-button';
import SectionBrowse from '../Browse/SectionBrowse/section-browse';
import MaterialcomunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {BrowseTitle} from '../../../globals/constants'
import {themeContext} from '../../../../data/Theme'
import {BrowseContext} from "../../../provider/browse-provider";


const Browse = (props) => {
  const {theme} = useContext(themeContext)
  const browseContext = useContext(BrowseContext)

  const [data, setData] = useState()
  const [suggestedCourse, setSuggestedCourse] = useState()

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

  useEffect(() => {
    if(browseContext.state.getAllCategorySuccess){
      setData(browseContext.state.category.payload)
    }
  }, [browseContext.state.getAllCategoryLoading])

  useEffect(() => {
    if(browseContext.state.getSuggestedCourseSuccess === true){
      setSuggestedCourse(browseContext.state.suggestedCourse.payload)
    }
  }, [browseContext.state.getSuggestedCourseLoading])

  useEffect(() => {
    browseContext.getAllCategory()
    browseContext.getSuggestedCourse()
  }, [])

  const handleSuggestedCourse = () => {
    props.navigation.navigate("ListCourse", {
      name: "Khóa học gợi ý",
      data: suggestedCourse
    })
  }

  const titles = [''];
  return (
    <ScrollView style={{backgroundColor: theme.background}}>
      <ScrollView
        style={DefaultStyle.marginForLayout}
        showsVerticalScrollIndicator={false}>
        <ImageButton
          onPress = {handleSuggestedCourse}
          title="GỢI Ý KHÓA HỌC CHO BẠN"
          url={
            'https://hd-background.com/wp-content/uploads/2019/12/blue-vector-wallpaper-7216-hd-wallpapers.jpg'
          }
        />
        {titles.map((title, key) => (
          <SectionBrowse navigation={props.navigation} key={key} title={title} data={data}/>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Browse;

const styles = StyleSheet.create({
    iconContainer:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 120
    }
});
