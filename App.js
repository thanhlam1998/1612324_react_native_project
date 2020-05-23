import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Main/Home/home'
import Constants from 'expo-constants'
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import ListPaths from './src/components/Paths/ListPaths/list-paths'
import ListChannels from './src/components/Channels/ListChannels/list_channels'
import NavigationContainer from '@react-navigation/native/src/NavigationContainer'
import Download from './src/components/Main/Download/download'
import Browse from './src/components/Main/Browse/browse'
import Search from './src/components/Main/Search/search'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="ListCourse" component={ListCourses} options={({route}) => ({title: route.params.name})}/>
      <Stack.Screen name="ListPaths" component={ListPaths} options={({route}) => ({title: route.params.name})}/>
      <Stack.Screen name="ListChannels" component={ListChannels} options={({route}) => ({title: route.params.name})}/>
    </Stack.Navigator>
  )
}

function DownLoadStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Download" component={Download}/>
    </Stack.Navigator>
  )
}

function BrowseStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Browse" component={Browse}/>
    </Stack.Navigator>
  )
}

function SearchStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component = {HomeStack} />
        <BottomTab.Screen name="Download" component = {DownLoadStack} />
        <BottomTab.Screen name="Browse" component = {BrowseStack} />
        <BottomTab.Screen name="Search" component = {SearchStack} />
      </BottomTab.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Home />
    //   {/* <ListCourses /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
