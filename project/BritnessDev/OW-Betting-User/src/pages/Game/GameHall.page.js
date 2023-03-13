import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MarqueeText from "react-native-marquee";

import containerBg from "../../../assets/img/ftLoginBg.png";
import headerBg from "../../../assets/img/headerBg.png";
import GameBackBtnBg from "./img/gameBackBtn.png";
import AnnouncementBg from "./img/announcementBg.png";
import SpeakerBg from "./img/speakerBg.png";
import GameListItemBg from "./img/gameListItemBg.png";
import GameSymbol1Bg from "./img/gameSymbolBg1.png";
import GameTypeText1Bg from "./img/gameTypeTextBg1.png";
import GameSymbol2Bg from "./img/gameSymbolBg2.png";
import GameTypeText2Bg from "./img/gameTypeTextBg2.png";
import GameSymbol3Bg from "./img/gameSymbolBg3.png";
import GameTypeText3Bg from "./img/gameTypeTextBg3.png";
import GameSymbol4Bg from "./img/gameSymbolBg4.png";
import GameTypeText4Bg from "./img/gameTypeTextBg4.png";
import GameSymbol5Bg from "./img/gameSymbolBg5.png";
import GameTypeText5Bg from "./img/gameTypeTextBg5.png";
import GreyCardComponent from "../../components/GreyCard.com";
import ResultNumCardComponent from "../../components/ResultNumCard.com";
import GameMenuCustomerBg from "./img/gameMenuCustomerBtn.png";
import GameMenuWalletBg from "./img/gameMenuWalletBtn.png";
import GameMenuIntroBg from "./img/gameMenuIntroBtn.png";
import GameMenuPersonalBg from "./img/gameMenuPersonalBtn.png";
import GameMenuTopUpBg from "./img/gameMenuTopUpBtn.png";
import { outRoom } from "../../redux/roomReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  API_BASE,
  IMG_URL,
  ROOM_IMG_URL,
  SOCKET_BET_BLOCKING_EVENT,
  SOCKET_BET_DRWAING_EVENT,
  SOCKET_BET_NEWTURN_EVENT,
  SOCKET_BET_WARNING_EVENT,
  SOCKET_JOIN_ROOM,
} from "../../config/constants";
import {
  changeLotteries,
  saveCurrentLottery,
  saveLotteries,
  setLotteryStatus,
} from "../../redux/lotteriesReducer";
import { socket } from "../../services/socket.service";
import { useFocusEffect } from "@react-navigation/native";

const GameHallPage = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const lotteries = useSelector((state) => state.lotteriesState.lotteries);
  const userInfo = useSelector((state) => state.authState.userInfo);
  const currentRoom = useSelector((state) => state.roomsState.currentRoom);
  const entered = useSelector((state) => state.roomsState.entered);
  const [remainTimes, setRemainTimes] = useState([0, 0, 0, 0, 0]);
  const [flag, setFlag] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!entered) navigation.navigate("RoomEnter");
  }, [entered]);

  // useEffect(() => {
  //   setFlag((flag) => !flag);
  // }, [lotteries]);

  useFocusEffect(
    useCallback(() => {
      console.log("open game hall");
      socket.open();

      socket.emit(SOCKET_JOIN_ROOM, {
        userID: userInfo._id,
        roomID: currentRoom._id,
      });

      socket.on(SOCKET_JOIN_ROOM, (roomInfo) => {
        console.log("-----------------joinroom:", roomInfo);
        var lotteries = roomInfo.drawIssues.map((item, i) => {
          if (roomInfo.leftTimes[i] <= 5000)
            return {
              drawIssues: item,
              preDrawCodes: roomInfo.preDrawCodes[i],
              roomID: roomInfo.roomID[i],
              lotteryType: roomInfo.lotteryTypesIDs[i],
              status: "block",
            };
          else
            return {
              drawIssues: item,
              preDrawCodes: roomInfo.preDrawCodes[i],
              roomID: roomInfo.roomID[i],
              lotteryType: roomInfo.lotteryTypesIDs[i],
            };
        });
        var temp = roomInfo.leftTimes.map((item, i) => {
          return Math.floor(item / 1000);
        });
        setRemainTimes(temp);
        dispatch(saveLotteries({ lotteries }));
      });

      socket.on(SOCKET_BET_WARNING_EVENT, (response) => {
        console.log(response);
      });

      socket.on(SOCKET_BET_BLOCKING_EVENT, (response) => {
        console.log("----------->SOCKET_BET_BLOCKING_EVENT", response);
        dispatch(
          setLotteryStatus({ _id: response.lotteryType, status: "block" })
        );
      });

      socket.on(SOCKET_BET_DRWAING_EVENT, (response) => {
        console.log("----------->SOCKET_BET_DRWAING_EVENT", response);
        dispatch(
          setLotteryStatus({ _id: response.lotteryType, status: "drawing" })
        );
      });

      socket.on(SOCKET_BET_NEWTURN_EVENT, (response) => {
        console.log(
          "-----aaaa------>SOCKET_BET_NEWTURN_EVENT",
          response,
          SOCKET_BET_NEWTURN_EVENT
        );
        dispatch(
          changeLotteries({
            lotteryType: response.lotteryType,
            data: {
              drawIssues: response.drawIssue,
              preDrawCodes: response.result,
            },
          })
        );
        var temp = response.leftTimes.map((item, i) => {
          return Math.floor(item / 1000);
        });
        setRemainTimes(temp);
        dispatch(
          setLotteryStatus({ _id: response.lotteryType, status: "doing" })
        );
      });
    }, [])
  );
  useEffect(() => {
    return () => {
      console.log("game hall close");
      socket.removeAllListeners();
      socket.close();
    };
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setRemainTimes((remainTimes) => {
        return remainTimes.map((item, i) => {
          return item <= 0 ? 0 : item - 1;
        });
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [remainTimes]);

  return (
    <ImageBackground
      source={containerBg}
      style={styles.containerBackground}
      resizeMode="cover"
    >
      <ImageBackground
        source={headerBg}
        style={styles.headerBackground}
        resizeMode="stretch"
      />
      <View style={styles.container}>
        <View style={styles.header_view}>
          <View style={styles.back_btn_view}>
            <Image
              source={GameBackBtnBg}
              style={styles.back_btn}
              onClick={() => {
                navigation.navigate("RoomEnter");
                dispatch(outRoom());
              }}
            />
          </View>
          <View style={styles.title_view}>
            <Text style={styles.title}>游戏大厅</Text>
          </View>
          <View style={{ width: "15%" }}></View>
        </View>
        <View style={styles.announcement_view}>
          <ImageBackground
            source={AnnouncementBg}
            style={styles.announcement_bg}
            resizeMode="stretch"
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 30,
              }}
            >
              <Image source={SpeakerBg} style={styles.speaker_bg} />
              <View style={{ width: "80%", marginLeft: 15 }}>
                <MarqueeText
                  style={{
                    color: "white",
                    marginLeft: 10,
                    width: "100%",
                    height: "100%",
                  }}
                  speed={0.1}
                  marqueeOnStart={true}
                  loop={true}
                  delay={1000}
                >
                  差价已由流红包和福利补齐，请各位老板和!
                  差价已由流红包和福利补齐，请各位老板和
                </MarqueeText>
              </View>
            </View>
          </ImageBackground>
        </View>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          style={styles.room_list_view}
        >
          {lotteries.map((item, i) => {
            const nums = item.preDrawCodes.split(",");
            const remainMinutes = Math.floor(
              (remainTimes[i] - Math.floor(remainTimes[i] / 3600) * 3600) / 60
            );
            const remainSeconds =
              remainTimes[i] - Math.floor(remainTimes[i] / 60) * 60;
            return (
              <View
                style={[styles.room_list_item_bg, { marginTop: 10 }]}
                onClick={() => {
                  navigation.navigate("GameRoom");
                  dispatch(
                    saveCurrentLottery({
                      ...lotteries[i],
                      remainTimes: remainTimes[i],
                    })
                  );
                }}
                key={i}
              >
                <ImageBackground
                  source={GameListItemBg}
                  style={styles.room_list_item_bg}
                  resizeMode="stretch"
                >
                  <View>
                    <View style={styles.item_upper_part}>
                      <View style={styles.symbol_img_view}>
                        <Image
                          source={{
                            uri: `${ROOM_IMG_URL}/gameSymbolBg${i + 1}.png`,
                          }}
                          style={{
                            width: 50,
                            height: 40,
                            resizeMode: "contain",
                            marginRight: 15,
                          }}
                        />
                        <Image
                          source={{
                            uri: `${ROOM_IMG_URL}/gameTypeTextBg${i + 1}.png`,
                          }}
                          style={{
                            width: 80,
                            height: 25,
                            resizeMode: "contain",
                          }}
                        />
                      </View>
                      <View style={styles.room_info_view}>
                        <View>
                          <Text style={{ color: "white", marginBottom: 5 }}>
                            第{item.drawIssues}期
                          </Text>
                        </View>
                        {item.status == "block" || remainTimes[i] == 0 ? (
                          <Text style={{ color: "red" }}>封盘中</Text>
                        ) : item.status == "drawing" ? (
                          <Text style={{ color: "orange" }}>正在开奖</Text>
                        ) : (
                          <View style={styles.countdown_view}>
                            <GreyCardComponent
                              number={Math.floor(remainMinutes / 10) % 10}
                              style={{ marginLeft: 0 }}
                            />
                            <GreyCardComponent
                              number={remainMinutes % 10}
                              style={{ marginLeft: 5 }}
                            />
                            <View
                              style={{
                                width: 10,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  color: "#eeeff0",
                                  marginTop: -10,
                                }}
                              >
                                :
                              </Text>
                            </View>
                            <GreyCardComponent
                              number={Math.floor(remainSeconds / 10) % 10}
                              style={{ marginLeft: 0 }}
                            />
                            <GreyCardComponent
                              number={remainSeconds % 10}
                              style={{ marginLeft: 5 }}
                            />
                          </View>
                        )}
                      </View>
                    </View>
                    <View style={styles.item_lower_part}>
                      <View
                        style={{
                          width: "18%",
                          height: "100%",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 14,
                            marginTop: 7,
                          }}
                        >
                          {(item.drawIssues % 1000) - 1}期
                        </Text>
                      </View>
                      <View style={styles.game_result_view}>
                        {nums.map((item, i) => {
                          return (
                            <ResultNumCardComponent
                              number={parseInt(item)}
                              key={i}
                            />
                          );
                        })}
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.bottom_view}>
          {/* <View style={styles.bottom_btn_view}>
            <Image source={GameMenuTopUpBg} style={styles.bottom_btn_img} />
          </View> */}
          <View style={styles.bottom_btn_view}>
            <Image
              source={GameMenuCustomerBg}
              style={styles.bottom_btn_img}
              onClick={() => {
                navigation.navigate("CustomerService");
              }}
            />
          </View>
          <View style={styles.bottom_btn_view}>
            <Image
              source={GameMenuWalletBg}
              style={styles.bottom_btn_img}
              onClick={() => {
                navigation.navigate("WalletCenter");
              }}
            />
          </View>
          <View style={styles.bottom_btn_view}>
            <Image
              source={GameMenuIntroBg}
              style={styles.bottom_btn_img}
              onClick={() => {
                navigation.navigate("Introduction");
              }}
            />
          </View>
          <View
            style={styles.bottom_btn_view}
            onClick={() => {
              navigation.navigate("Setting");
            }}
          >
            <Image source={GameMenuPersonalBg} style={styles.bottom_btn_img} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -70,
  },
  containerBackground: {
    flex: 1,
  },
  headerBackground: {
    height: 70,
  },
  header_view: {
    flexDirection: "row",
    width: "100%",
    height: 60,
  },
  back_btn_view: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  back_btn: {
    width: 35,
    height: 35,
    resizeMode: "stretch",
  },
  title_view: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  announcement_view: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    justifyContent: "center",
  },
  announcement_bg: {
    width: "100%",
    height: 30,
  },
  speaker_bg: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  room_list_view: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  room_list_item_bg: {
    width: "100%",
    height: 110,
    marginTop: 10,
  },
  item_upper_part: {
    height: 74,
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  symbol_img_view: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: 20,
  },
  room_info_view: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  countdown_view: {
    flexDirection: "row",
  },
  item_lower_part: {
    height: 36,
    flexDirection: "row",
  },
  game_result_view: {
    width: "78%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom_view: {
    flexDirection: "row",
    justifySelf: "flex-end",
    height: 70,
  },
  bottom_btn_view: {
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom_btn_img: {
    width: "80%",
    height: 60,
    resizeMode: "contain",
  },
});

export default GameHallPage;
