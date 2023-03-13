import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import HeaderComponent from "../../components/Header.com";
import UpPointImg from "./img/upPointImg.png";
import DownPointImg from "./img/downPointImg.png";
import paymentImg from "./img/paymentImg.png";

import RecordImg from "./img/recordImg.png";
import GameRecordImg from "./img/gameRecordImg.png";
import ReportImg from "./img/reportImg.png";
import BenefitImg from "./img/benefitImg.png";
import RedEnevlopeImg from "./img/redEnvelopeImg.png";
import CreditImg from "./img/creditImg.png";

const WalletCenterPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} title={"钱包中心"} />
      <View style={{ paddingLeft: 5, paddingRight: 5, marginTop: 10 }}>
        <View style={styles.wallet_info_view}>
          <View
            style={{
              width: "33.3%",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "white",
                marginLeft: 15,
                marginTop: 11,
              }}
            >
              总资产
            </Text>
            <Text style={{ fontSize: 27, color: "white", marginLeft: 15 }}>
              0.00
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                marginLeft: 15,
                marginBottom: 15,
              }}
            >
              流水:0.0
            </Text>
          </View>
          <View
            style={{
              width: "33.3%",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "white",
                marginLeft: 15,
                marginBottom: 13,
              }}
            >
              回水:0.0
            </Text>
          </View>
          <View
            style={{
              width: "33.3%",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <View style={{ height: 16 }}></View>
            <Text style={{ color: "white", marginTop: 12 }}>红利:0.0</Text>
            <Text style={{ color: "white", marginBottom: 10 }}>盈亏:0.0</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 5,
              right: 0,
              height: 22,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
              borderTopRightRadius: 5,
              backgroundColor: "#79b3d9",
              paddingLeft: 15,
              paddingRight: 15,
            }}
          >
            <Text style={{ fontSize: 16, color: "white" }}>今日统计</Text>
          </View>
        </View>
        <View style={styles.point_control_view}>
          <TouchableOpacity
            style={styles.control_item_view}
            onPress={() => navigation.navigate("UpPoint")}
          >
            <Image source={UpPointImg} style={styles.control_img} />
            <Text style={styles.control_txt}>申请上分</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.control_item_view}
            onPress={() => navigation.navigate("DownPoint")}
          >
            <Image source={DownPointImg} style={styles.control_img} />
            <Text style={styles.control_txt}>申请下分</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.control_item_view}
            onPress={() => navigation.navigate("PaymentMethod")}
          >
            <Image source={paymentImg} style={styles.control_img} />
            <Text style={styles.control_txt}>收款方式</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lower_view}>
        <View style={styles.info_row}>
          <TouchableOpacity
            style={[
              styles.info_item,
              {
                borderBottomWidth: 1,
                borderBottomColor: "#edeaea",
                borderRightWidth: 1,
                borderRightColor: "#edeaea",
              },
            ]}
            onPress={() => navigation.navigate("ApplyRecord")}
          >
            <Image source={RecordImg} style={styles.control_img} />
            <Text style={styles.down_control_txt}>申请记录</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.info_item,
              {
                borderBottomWidth: 1,
                borderBottomColor: "#edeaea",
                borderRightWidth: 1,
                borderRightColor: "#edeaea",
              },
            ]}
            onPress={() => navigation.navigate("GameRecord")}
          >
            <Image source={GameRecordImg} style={styles.control_img} />
            <Text style={styles.down_control_txt}>游戏记录</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.info_item,
              { borderBottomWidth: 1, borderBottomColor: "#edeaea" },
            ]}
            onPress={() => navigation.navigate("QuizReport")}
          >
            <Image source={ReportImg} style={styles.control_img} />
            <Text style={styles.down_control_txt}>竞猜报表</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info_row}>
          <TouchableOpacity
            style={[
              styles.info_item,
              { borderRightWidth: 1, borderRightColor: "#edeaea" },
            ]}
            onPress={() => navigation.navigate("StatementBenefit")}
          >
            <Image source={BenefitImg} style={styles.control_img} />
            <Text style={styles.down_control_txt}>福利报表</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.info_item,
              { borderRightWidth: 1, borderRightColor: "#edeaea" },
            ]}
            onPress={() => navigation.navigate("RedEnvelopeReport")}
          >
            <Image source={RedEnevlopeImg} style={styles.control_img} />
            <Text style={styles.down_control_txt}>红包报表</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.info_item}
            onPress={() => navigation.navigate("ChangeCreditAccount")}
          >
            <Image source={CreditImg} style={styles.control_img} />
            <Text style={styles.down_control_txt}>积分账变</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wallet_info_view: {
    backgroundColor: "#6291b0",
    height: 100,
    flexDirection: "row",
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
  },
  point_control_view: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 80,
  },
  control_item_view: {
    width: "33.3%",
    justifyContent: "center",
    alignItems: "center",
  },
  control_img: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginBottom: 4,
  },
  control_txt: {
    color: "#89888b",
  },
  down_control_txt: {
    color: "black",
  },
  lower_view: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  info_row: {
    height: 100,
    flexDirection: "row",
  },
  info_item: {
    width: "33.3%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WalletCenterPage;
