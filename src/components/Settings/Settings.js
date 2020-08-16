import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import DefaultStyle from '../../globals/style'
import {themeContext} from '../../../data/Theme'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


const Settings = (props) => {
    const {theme, setTheme, themes} = useContext(themeContext)
    const [isEnabled, setIsEnabled] = useState(false)
    const [themeText, setThemeText] = useState()
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }
        
    const styles = StyleSheet.create({
        textThemeColor:{
            color: theme.foreground,
        },
        text: {
            fontWeight: "400",
            fontSize: 18
        },
        horizontal: {
            flexDirection: "row",
            justifyContent: "space-between"
        }
    })

    useEffect(() => {
        if(theme === themes.dark){
            setIsEnabled(false)
        } else {
            setIsEnabled(true)
        }
    }, [])

    useEffect(() => {
        if(isEnabled){
            setThemeText('Light')
            setTheme(themes.light)
        } else {
            setThemeText("Dark")
            setTheme(themes.dark)
        }
    }, [isEnabled])

    const SwitchButton = () => {
        return (
            <Switch 
                trackColor={{ false: "#222222", true: "#74b9ff" }}
                thumbColor={isEnabled ? "#0984e3" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}/>
        )
    }

    const signOut = () => {
        props.navigation.navigate("loginScreen")
    }

    return (
        <ScrollView style={{backgroundColor: theme.background}}>
            <View style={[DefaultStyle.marginForLayout, {marginTop: 10}]}> 
                <View style={styles.horizontal}>
                    <View>
                        <Text style={[styles.textThemeColor, styles.text]}>Change theme</Text>
                        <Text style={DefaultStyle.darkText}>{themeText}</Text>
                    </View>
                    <SwitchButton/>
                </View>
                <TouchableOpacity onPress={signOut}>
                    <Text style={{color: theme.foreground, marginTop: 20}}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Settings

