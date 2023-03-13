import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
} from "react-native";

import {
  LOTTERY_INFO_URL1,
  LOTTERY_INFO_URL2,
  LOTTERY_INFO_URL3,
  LOTTERY_INFO_URL4,
  LOTTERY_INFO_URL5,
} from "../../config/constants";
import containerBg from "../../../assets/img/ftLoginBg.png";
import logo from "../../../assets/img/logo.png";
import progressBackBg from "./img/progressBackBg.png";
import progressStatusBg from "./img/progressStatusBg.png";
import { useDispatch } from "react-redux";

const GameLoadPage = ({ navigation }) => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((progress) => progress + 10);
    }, 200);

    if (progress >= 100) {
      clearInterval(interval);
      navigation.navigate("GameHall");
    }
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <View style={styles.container}>
      <ImageBackground source={containerBg} style={styles.containerBackground}>
        <View style={styles.logo_view}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.load_view}>
          <View style={styles.progress_view}>
            <Image source={progressBackBg} style={styles.progress_back_img} />
            <Image
              source={progressStatusBg}
              style={[styles.progress_status_img, { width: `${progress}%` }]}
            />
          </View>
          <View style={{ marginTop: 5, marginBottom: 20 }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              加载资源 {progress} %
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
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
  load_view: {
    flex: 0.7,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  progress_view: {
    height: 16,
    width: "60%",
  },
  progress_back_img: {
    width: "100%",
    height: 16,
    resizeMode: "stretch",
  },
  progress_status_img: {
    height: 14,
    resizeMode: "stretch",
    position: "absolute",
  },
});

export default GameLoadPage;
