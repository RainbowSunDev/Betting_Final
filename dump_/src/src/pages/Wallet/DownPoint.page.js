import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  Button,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HeaderComponent from "../../components/Header.com";
import WechatPayImg from "./img/wechatPayImg.png";
import AliPayImg from "./img/aliPayImg.png";
import UnionPayImg from "./img/unionPayImg.png";
import selectedPayBg from "./img/selectedPayBg.png";
import unSelectedPayBg from "./img/unSelectedPayBg.png";

const PayView = () => {
  return (
    <View style={styles.owner_info}>
      <View style={styles.owner_title_view}>
        <Text style={{ fontSize: 17 }}>房主信息</Text>
      </View>
      <View style={styles.code_operate_view}>
        <View style={styles.operate_row}>
          <Text>房主微信:</Text>
          <View style={styles.copy_btn}>
            <Text style={styles.copy_btn_txt}>复制</Text>
          </View>
        </View>
      </View>
      <View style={styles.code_operate_view}>
        <View style={styles.operate_row}>
          <Text>房主QQ:</Text>
          <View style={styles.copy_btn}>
            <Text style={styles.copy_btn_txt}>复制</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const OfflineView = (props) => {
  return (
    <View>
      <View style={styles.point_input_view}>
        <Text style={styles.input_label}>下分金额:</Text>
        <TextInput
          style={[styles.point_input, { outline: "none" }]}
          placeholder="请输入下分金额"
        />
        <Text style={styles.current_point_label}>当前可用积分: 0.00</Text>
      </View>
      <View style={styles.pay_row}>
        <Text>
          <b>下分类型</b>
        </Text>
        <View onClick={() => props.setSelectedPay(1)}>
          <ImageBackground
            source={props.selectedPay === 1 ? selectedPayBg : unSelectedPayBg}
            style={styles.pay_bg}
            resizeMode="stretch"
          >
            <Image source={WechatPayImg} style={styles.pay_img} />
          </ImageBackground>
        </View>
        <View onClick={() => props.setSelectedPay(2)}>
          <ImageBackground
            source={props.selectedPay === 2 ? selectedPayBg : unSelectedPayBg}
            style={styles.pay_bg}
            resizeMode="stretch"
          >
            <Image source={AliPayImg} style={styles.pay_img} />
          </ImageBackground>
        </View>
        <View onClick={() => props.setSelectedPay(3)}>
          <ImageBackground
            source={props.selectedPay === 3 ? selectedPayBg : unSelectedPayBg}
            style={styles.pay_bg}
            resizeMode="stretch"
          >
            <Image source={UnionPayImg} style={styles.pay_img} />
          </ImageBackground>
        </View>
      </View>
      <PayView />
      <View style={styles.submit_btn}>
        <Text style={{ color: "white" }}>提交确认</Text>
      </View>
    </View>
  );
};
const OnlineView = () => {
  return <View></View>;
};
const DownPointPage = ({ navigation }) => {
  const [activateTab, setActiveTab] = useState(0);
  const [selectedPay, setSelectedPay] = useState(1);
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <HeaderComponent navigation={navigation} title={"下分"} />
      <View style={styles.tab_view}>
        <View
          style={[
            styles.tab_btn,
            { backgroundColor: !activateTab ? "#3a7198" : "white" },
          ]}
          onClick={() => setActiveTab(0)}
        >
          <Text
            style={[
              styles.txt_color_white,
              { color: activateTab ? "#767676" : "white" },
            ]}
          >
            线上下分
          </Text>
        </View>
        <View
          style={[
            styles.tab_btn,
            { backgroundColor: activateTab ? "#3a7198" : "white" },
          ]}
          onClick={() => setActiveTab(1)}
        >
          <Text
            style={[
              styles.txt_color_white,
              { color: !activateTab ? "#767676" : "white" },
            ]}
          >
            线下下分
          </Text>
        </View>
      </View>
      {activateTab === 0 ? (
        <OnlineView />
      ) : (
        <OfflineView
          selectedPay={selectedPay}
          setSelectedPay={setSelectedPay}
        />
      )}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  tab_view: {
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "white",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    borderRadius: 5,
  },
  tab_btn: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  txt_color_white: {
    color: "white",
  },
  point_input_view: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  input_label: {
    fontSize: 16,
    color: "#4e4e4e",
    marginBottom: 10,
  },
  point_input: {
    width: "100%",
    height: 45,
    backgroundColor: "white",
    color: "#a5a5a5",
    fontSize: 16,
    padding: 10,
  },
  current_point_label: {
    color: "#24a0e4",
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10,
  },
  pay_row: {
    flexDirection: "row",
    width: "80%",
    height: 80,
    justifyContent: "space-between",
    paddingLeft: 10,
    alignItems: "center",
  },
  pay_bg: {
    width: 70,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  pay_img: {
    width: 40,
    height: 40,
    resizeMode: "stretch",
  },
  owner_info: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  owner_title_view: {
    borderBottomColor: "#d9d9d9",
    borderBottomWidth: 1,
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
  },
  code_view: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 20,
  },
  rectangle: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    width: 140,
    height: 140,
  },
  code_operate_view: {
    justifySelf: "center",
    alignItems: "center",
    borderBottomColor: "#efefef",
    borderBottomWidth: 1,
  },
  operate_row: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  copy_btn: {
    width: 60,
    height: 30,
    backgroundColor: "#6292b0",
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  copy_btn_txt: {
    color: "white",
    fontSize: 16,
  },
  submit_btn: {
    marginTop: 170,
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    color: "white",
    backgroundColor: "#6292b0",
  },
  union_pay_row: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    padding: 10,
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  union_pay_row_label: {
    color: "#a7a7a7",
  },
});

export default DownPointPage;
