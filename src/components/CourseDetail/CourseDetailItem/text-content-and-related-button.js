import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
import { StyleSheet} from 'react-native'
const AccordionHeaderContentStyleExample = () => {
    const dataArray = [
        { title: "Content", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis enim a quam ullamcorper pulvinar. Quisque bibendum malesuada dui vitae ultricies. Sed vel purus ante. Sed iaculis massa vel urna dignissim, ac hendrerit diam porta. Suspendisse sed augue eu massa tincidunt consequat sit amet pellentesque odio. Nullam vel vulputate sapien. Morbi tincidunt blandit ipsum, vel auctor nunc aliquet et. Vivamus quis nunc ipsum. Aliquam non lacus finibus, maximus enim quis, blandit nunc. Phasellus vehicula lectus sit amet sapien gravida sollicitudin. Nulla vitae aliquet tortor." },
      ];
    const _renderHeader = (item, expanded) => {
        return (
          <View style={{
            flexDirection: "row",
            padding: 10,
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
        <Content padder>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader =  {_renderHeader}
            renderContent = {_renderContent}
          />
        </Content>
    );
}


export default AccordionHeaderContentStyleExample