import React, { useContext, useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import { Video } from "expo-av";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import DefaultStyle from "../../globals/style";
import CircleImageButton from "./CourseDetailItem/circle-image-button";
import Content from "./CourseDetailItem/text-content-and-related-button";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Contents from "./Contents/Contents";
import ExpandableText from "../Others/ExpandableText";
import ExpandableView from "../Others/ExpandableView";
import { CourseDetailContext } from "../../provider/course-detail-provider";

const Tab = createMaterialTopTabNavigator();
const win = Dimensions.get("window");
const ratio = win.width / 541;

const CourseDetail = (props) => {
  const courseDetailContext = useContext(CourseDetailContext);
  const [section, setSection] = useState();
  const [isOwn, setIsOwn] = useState();
  const [isLike, setIsLike] = useState();
  const [courseDetail, setCOurseDetail] = useState();
  const [time, setTime] = useState()


  useEffect(() => {
    courseDetailContext.getDetailCourse(props.route.params.item.id);
    courseDetailContext.checkOwnCourse(props.route.params.item.id);
    courseDetailContext.getCourseLikeStatus(props.route.params.item.id);
  }, []);

  useEffect(() => {
    if (courseDetailContext.state.getCourseDetailSuccess === true) {
      setCOurseDetail(courseDetailContext.state.courseDetail.payload);
      setSection(courseDetailContext.state.courseDetail.payload.section);
    } else {
      setSection();
    }
  }, [courseDetailContext.state.getCourseDetailLoading]);
  useEffect(() => {
    if (courseDetailContext.state.checkOwnCourseSuccess) {
      setIsOwn(courseDetailContext.state.ownCourse.payload.isUserOwnCourse);
    }
  }, [courseDetailContext.state.checkOwnCourseLoading]);
  useEffect(() => {
    if (courseDetailContext.state.getCourseLikeStatusSuccess) {
      setIsLike(courseDetailContext.state.courseLike.likeStatus);
    }
  }, [courseDetailContext.state.getCourseLikeStatusLoading]);

  function ContentScreen() {
    return (
      <View style={styles.marginView}>
        <Contents data={section} />
      </View>
    );
  }

  function TranscriptScreen() {
    return (
      <View style={styles.marginView}>
        <Text>{props.route.params.item.transcript}</Text>
      </View>
    );
  }

  const handleGetTime = (playbackStatus) => {
    // setTime(playbackStatus.positionMillis / 1000)
  }

  return (
    <ScrollView>
      {courseDetail && courseDetail.promoVidUrl && (
        <Video
          source={{
            uri: courseDetail.promoVidUrl,
          }}
          onPlaybackStatusUpdate = {handleGetTime}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          isLooping
          shouldPlay
          style={styles.video}
          useNativeControls
        />
      )}
      {courseDetail && !courseDetail.promoVidUrl &&
            courseDetail.imageUrl && (
          <ImageBackground
            style={{ width: win.width, height: 362 * ratio }}
            source={{
              uri: courseDetail.imageUrl,
            }}></ImageBackground>
        )}
      <View style={styles.marginView}>
        {/* title */}
        <Text style={[styles.title, styles.marginTop]}>
          {props.route.params.item.title}
        </Text>

        {/* author */}
        <TouchableOpacity style={[styles.touchable, styles.marginTop]}>
          <Text style={styles.text_color_white}>
            {props.route.params.item["instructor.user.name"] ||
              props.route.params.item.instructorName}
          </Text>
        </TouchableOpacity>

        {!props.route.params.item.instructorName && (
          <View>
            {/* detail */}
            <Text
              style={[
                DefaultStyle.darkText,
                styles.marginTop,
              ]}>{`Yều cầu: ${props.route.params.item.requirement}`}</Text>
            <Text
              style={[
                DefaultStyle.darkText,
                styles.marginTop,
              ]}>{`Ngày cập nhật: ${props.route.params.item.createdAt}`}</Text>
            <Text
              style={[
                DefaultStyle.darkText,
                styles.marginTop,
              ]}>{`Thời gian: ${props.route.params.item.totalHours}h`}</Text>
          </View>
        )}

        {props.route.params.item.instructorName && (
          <View>
            {/* detail */}
            <Text
              style={[DefaultStyle.darkText, styles.marginTop]}>{`Thời lượng: ${
              courseDetail ? courseDetail.totalHours : "0"
            }h`}</Text>
            <Text
              style={[
                DefaultStyle.darkText,
                styles.marginTop,
              ]}>{`Số giờ đã học: ${
              courseDetail
                ? (props.route.params.item.process * courseDetail.totalHours) /
                  100
                : "0"
            }h`}</Text>
          </View>
        )}

        {/* Bookmark - Add To Channel - Download Button */}
        <CircleImageButton
          style={styles.marginTop}
          item={props.route.params.item}
          isLike={isLike}
          setIsLike={setIsLike}
          isOwn={isOwn}
          setIsOwn={setIsOwn}></CircleImageButton>

        {/* Expandable content */}
        <ExpandableText
          style={{ marginTop: 20 }}
          content={props.route.params.item.description || (courseDetail ? courseDetail.description : "")}
          minLines={3}></ExpandableText>

        {/* Take learning check Button & View related path button */}
        <ExpandableView></ExpandableView>
        <View style={styles.marginTop}>
          <Button
            title="View related paths &amp; courses"
            color="#636e72"
            onPress={() => {}}
          />
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen
          name="contents"
          component={ContentScreen}
          options={{ title: "CONTENTS" }}
        />
        <Tab.Screen
          name="transcript"
          component={TranscriptScreen}
          options={{ title: "TRANSCRIPT" }}
        />
      </Tab.Navigator>
    </ScrollView>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width * (9 / 16),
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  touchable: {
    backgroundColor: "#636e72",
    borderRadius: 15,
    opacity: 1,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: "baseline",
  },
  marginView: {
    marginLeft: 10,
    marginRight: 10,
  },
  text_color_white: {
    color: "#fff",
  },
  marginTop: {
    marginTop: 5,
  },
});
