import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HeaderComponent from "../../components/Header.com";
import {
  DEFAULT_SELECTED_BACK,
  DEFAULT_UNSELECTED_BACK,
  DEFAULT_UNSELECTED_COLOR,
  DEFAULT_BACKGROUND_COLOR,
} from "../../styles/theme.style";
import PlusImg from "./img/plusImg.png";

const WechatView = () => {
  return (
    <View style={styles.main_view}>
      <Image source={PlusImg} style={styles.plus_img} />
      <Text style={{ fontSize: 18, color: "black", marginTop: 10 }}>
        点击图案添加收款二维码
      </Text>
      <TextInput
        style={[styles.item_view, { marginTop: 20, outline: "none" }]}
        placeholder="请填写微信号"
      />
      <TextInput
        style={[styles.item_view, { marginTop: 10, outline: "none" }]}
        placeholder="请填写QQ号"
      />
    </View>
  );
};

const BankCardView = () => {
  return (
    <View style={styles.third_view}>
      <View style={styles.input_row}>
        <Text style={styles.input_label}>持卡人姓名:</Text>
        <TextInput
          style={[styles.pay_input, { outline: "none" }]}
          placeholder="请填写持卡人姓名"
        />
      </View>
      <View style={styles.input_row}>
        <Text style={styles.input_label}>银行卡类型:</Text>
        <TextInput
          style={[styles.pay_input, { outline: "none" }]}
          placeholder="请填写银行卡类型"
        />
      </View>
      <View style={styles.input_row}>
        <Text style={styles.input_label}>开户地址:</Text>
        <TextInput
          style={[styles.pay_input, { outline: "none" }]}
          placeholder="请填写开户地址"
        />
      </View>
      <View style={styles.input_row}>
        <Text style={styles.input_label}>银行卡号码:</Text>
        <TextInput
          style={[styles.pay_input, { outline: "none" }]}
          placeholder="请填写银行卡号码"
        />
      </View>
    </View>
  );
};
const PaymentMethodPage = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const selectedBack = { backgroundColor: DEFAULT_SELECTED_BACK };
  const unSelectedBack = { backgroundColor: DEFAULT_UNSELECTED_BACK };

  const selectedColor = { color: "white" };
  const unSelectedColor = { color: DEFAULT_UNSELECTED_COLOR };
  return (
    <View style={styles.container}>
      <View>
        <HeaderComponent navigation={navigation} title={"收款管理"} />
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
              微信
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
              支付宝
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
              银行卡
            </Text>
          </View>
        </View>
        {selectedCategory === 1 ? (
          <WechatView />
        ) : selectedCategory === 2 ? (
          <WechatView />
        ) : (
          <BankCardView />
        )}
      </View>
      <View style={styles.submit_btn}>
        <Text style={{ color: "white" }}>提交确认</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  category_view: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 30,
  },
  category: {
    width: "30%",
    height: 25,
    color: "white",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  main_view: {
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  plus_img: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  item_view: {
    backgroundColor: "white",
    width: "60%",
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    textAlign: "center",
    color: "#9b9ca2",
  },
  submit_btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    color: "white",
    backgroundColor: "#6292b0",
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  third_view: {
    paddingHorizontal: 10,
  },
  input_label: {
    fontSize: 16,
    color: "black",
    marginVertical: 10,
  },
  pay_input: {
    width: "100%",
    height: 40,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: "white",
    color: "#aaaaaa",
  },
});

export default PaymentMethodPage;
