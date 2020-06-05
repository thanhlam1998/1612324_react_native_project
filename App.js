import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './src/components/Main/Home/home';
import Constants from 'expo-constants';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import ListCourseDetail from './src/components/CourseDetail/course-detail';
import ListPaths from './src/components/Paths/ListPaths/list-paths';
import ListChannels from './src/components/Channels/ListChannels/list_channels';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import Download from './src/components/Main/Download/download';
import Browse from './src/components/Main/Browse/browse';
import Search from './src/components/Main/Search/search';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenKey } from './src/globals/constants';
import SplashScreen from './src/components/SplashScreen/SplashScreen';
import LoginScreen from './src/components/LoginScreen/LoginScreen';
import Profile from './src/components/AccountManagement/Account/profile'

/* ----------------------------------- -- ----------------------------------- */
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MainNavigationStack = createStackNavigator();

/* -------------------------------------------------------------------------- */
/*                      4 stacks in Bottom Tab Navigation                     */
/* -------------------------------------------------------------------------- */

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ListCourse"
        component={ListCourses}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="ListPaths"
        component={ListPaths}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="ListChannels"
        component={ListChannels}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen name="CourseDetail" component={ListCourseDetail} />
    </Stack.Navigator>
  );
}
function DownLoadStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Download" component={Download} />
    </Stack.Navigator>
  );
}
function BrowseStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Browse" component={Browse} />
    </Stack.Navigator>
  );
}
function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}


/* -------------------------------------------------------------------------- */
/*                          Main bottom tab navigator                         */
/* -------------------------------------------------------------------------- */

const MainTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeStack} />
      <BottomTab.Screen name="Download" component={DownLoadStack} />
      <BottomTab.Screen name="Browse" component={BrowseStack} />
      <BottomTab.Screen name="Search" component={SearchStack} />
    </BottomTab.Navigator>
  );
};


/* -------------------------------------------------------------------------- */
/*     Navigator for all app include: splash screen, login and main screen    */
/* -------------------------------------------------------------------------- */

const MainNavigation = () => {
  return (
    <MainNavigationStack.Navigator>
      <MainNavigationStack.Screen
        name={ScreenKey.SplashScreen}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <MainNavigationStack.Screen
        name={ScreenKey.LoginScreen}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <MainNavigationStack.Screen
        name={ScreenKey.MainTabScreen}
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      <MainNavigationStack.Screen
        name={ScreenKey.ProfileScreen}
        component={Profile}
        options={{title: "Profile"}}/>
    </MainNavigationStack.Navigator>
  );
};




export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
