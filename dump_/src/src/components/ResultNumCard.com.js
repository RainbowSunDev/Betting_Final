import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const ResultNumCardComponent = (props) => {
  const [cardBackground, setCardBackground] = useState("");
  useEffect(() => {
    switch (props.number) {
      case 1:
        setCardBackground("#fdf309");
        break;
      case 2:
        setCardBackground("#0490ff");
        break;
      case 3:
        setCardBackground("#4e4b4c");
        break;
      case 4:
        setCardBackground("#fc7200");
        break;
      case 5:
        setCardBackground("#7cfbfe");
        break;
      case 6:
        setCardBackground("#5234ff");
        break;
      case 7:
        setCardBackground("#e3e2e5");
        break;
      case 8:
        setCardBackground("#ff2601");
        break;
      case 9:
        setCardBackground("#780902");
        break;
      case 10:
        setCardBackground("#0bb903");
        break;
    }
  }, []);
  return (
    <View
      style={[
        !props.style ? { width: 20, height: 20 } : props.style,
        {
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: cardBackground
        }
      ]}
    >
      <Text
        style={{
          fontSize: 16,
          color: "#fffbfb",
          textShadowColor: "black",
          textShadowOffset: { width: -1, height: 0 }
        }}
      >
        {props.number}
      </Text>
    </View>
  );
};

export default ResultNumCardComponent;
