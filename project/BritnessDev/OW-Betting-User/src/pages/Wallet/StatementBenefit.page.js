import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderComponent from "../../components/Header.com";
import {
  DEFAULT_SELECTED_BACK,
  DEFAULT_UNSELECTED_BACK,
  DEFAULT_UNSELECTED_COLOR,
} from "../../styles/theme.style";

const StatementBenefitPage = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [screenFlag, setScreenFlag] = useState(false);
  const selectedBack = { backgroundColor: DEFAULT_SELECTED_BACK };
  const unSelectedBack = { backgroundColor: DEFAULT_UNSELECTED_BACK };

  const selectedColor = { color: "white" };
  const unSelectedColor = { color: DEFAULT_UNSELECTED_COLOR };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <HeaderComponent navigation={navigation} title={"福利报表"} />
        <View
          style={styles.screening_btn}
          onClick={() => setScreenFlag(!screenFlag)}
        >
          <Text style={{ color: "white", fontSize: 16 }}>筛选</Text>
        </View>
        {screenFlag ? (
          <View style={styles.category_view}>
            <View
              style={[
                styles.category,
                selectedCategory === 1 ? selectedBack : unSelectedBack,
              ]}
              onClick={() => {
                setSelectedCategory(1);
              }}
            >
              <Text
                style={selectedCategory === 1 ? selectedColor : unSelectedColor}
              >
                全部
              </Text>
            </View>
            <View
              style={[
                styles.category,
                selectedCategory === 2 ? selectedBack : unSelectedBack,
              ]}
              onClick={() => {
                setSelectedCategory(2);
              }}
            >
              <Text
                style={selectedCategory === 2 ? selectedColor : unSelectedColor}
              >
                佣金
              </Text>
            </View>
            <View
              style={[
                styles.category,
                selectedCategory === 3 ? selectedBack : unSelectedBack,
              ]}
              onClick={() => {
                setSelectedCategory(3);
              }}
            >
              <Text
                style={selectedCategory === 3 ? selectedColor : unSelectedColor}
              >
                红包
              </Text>
            </View>
            <View
              style={[
                styles.category,
                selectedCategory === 4 ? selectedBack : unSelectedBack,
              ]}
              onClick={() => {
                setSelectedCategory(4);
              }}
            >
              <Text
                style={selectedCategory === 4 ? selectedColor : unSelectedColor}
              >
                彩票回水
              </Text>
            </View>
          </View>
        ) : (
          <View></View>
        )}
        <View style={styles.data_body_view}>
          <Text style={{ color: "#838383" }}>暂无记录</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screening_btn: {
    width: 70,
    height: 50,
    position: "absolute",
    top: 0,
    right: 0,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  category_view: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
  },
  category: {
    width: "20%",
    height: 25,
    color: "white",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  data_body_view: {
    textAlign: "center",
  },
});

export default StatementBenefitPage;
