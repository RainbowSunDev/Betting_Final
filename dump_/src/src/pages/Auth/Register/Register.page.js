import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import containerBg from "../../../../assets/img/ftLoginBg.png";
import logo from "../../../../assets/img/logo.png";

import RegisterBg from "../img/RegisterBg.png";
import usernameBg from "../img/username.png";
import passwordBg from "../img/password.png";
import RegisterBtnBg from "../img/RegisterBtn.png";
import PressRegisterBtnBg from "../img/PressRegisterBtn.png";
import captchaInput from "../img/captchaInput.png";
import CaptchaImg from "../img/captcha.png";
import backBtn from "../img/backBtn.png";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../../redux/toastReducer";
import {
  EMPTY_INPUT,
  INCORRECT_CAPTCHA,
  NO_MATCH_CONFIRM,
} from "../../../config/constants";
import { registerUser } from "../../../redux/authReducer";

const RegisterPage = ({ navigation }) => {
  const [pressRegisterBtn, setPressRegisterBtn] = useState(false);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [captcha, setCaptcha] = useState("");
  const captchaOrigin = "0274";

  const register = () => {
    if (username == "" || password == "" || confirmPwd == "" || captcha == "") {
      dispatch(showToast({ message: EMPTY_INPUT }));
      return;
    }
    if (captchaOrigin != captcha) {
      dispatch(showToast({ message: INCORRECT_CAPTCHA }));
      return;
    }

    if (password != confirmPwd) {
      dispatch(showToast({ message: NO_MATCH_CONFIRM }));
      return;
    }
    dispatch(registerUser({ username: username, password: password }));
  };
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <ImageBackground source={containerBg} style={styles.containerBackground}>
        <View style={styles.logo_view}>
          <Image
            source={backBtn}
            style={{
              width: 40,
              height: 40,
              alignSelf: "flex-start",
              position: "absolute",
              top: 10,
              left: 20,
            }}
            onClick={() => {
              navigation.goBack();
            }}
          />
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.register_view}>
          <ImageBackground
            source={RegisterBg}
            style={styles.register_img}
            resizeMode="contain"
          >
            <View style={{ flex: 0.8 }}>
              <ImageBackground source={usernameBg} style={[styles.edit_bg]}>
                <TextInput
                  style={[styles.text_edit, { outline: "none" }]}
                  placeholder="请填写6-16位的帐号"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </ImageBackground>
              <ImageBackground
                source={passwordBg}
                style={[styles.edit_bg, { marginTop: 20 }]}
              >
                <TextInput
                  style={[styles.text_edit, { outline: "none" }]}
                  placeholder="请填写6-16位密码"
                  onChange={(e) => setPassword(e.target.value)}
                  secureTextEntry={true}
                />
              </ImageBackground>
              <ImageBackground
                source={passwordBg}
                style={[styles.edit_bg, { marginTop: 20 }]}
              >
                <TextInput
                  style={[styles.text_edit, { outline: "none" }]}
                  placeholder="请填写确认密码"
                  onChange={(e) => setConfirmPwd(e.target.value)}
                  secureTextEntry={true}
                />
              </ImageBackground>
              <ImageBackground
                source={captchaInput}
                style={[styles.edit_bg, { marginTop: 20 }]}
              >
                <TextInput
                  style={[styles.text_edit, { outline: "none" }]}
                  placeholder="请填写验证码"
                  onChange={(e) => setCaptcha(e.target.value)}
                />
                <Image
                  source={CaptchaImg}
                  style={{
                    position: "absolute",
                    top: 5,
                    right: 10,
                    width: 100,
                    height: 30,
                  }}
                />
              </ImageBackground>
              <View
                onTouchStart={(e) => {
                  setPressRegisterBtn(true);
                }}
                onTouchEnd={(e) => {
                  setPressRegisterBtn(false);
                }}
                onClick={() => register()}
              >
                <Image
                  source={pressRegisterBtn ? PressRegisterBtnBg : RegisterBtnBg}
                  style={styles.register_btn}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBackground: {
    flex: 1,
    backgroundSize: "750px, 1334px",
  },
  logo_view: {
    justifyContent: "center",
    marginTop: 10,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 280,
    height: 150,
  },
  register_view: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  register_img: {
    width: 420,
    height: 350,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  edit_bg: {
    width: 300,
    height: 40,
  },
  text_edit: {
    width: 220,
    height: 40,
    borderWidth: 0,
    marginLeft: 40,
    fontSize: 18,
    color: "#aaa",
  },
  register_btn: {
    width: 300,
    height: 38,
    marginTop: 20,
  },
});

export default RegisterPage;
