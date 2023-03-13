import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderComponent from "../../components/Header.com";
import {
  DEFAULT_SELECTED_BACK,
  DEFAULT_UNSELECTED_COLOR,
} from "../../styles/theme.style";

const ApplyRecordPage = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const selectedBack = { backgroundColor: DEFAULT_SELECTED_BACK };
  const unSelectedBack = {backgroundColor: "transparent"};

  const selectedColor = { color: "white" };
  const unSelectedColor = { color: DEFAULT_UNSELECTED_COLOR };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <HeaderComponent navigation={navigation} title={"钱包中心"} />
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
              今日
            </Text>
          </View>
          <View
            style={[
              styles.category,
              selectedCategory === 2 ? selectedBack : unSelectedBack,
              { marginLeft: 10 },
            ]}
            onClick={() => {
              setSelectedCategory(2);
            }}
          >
            <Text
              style={selectedCategory === 2 ? selectedColor : unSelectedColor}
            >
              昨日
            </Text>
          </View>
        </View>
        <View style={styles.period_view}>
          <Text style={styles.period_txt}>2022-11-10 06:00:00</Text>
          <Text style={styles.period_txt}>-</Text>
          <Text style={styles.period_txt}>2022-11-11 06:00:00</Text>
        </View>
        <View style={styles.data_header_view}>
          <Text style={styles.data_header_txt}>所有</Text>
          <Text style={styles.data_header_txt}>时间</Text>
          <Text style={styles.data_header_txt}>积分</Text>
          <Text style={styles.data_header_txt}>状态</Text>
        </View>
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
  category_view: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    height: 50,
    paddingLeft: 20,
  },
  category: {
    width: "20%",
    height: 25,
    color: "white",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  period_view: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  period_txt: {
    color: "#838383",
    fontSize: 10,
  },
  data_header_view: {
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
  },
  data_header_txt: {
    color: "black",
    fontSize: 16,
  },
  data_body_view: {
    textAlign: "center",
  },
});

export default ApplyRecordPage;
