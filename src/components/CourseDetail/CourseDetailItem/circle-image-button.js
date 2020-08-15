import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {myAccountContext} from '../../../../data/MyAccount'
import { CourseDetailContext } from "../../../provider/course-detail-provider";


const CircleImageButton = (props) => {
  const courseDetailContext = useContext(CourseDetailContext);
  const {download, setDownload, myBookmark, setMyBookmark} = useContext(myAccountContext)
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false)
  
  // useEffect(() => {
  //   console.log(props.courseDetailContext.state)
  // }, [props.courseDetailContext.likeCourseLoading])

  useEffect(() => {
    if(courseDetailContext.state.likeCourseSuccess === true){
      props.setIsLike(!props.isLike)
    }
  }, [courseDetailContext.state.likeCourseLoading])

  useEffect(() => {
    console.log(courseDetailContext.state)
    if(courseDetailContext.state.getFreeCourseSuccess === true){
      props.setIsOwn(!props.isOwn)
    }
  }, [courseDetailContext.state.getFreeCourseLoading])

  const handleLike = () => {
    courseDetailContext.likeCourse(props.item.id)
  }

  const handleSubcribe = () => {
    if(props.isOwn == true){
      return
    } else {
      courseDetailContext.getFreeCourse(props.item.id)
    }
  }

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.touchableView}
                        onPress = {handleLike}>
        <View style={styles.circleImage}>
          <Icon name="bookmark" size={20} color="#ffffff"></Icon>
        </View>
        <Text style={styles.text}>{props.isLike===true ? "Đã thích" : "Thích"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchableView} onPress={handleSubcribe}>
        <View style={styles.circleImage}>
          <Icon name="broadcast-tower" size={20} color="#ffffff"></Icon>
        </View>
        <Text style={styles.text}>{props.isOwn===true ? "Đã đăng kí" : "Đăng kí"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchableView} 
                        >
        <View style={styles.circleImage}>
          <Icon name="arrow-alt-circle-down" size={20} color="#ffffff"></Icon>
        </View>
        <Text style={styles.text}>{isDownloaded ? "Đã tải về" : "Tải về"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CircleImageButton;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  touchableView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  circleImage: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#636e72',
    borderRadius: 50,
  },
  text: {
      marginTop: 5,
      fontWeight: "bold"
  },
});
