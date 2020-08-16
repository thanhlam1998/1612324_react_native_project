import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import MaterialcomunnityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FlatList } from "react-native-gesture-handler";

const ExpandableText = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <View style={styles.flatListCell}>
      <Button
        title={"Bài tập"}
        color="#636e72"
        onPress={() => setExpand((expand) => !expand)}>
      </Button>
      {expand && <FlatList></FlatList>}
    </View>
  );
};

export default ExpandableText;

const styles = StyleSheet.create({
  flatListCell: {
    justifyContent: "center",
    marginTop: 20,
  },
  button: {

    backgroundColor: "#636E72", 
    justifyContent: "center",
    alignItems: "center"
  }
});
