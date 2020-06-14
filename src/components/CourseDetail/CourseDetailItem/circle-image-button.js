import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {myAccountContext} from '../../../../data/MyAccount'

const CircleImageButton = (props) => {
  const {download, setDownload, myBookmark, setMyBookmark} = useContext(myAccountContext)
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false)
  
  useEffect(() => {
    if(download.includes(props.item.id)){
      setIsDownloaded(true)
    };
    if(myBookmark.includes(props.item.id)){
      setIsBookmarked(true)
    }
  }, [])

  const handleDownload = () => {
    if(isDownloaded){
    } else {
      setDownload([...download, props.item.id])
      setIsDownloaded(true)
    }
  }

  const handleBookmark = () => {
    if(isBookmarked === false){
      setIsBookmarked(true)
      setMyBookmark([...myBookmark, props.item.id])
    }
    if(isBookmarked === true){
      setIsBookmarked(false);
      const bookmarks = myBookmark.filter(item => item !== props.item.id);
      setMyBookmark(bookmarks)
    }
  }

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.touchableView}
                        onPress = {() => handleBookmark()}>
        <View style={styles.circleImage}>
          <Icon name="bookmark" size={20} color="#ffffff"></Icon>
        </View>
        <Text style={styles.text}>{isBookmarked===true ? "Bookmarked" : "Bookmark"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchableView}>
        <View style={styles.circleImage}>
          <Icon name="broadcast-tower" size={20} color="#ffffff"></Icon>
        </View>
        <Text style={styles.text}>Add to Channel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchableView} 
                        onPress={() => handleDownload()}>
        <View style={styles.circleImage}>
          <Icon name="arrow-alt-circle-down" size={20} color="#ffffff"></Icon>
        </View>
        <Text style={styles.text}>{isDownloaded ? "Downloaded" : "Download"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CircleImageButton;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
