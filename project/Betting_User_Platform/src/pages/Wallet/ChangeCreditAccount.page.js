import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HeaderComponent from "../../components/Header.com";
import DownArrow from "./img/downArrow.png";
import {
  DEFAULT_SELECTED_BACK,
  DEFAULT_UNSELECTED_COLOR,
} from "../../styles/theme.style";

const ChangeCreditAccountPage = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSubCategory, setSelectedSubCategory] = useState(1);
  const [screenFlag, setScreenFlag] = useState(false);

  const selectedBack = { backgroundColor: "#6292ae" };
  const unSelectedBack = { backgroundColor: "transparent" };
  const unSelectedSubBack = { backgroundColor: "#ededed" };

  const selectedColor = { color: "white" };
  const unSelectedColor = { color: DEFAULT_UNSELECTED_COLOR };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <HeaderComponent navigation={navigation} title={"积分账变"} />
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
        <View
          style={styles.dropdown_view}
          onClick={() => setScreenFlag(!screenFlag)}
        >
          <Text style={styles.dropdown_txt}>全部记录</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.dropdown_txt}>筛选</Text>
            <Image
              source={DownArrow}
              style={{
                width: 10,
                height: 10,
                resizeMode: "contain",
                marginLeft: 5,
              }}
            />
          </View>
        </View>
        {screenFlag ? (
          <View style={styles.sub_category_view}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View
                style={[
                  styles.sub_category,
                  selectedSubCategory === 1 ? selectedBack : unSelectedSubBack,
                ]}
                onClick={() => {
                  setSelectedSubCategory(1);
                }}
              >
                <Text
                  style={
                    selectedSubCategory === 1 ? selectedColor : unSelectedColor
                  }
                >
                  全部
                </Text>
              </View>
              <View
                style={[
                  styles.sub_category,
                  selectedSubCategory === 2 ? selectedBack : unSelectedSubBack,
                ]}
                onClick={() => {
                  setSelectedSubCategory(2);
                }}
              >
                <Text
                  style={
                    selectedSubCategory === 2 ? selectedColor : unSelectedColor
                  }
                >
                  上分
                </Text>
              </View>
              <View
                style={[
                  styles.sub_category,
                  selectedSubCategory === 3 ? selectedBack : unSelectedSubBack,
                ]}
                onClick={() => {
                  setSelectedSubCategory(3);
                }}
              >
                <Text
                  style={
                    selectedSubCategory === 3 ? selectedColor : unSelectedColor
                  }
                >
                  下分
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View
                style={[
                  styles.sub_category,
                  selectedSubCategory === 4 ? selectedBack : unSelectedSubBack,
                ]}
                onClick={() => {
                  setSelectedSubCategory(4);
                }}
              >
                <Text
                  style={
                    selectedSubCategory === 4 ? selectedColor : unSelectedColor
                  }
                >
                  上下分
                </Text>
              </View>
              <View
                style={[
                  styles.sub_category,
                  selectedSubCategory === 5 ? selectedBack : unSelectedSubBack,
                ]}
                onClick={() => {
                  setSelectedSubCategory(5);
                }}
              >
                <Text
                  style={
                    selectedSubCategory === 5 ? selectedColor : unSelectedColor
                  }
                >
                  彩票下注
                </Text>
              </View>
              <View
                style={[
                  styles.sub_category,
                  selectedSubCategory === 6 ? selectedBack : unSelectedSubBack,
                ]}
                onClick={() => {
                  setSelectedSubCategory(6);
                }}
              >
                <Text
                  style={
                    selectedSubCategory === 6 ? selectedColor : unSelectedColor
                  }
                >
                  彩票结算
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View
                style={[
                  styles.sub_category,
                  selectedSubCategory === 7 ? selectedBack : unSelectedSubBack,
                ]}
                onClick={() => {
                  setSelectedSubCategory(7);
                }}
              >
                <Text
                  style={
                    selectedSubCategory === 7 ? selectedColor : unSelectedColor
                  }
                >
                  彩票回水
                </Text>
              </View>
              <View
                style={[
                  styles.sub_category,
                  selectedSubCategory === 8 ? selectedBack : unSelectedSubBack,
                ]}
                onClick={() => {
                  setSelectedSubCategory(8);
                }}
              >
                <Text
                  style={
                    selectedSubCategory === 8 ? selectedColor : unSelectedColor
                  }
                >
                  彩票取消注单
                </Text>
              </View>
              <View
                style={[
                  styles.sub_category,
                  selectedSubCategory === 9 ? selectedBack : unSelectedSubBack,
                ]}
                onClick={() => {
                  setSelectedSubCategory(9);
                }}
              >
                <Text
                  style={
                    selectedSubCategory === 9 ? selectedColor : unSelectedColor
                  }
                >
                  红包
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View
                style={[
                  styles.sub_category,
                  selectedSubCategory === 10 ? selectedBack : unSelectedSubBack,
                ]}
                onClick={() => {
                  setSelectedSubCategory(10);
                }}
              >
                <Text
                  style={
                    selectedSubCategory === 10 ? selectedColor : unSelectedColor
                  }
                >
                  佣金
                </Text>
              </View>
              <View style={{ width: 120 }}></View>
              <View style={{ width: 120 }}></View>
            </View>
            <View></View>
            <View></View>
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
  category_view: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingLeft: 20,
  },
  category: {
    width: "20%",
    height: 30,
    color: "white",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  sub_category_view: {
    marginTop: 2,
    backgroundColor: "white",
  },
  sub_category: {
    marginVertical: 10,
    width: 120,
    height: 30,
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
  dropdown_view: {
    height: 40,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  dropdown_txt: {
    color: "#323232",
    fontSize: 16,
  },
  data_body_view: {
    textAlign: "center",
  },
});

export default ChangeCreditAccountPage;
