import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderComponent from "../../components/Header.com";
import {
  DEFAULT_SELECTED_BACK,
  DEFAULT_UNSELECTED_COLOR,
} from "../../styles/theme.style";

const StatisticsItem = (props) => {
  return (
    <View style={{ textAlign: "center", justifyContent: "space-between" }}>
      <Text style={{ color: "black", fontSize: 14 }}>{props.title}</Text>
      <Text style={{ color: "#838383", fontSize: 12, marginTop: 10 }}>
        {props.val}
      </Text>
    </View>
  );
};

const QuizReportPage = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const selectedBack = { backgroundColor: DEFAULT_SELECTED_BACK };
  const unSelectedBack = { backgroundColor: "transparent" };

  const selectedColor = { color: "white" };
  const unSelectedColor = { color: DEFAULT_UNSELECTED_COLOR };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <HeaderComponent navigation={navigation} title={"竞猜报表"} />
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
        <View style={styles.statistics_view}>
          <View style={styles.statistics_row}>
            <StatisticsItem title="总注单" val="0" />
            <StatisticsItem title="总注额" val="0" />
            <StatisticsItem title="游戏总结果" val="0" />
          </View>
          <View style={styles.statistics_row}>
            <StatisticsItem title="红利合计" val="0" />
            <StatisticsItem title="返点合计" val="0" />
            <StatisticsItem title="玩家总结果" val="0" />
          </View>
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  period_txt: {
    color: "#838383",
    fontSize: 10,
  },
  statistics_view: {
    backgroundColor: "white",
    marginTop: 20,
  },
  statistics_row: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  data_body_view: {
    textAlign: "center",
  },
});

export default QuizReportPage;
