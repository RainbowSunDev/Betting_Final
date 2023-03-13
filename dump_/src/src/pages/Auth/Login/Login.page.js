import React, { useEffect, useInsertionEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../../redux/toastReducer";
import { openLoadingSpinner } from "../../../redux/loadingSpinnerReducer";

import containerBg from "../../../../assets/img/ftLoginBg.png";
import logo from "../../../../assets/img/logo.png";
import LoginBg from "../img/LoginBg.png";
import usernameBg from "../img/username.png";
import passwordBg from "../img/password.png";
import LoginBtnBg from "../img/LoginBtn.png";
import PressLoginBtnBg from "../img/PressLoginBtn.png";
import checkBg from "../img/check.png";
import uncheckBg from "../img/uncheck.png";
import goRegBg from "../img/GoRegBtn.png";
import { LoginUser, setRemeberPwd } from "../../../redux/authReducer";
import { EMPTY_INPUT } from "../../../config/constants";

const LoginPage = ({ navigation }) => {
  const [pressLoginBtn, setPressLoginBtn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authState.loggedIn);
  const rememberPwdFlag = useSelector((state) => state.authState.rememberPwd);
  const userinfo = useSelector((state) => state.authState.userinfo);

  useEffect(() => {
    if (loggedIn) navigation.navigate("RoomEnter");
  }, [loggedIn]);

  useEffect(() => {
    if (rememberPwdFlag) {
      setUsername(userinfo.username);
      setPassword(userinfo.password);
    }
  }, []);

  const login = () => {
    if (username === "" || password === "") {
      dispatch(showToast({ message: EMPTY_INPUT }));
      return;
    }
    dispatch(LoginUser({ username, password }));
  };

  const clickRememberPwd = () => {
    dispatch(setRemeberPwd(!rememberPwdFlag));
  };
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <ImageBackground source={containerBg} style={styles.containerBackground}>
        <View style={styles.logo_view}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.login_view}>
          <ImageBackground
            source={LoginBg}
            style={styles.login_img}
            resizeMode="contain"
          >
            <View style={{ flex: 0.7 }}>
              <ImageBackground source={usernameBg} style={[styles.edit_bg]}>
                <TextInput
                  style={[styles.text_edit, { outline: "none" }]}
                  placeholder="请填写帐号"
                  defaultValue={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </ImageBackground>
              <ImageBackground
                source={passwordBg}
                style={[styles.edit_bg, { marginTop: 20 }]}
              >
                <TextInput
                  style={[styles.text_edit, { outline: "none" }]}
                  placeholder="请填写代码"
                  secureTextEntry={true}
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </ImageBackground>
              <View
                style={styles.remember_pwd}
                onClick={(e) => {
                  clickRememberPwd(!rememberPwdFlag);
                }}
              >
                <Image
                  source={rememberPwdFlag ? checkBg : uncheckBg}
                  style={styles.checkbox}
                />
                <Text>记住密码</Text>
              </View>
              <View
                onTouchStart={(e) => {
                  setPressLoginBtn(true);
                }}
                onTouchEnd={(e) => {
                  setPressLoginBtn(false);
                }}
                onClick={() => {
                  login();
                }}
              >
                <Image
                  source={pressLoginBtn ? PressLoginBtnBg : LoginBtnBg}
                  style={styles.login_btn}
                />
              </View>
            </View>
          </ImageBackground>
          <View
            style={{ position: "absolute", top: 330 }}
            onClick={() => navigation.navigate("Register")}
          >
            <Image
              source={goRegBg}
              style={{ width: 60, height: 60, resizeMode: "contain" }}
            />
          </View>
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
  login_view: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  login_img: {
    width: 400,
    height: 270,
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
  login_btn: {
    width: 300,
    height: 38,
    marginTop: 10,
  },
  remember_pwd: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: 3,
    height: 15,
  },
  checkbox: {
    width: 15,
    height: 15,
  },
});

export default LoginPage;
