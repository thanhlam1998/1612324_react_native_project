import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
import { StyleSheet} from 'react-native'
const AccordionHeaderContentStyleExample = (props) => {
    const dataArray = [
        { title: "Content", content: props.content},
      ];
    const _renderHeader = (item, expanded) => {
        return (
          <View style={{
            flexDirection: "row",
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: "space-between",
            alignItems: "center" ,
            backgroundColor: "#636e72" }}>
          <Text style={{ fontWeight: "600", fontFamily:"Roboto", color: "#ffffff"}}>
              {" "}{item.title}
            </Text>
            {expanded
              ? <Icon style={{ fontSize: 18, color: "#ffffff" }} name="remove-circle" />
              : <Icon style={{ fontSize: 18, color: "#ffffff" }} name="add-circle" />}
          </View>
        );
      }
     const _renderContent = (item) => {
        return (
          <Text
            style={{
              backgroundColor: "#ffffff",
              fontFamily: "Roboto",
              padding: 10,
            }}
          >
            {item.content}
          </Text>
        );
      }
    return (
        <View style={styles.marginTop}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader =  {_renderHeader}
            renderContent = {_renderContent}
          />
        </View>
    );
}


export default AccordionHeaderContentStyleExample

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 15,
  }
})
