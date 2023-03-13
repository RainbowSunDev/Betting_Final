import React from "react";
import { View, Text } from "react-native";

const GreyCardComponent = (props) => {
  return (
    <View
      style={[
        props.style,
        {
          width: 20,
          height: 25,
          borderRadius: 5,
          backgroundColor: "#eeeff0",
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Text style={{ fontSize: 18, color: "#808080" }}>
        <b>{props.number}</b>
      </Text>
    </View>
  );
};

export default GreyCardComponent;
