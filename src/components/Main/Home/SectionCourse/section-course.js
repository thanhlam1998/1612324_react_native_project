import React, {
  useContext,
  useEffect,
  useRef,
  useLayoutEffect,
  useState,
} from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import SectionCoursesItem from "../SectionItem/section-courses-item";
import SectionMyCourseItem from "../SectionItem/setion-my-course-item";
import SectionPathItem from "../../Browse/SectionBrowseItem/section-path-item";
import SectionFeatureChannel from "../SectionItem/section-feature-channel";
import SectionMyChannel from "../SectionItem/section-my-channel";
import { HomeTitle } from "../../../../globals/constants";

/* ----------------------------- Import Context ----------------------------- */
import { CoursesContext } from "../../../../../data/Courses";
import { bigTopicsContext } from "../../../../../data/BigTopics";
import { myAccountContext } from "../../../../../data/MyAccount";
import { pathContext } from "../../../../../data/Paths";
import { themeContext } from "../../../../../data/Theme";
import style from "../../../../globals/style";

import { CourseContext } from "../../../../provider/course-provider";
const defaultLimit = 100;

const SectionCourses = (props) => {
  var data, allData;
  const courseContext = useContext(CourseContext);

  const [topSell, setTopSell] = useState();
  const [topNew, setTopNew] = useState();
  const [topRate, setTopRate] = useState();
  const [myCourse, setMyCourse] = useState();
  const [favoriteCourse, setFavoriteCourse] = useState();
  const courses = useContext(CoursesContext);
  const bigsTopic = useContext(bigTopicsContext);
  const paths = useContext(pathContext);
  const { myPath, myBookmark } = useContext(myAccountContext);
  const { theme } = useContext(themeContext);

  const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    textThemeColor: {
      color: theme.foreground,
      marginTop: 10,
    },
  });

  useEffect(() => {
    if (props.title === HomeTitle.TopSell) {
      courseContext.getTopSell(defaultLimit);
    }
    if (props.title === HomeTitle.TopNew) {
      courseContext.getTopNew(defaultLimit);
    }
    if (props.title === HomeTitle.TopRate) {
      courseContext.getTopRate(defaultLimit);
    }
    if (props.title === HomeTitle.MyCourse) {
      courseContext.getMyCourse(defaultLimit);
    }
    if (props.title === HomeTitle.MyFavoriteCourse) {
      courseContext.getFavoriteCourse(defaultLimit);
    }
  }, []);

  //get top sell 
  useEffect(() => {
    if (courseContext.state.getTopSellSuccess === true) {
      setTopSell(courseContext.state.topSell.payload);
    }
  }, [courseContext.state.getTopSellLoading]);

   //get top new 
  useEffect(() => {
    if (courseContext.state.getTopNewSuccess === true) {
      setTopNew(courseContext.state.topNew.payload);
    }
  }, [courseContext.state.getTopNewLoading]);

   //get top rate 
  useEffect(() => {
    if (courseContext.state.getTopRateSuccess === true) {
      setTopRate(courseContext.state.topRate.payload);
    }
  }, [courseContext.state.getTopRateLoading]);

   //get my course 
  useEffect(() => {
    if (courseContext.state.getMyCourseSuccess === true) {
      setMyCourse(courseContext.state.myCourse.payload);
    }
  }, [courseContext.state.getMyCourseLoading]);

   //get favorite course 
  useEffect(() => {
    if (courseContext.state.getFavoriteCourseSuccess === true) {
      setFavoriteCourse(courseContext.state.favoriteCourse.payload);
    }
  }, [courseContext.state.getFavoriteCourseLoading]);

  switch (props.title) {
    case HomeTitle.TopSell:
      allData = topSell;
      break;
    case HomeTitle.TopNew:
      allData = topNew;
      break;
    case HomeTitle.TopRate:
      allData = topRate;
      break;
    case HomeTitle.MyCourse:
      allData = myCourse;
      break;
    case HomeTitle.MyFavoriteCourse:
      allData = favoriteCourse;
      break;
  }
  if (allData) {
    data = allData.slice(0, 5);
  }

  return (
    <View>
      {(props.title === HomeTitle.TopSell ||
        props.title === HomeTitle.TopNew ||
        props.title === HomeTitle.TopRate) && (
        <View>
          <View style={styles.header}>
            <Text style={styles.textThemeColor}>{props.title}</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("ListCourse", {
                  name: props.title,
                  data: allData,
                });
              }}>
              <Text style={styles.textThemeColor}>Xem thêm ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            renderItem={({ item }) => (
              <SectionCoursesItem navigation={props.navigation} item={item} />
            )}></FlatList>
        </View>
      )}
      {props.title === HomeTitle.MyCourse && (
        <View>
          <View style={styles.header}>
            <Text style={styles.textThemeColor}>{props.title}</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("ListCourse", {
                  name: props.title,
                  data: allData,
                });
              }}>
              <Text style={styles.textThemeColor}>Xem thêm ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            renderItem={({ item }) => (
              <SectionMyCourseItem navigation={props.navigation} item={item} />
            )}></FlatList>
        </View>
      )}
      {/* {props.title === HomeTitle.MyPath && (
        <View>
          <View style={styles.header}>
            <Text style={styles.textThemeColor}>{props.title}</Text>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("ListPaths", {
                  name: props.title,
                  data: allData,
                })
              }>
              <Text style={styles.textThemeColor}>Xem thêm ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item }) => (
              <SectionPathItem item={item} navigation={props.navigation} />
            )}></FlatList>
        </View>
      )} */}
      {props.title === HomeTitle.MyFavoriteCourse && (
        <View>
          <View style={styles.header}>
            <Text style={styles.textThemeColor}>{props.title}</Text>
            <TouchableOpacity>
              <Text style={styles.textThemeColor}>Xem thêm ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item }) => (
              <SectionMyCourseItem navigation={props.navigation} item={item} />
            )}></FlatList>
        </View>
      )}
    </View>
  );
};

export default SectionCourses;
