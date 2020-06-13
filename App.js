import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
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
import style from './src/globals/style';
import MaterialcomunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

/* ----------------------------- Import context ----------------------------- */
import {CoursesContext, courses} from './data/Courses'
import {themeContext, themes} from './data/Theme'
import {bigTopicsContext, softwareDevelopment, ITOperations, DataProfessional, Conferences, InformationSecurity, BusinessProfessional, CreatetiveProfessional, 
  ManufactoringAndDesign, ArchitectureAndConstruction, Certifications} from './data/BigTopics'
import {skillsContext, skills, popularSkills} from './data/Skills'
import {authorsContext, authors, topAuthors} from './data/Authors'
import {pathContext, paths} from './data/Paths'

/* -------------------------------------------------------------------------- */
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MainNavigationStack = createStackNavigator();

/* -------------------------------------------------------------------------- */
/*                      4 stacks in Bottom Tab Navigation                     */
/* -------------------------------------------------------------------------- */

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
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
      <Stack.Screen name="CourseDetail" component={ListCourseDetail} options={{headerTransparent: true, headerTitle: false}} />
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
      <BottomTab.Screen name="Home" component={HomeStack} 
        options={{tabBarIcon: () => (<MaterialcomunnityIcons name="home-outline" color={"#222222"} size={25}/>)}}/>
      <BottomTab.Screen name="Download" component={DownLoadStack} 
       options={{ tabBarIcon: () => (<MaterialcomunnityIcons name="download" color={"#222222"} size={25}/>)}}/>
      <BottomTab.Screen name="Browse" component={BrowseStack} 
      options={{tabBarIcon: () => (<MaterialcomunnityIcons name="grid" color={"#222222"} size={25}/>)}}/>
      <BottomTab.Screen name="Search" component={SearchStack} 
      options={{tabBarIcon: () => (<MaterialcomunnityIcons name="magnify" color={"#222222"} size={25}/>)}}/>
    </BottomTab.Navigator>
  );
};


/* -------------------------------------------------------------------------- */
/*     Navigator for all app include: splash screen, login and main screen    */
/* -------------------------------------------------------------------------- */

const MainNavigation = () => {
  return (
    <MainNavigationStack.Navigator>
      {/* <MainNavigationStack.Screen
        name={ScreenKey.SplashScreen}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <MainNavigationStack.Screen
        name={ScreenKey.LoginScreen}
        component={LoginScreen}
        options={{ headerShown: false }}
      /> */}
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
  const [theme, setTheme] = useState(themes.light);
  return (
    <themeContext.Provider value={{theme, setTheme}}>
      <CoursesContext.Provider value={courses}>
        <authorsContext.Provider value={{authors, topAuthors}}>
          <bigTopicsContext.Provider value={{Conferences, ITOperations, DataProfessional, CreatetiveProfessional, ArchitectureAndConstruction,
          softwareDevelopment, InformationSecurity, BusinessProfessional, ManufactoringAndDesign, Certifications}}>
            <skillsContext.Provider value = {{skills, popularSkills}}>
              <pathContext.Provider value={paths}>
                <NavigationContainer>
                  <MainNavigation/>
                </NavigationContainer>
              </pathContext.Provider>
            </skillsContext.Provider>
          </bigTopicsContext.Provider>
        </authorsContext.Provider>
      </CoursesContext.Provider>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
