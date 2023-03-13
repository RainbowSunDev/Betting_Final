import React, { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput, Image } from "react-native";
import HeaderComponent from "../../components/Header.com";
import ViewBtnBg from "./img/viewBtnBg.png";
import HideBtnBg from "./img/hideBtnBg.png";

const PasswordSettingPage = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [viewFlag, setViewFlag] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} title={"重置密码"} />
      <View style={styles.main_view}>
        <View style={styles.info_view}>
          <Text style={styles.info_txt}>请为您的帐号</Text>
          <Text style={styles.info_txt}>3709632838</Text>
          <Text style={styles.info_txt}>设置一个新密码</Text>
        </View>
        <View style={styles.edit_view}>
          <View style={styles.edit_row_view}>
            <View style={styles.edit_input_view}>
              <TextInput
                style={[styles.edit_input, { outline: "none" }]}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                secureTextEntry={viewFlag ? false : true}
              />
            </View>
            <View
              style={styles.view_btn_view}
              onClick={() => {
                setViewFlag(!viewFlag);
              }}
            >
              <Image
                source={viewFlag ? ViewBtnBg : HideBtnBg}
                style={[styles.view_btn, { width: password.length ? 20 : 0 }]}
              />
            </View>
          </View>
        </View>
        <View style={styles.save_btn_view}>
          <View style={styles.save_btn}>
            <Text style={{ color: "white", fontSize: 16 }}>保存新密码</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },
  main_view: {
    flex: 0.5,
  },
  info_view: {
    backgroundColor: "white",
    justifyContent: "center",
    paddingVertical: 20,
  },
  info_txt: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 3,
  },
  edit_view: {
    backgroundColor: "white",
    marginTop: 20,
    width: "100%",
    height: 50,
  },
  edit_row_view: {
    flexDirection: "row",
    width: "100%",
  },
  edit_input_view: {
    width: "90%",
  },
  edit_input: {
    height: "100%",
    fontSize: 18,
  },
  input_view: {
    backgroundColor: "white",
    height: "100%",
  },
  view_btn_view: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  view_btn: {
    height: "100%",
    resizeMode: "contain",
  },
  save_btn_view: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  save_btn: {
    width: "95%",
    backgroundColor: "#6291b0",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PasswordSettingPage;
