import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchView from "../../Common/search-view";
import DefaultStyle from "../../../globals/style";
import { themeContext } from "../../../../data/Theme";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SearchContext } from "../../../provider/search-provider";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CourseItem from "./course-item";
import AuthorItem from "./author-item";

const Tab = createMaterialTopTabNavigator();
const Search = (props) => {
  const { theme } = useContext(themeContext);
  const searchContext = useContext(SearchContext);
  const [text, setText] = useState();
  const [result, setResult] = useState();
  const [searchHistory, setSearchHistory] = useState();

  const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 5,
      marginBottom: 5,
    },
    textColorTheme: {
      color: theme.foreground,
    },
    layoutHorizontal: {
      flexDirection: "row",
      justifyContent: "space-between"
    }
  });

  const handleRemove = (item) => {
    const {id} = item
    searchContext.deleteHistory(id)
    setSearchHistory(searchHistory.filter(function(searchItem){return searchItem.id !== item.id}))
  };

  function All() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: theme.background }}>
          <View style={DefaultStyle.marginForLayout}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={result.courses.data ? result.courses.data : []}
              renderItem={({ item }) => (
                <CourseItem item={item} navigation={props.navigation} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  function Courses() {
    return (
      <ScrollView style={{ backgroundColor: theme.background }}>
        <View style={DefaultStyle.marginForLayout}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={result.courses.data ? result.courses.data : []}
            renderItem={({ item }) => (
              <CourseItem item={item} navigation={props.navigation} />
            )}
          />
        </View>
      </ScrollView>
    );
  }

  function Instructor() {
    return (
      <ScrollView style={{ backgroundColor: theme.background }}>
        <View style={DefaultStyle.marginForLayout}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={result.instructors.data || ""}
            renderItem={({ item }) => (
              <AuthorItem item={item} navigation={props.navigation} />
            )}
          />
        </View>
      </ScrollView>
    );
  }

  useEffect(() => {
    if (text === "" || !text) {
      searchContext.searchHistory();
      setResult();
    }
  }, [text]);

  useEffect(() => {
    if (searchContext.state.searchHistorySuccess) {
      setSearchHistory(searchContext.state.history.payload.data);
    }
  }, [searchContext.state.searchHistoryLoading]);

  useEffect(() => {
    if (searchContext.state.searchSuccess) {
      setResult(searchContext.state.result.payload);
    }
  }, [searchContext.state.searchLoading]);

  const handleSearch = () => {
    if (text) {
      searchContext.search(text);
    }
  };
  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      <View style={DefaultStyle.marginForLayout}>
        <SearchView onPress={handleSearch} setText={setText} />
      </View>
      {result && result.instructors.data == "" && result.courses.data == "" && (
        <View style={DefaultStyle.marginForLayout}>
          <Text style={{ color: theme.foreground }}>
            Không tìm thấy kết quả tìm kiếm
          </Text>
        </View>
      )}
      {result && (result.instructors.data != "" || result.courses.data != "") && (
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: theme.background,
            },
            labelStyle: {
              color: theme.foreground,
            },
            indicatorStyle: {
              backgroundColor: theme.foreground,
            },
          }}>
          <Tab.Screen
            name="All"
            component={All}
            options={{ title: "TẤT CẢ" }}
          />
          <Tab.Screen
            name="Course"
            component={Courses}
            options={{ title: "KHÓA HỌC" }}
          />
          <Tab.Screen
            name="Author"
            component={Instructor}
            options={{ title: "GIẢNG VIÊN" }}
          />
        </Tab.Navigator>
      )}
      {!result && (
        <ScrollView
          style={DefaultStyle.marginForLayout}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.textColorTheme}>Search history</Text>
          </View>
          <FlatList
            data={searchHistory}
            renderItem={({ item }) => (
              <View style={styles.layoutHorizontal}>
                <TouchableOpacity>
                  <Text style={{ color: theme.foreground }}>
                    {item.content}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRemove(item)}>
                  <Text style={{ color: theme.foreground }}>remove</Text>
                </TouchableOpacity>
              </View>
            )}></FlatList>
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default Search;
