import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import containerBg from "../../../assets/img/ftLoginBg.png";

import headerBg from "../../../assets/img/headerBg.png";
import LogoutBg from "./img/logoutBg.png";
import PersonalSettingBg from "./img/personalSettingBg.png";
import ActiveTab from "./img/activeTab.png";
import DisableTab from "./img/disableTab.png";
import RoomCodeEditBg from "./img/roomCodeEditBg.png";
import NumberBg from "./img/numberBg.png";
import EnterBtnBg from "./img/enterRoomBtnBg.png";
import BackSpaceBg from "./img/backspaceBg.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authReducer";
import { checkRoom, getRoomList, outRoom } from "../../redux/roomReducer";
import {
  ARRYA_ERROR_MSG,
  RES_MSG_INVALID_ROOMNUMBER,
  AVATAR_URL,
  ROOM_IMG_URL,
  API_BASE,
  SOCKET_JOIN_ROOM,
  SOCKET_SEND_MESSAGE,
} from "../../config/constants";
import { showToast } from "../../redux/toastReducer";
import io from "socket.io-client";
import { saveLotteries } from "../../redux/lotteriesReducer";
import { socket } from "../../services/socket.service";

const RoomEnterPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const historyRooms = useSelector((state) => state.roomsState.historyRooms);
  const entered = useSelector((state) => state.roomsState.entered);
  const userInfo = useSelector((state) => state.authState.userInfo);
  const currentRoom = useSelector((state) => state.roomsState.currentRoom);
  const [roomNumber, setRoomNumber] = useState([]);
  const [recommendRoomNumber, setRecommendRoomNumber] = useState([]);
  const [activateTab, setActivateTab] = useState(0);

  useEffect(() => {
    if (entered) {
      navigation.navigate("GameHall");
    }
    return () => {
      socket.removeAllListeners();
      socket.close();
    };
  }, [entered]);

  const clickLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  const enterRoom = () => {
    if (roomNumber.length != 6) {
      dispatch(
        showToast({ message: ARRYA_ERROR_MSG[RES_MSG_INVALID_ROOMNUMBER] })
      );
      return;
    }
    dispatch(
      checkRoom({
        room_number: !activateTab
          ? roomNumber.reduce((a, b) => a.toString() + b.toString())
          : recommendRoomNumber.reduce((a, b) => a.toString() + b.toString()),
        id: userInfo._id,
      })
    );
  };

  const enterHistoryRoom = (room_number) => {
    dispatch(checkRoom({ room_number: room_number, id: userInfo._id }));
  };

  const input_num = (num) => {
    if (!activateTab) {
      if (roomNumber.length < 6) setRoomNumber([...roomNumber, num]);
    } else {
      if (recommendRoomNumber.length < 6)
        setRecommendRoomNumber([...recommendRoomNumber, num]);
    }
  };
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
          <View style={styles.userInfo_view}>
            <Image
              source={`${AVATAR_URL}/${userInfo.avatar}`}
              style={styles.avatar_img}
            />
            <View style={{ marginTop: 5, marginLeft: 5 }}>
              <Text style={styles.userInfo_text}>
                <b>{userInfo.nickname}</b>
              </Text>
              <Text style={styles.userInfo_text}>
                帐号: {userInfo.username}
              </Text>
            </View>
          </View>
          <View style={styles.action_view}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => navigation.navigate("PersonalSetting")}
            >
              <ImageBackground
                source={PersonalSettingBg}
                style={styles.action_btn}
                resizeMode={"contain"}
              >
                <Text style={styles.action_btn_text}>个人设置</Text>
              </ImageBackground>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => clickLogout()}
            >
              <ImageBackground
                source={LogoutBg}
                style={[styles.action_btn, { marginLeft: 10 }]}
                resizeMode={"contain"}
              >
                <Text style={styles.action_btn_text}>安全退出</Text>
              </ImageBackground>
            </View>
          </View>
        </View>
        <View style={styles.tab_view}>
          <View
            onClick={(e) => {
              setActivateTab(0);
            }}
          >
            <ImageBackground
              source={!activateTab ? ActiveTab : DisableTab}
              style={styles.tab_btn}
            >
              <Text style={styles.tab_text}>房间号码</Text>
            </ImageBackground>
          </View>
          <View
            onClick={(e) => {
              setActivateTab(1);
            }}
          >
            <ImageBackground
              source={activateTab ? ActiveTab : DisableTab}
              style={[styles.tab_btn, { marginLeft: 20 }]}
            >
              <Text style={styles.tab_text}>推荐码</Text>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.enter_code_view}>
          <ImageBackground
            source={RoomCodeEditBg}
            style={styles.room_code_input}
            resizeMode="stretch"
          >
            {activateTab === 0 ? (
              <View style={styles.input_number_view}>
                <ImageBackground
                  source={NumberBg}
                  style={styles.number_edit_bg}
                >
                  <Text style={{ fontSize: 20 }}>
                    {roomNumber.length >= 1 ? roomNumber[0] : ""}
                  </Text>
                </ImageBackground>
                <ImageBackground
                  source={NumberBg}
                  style={styles.number_edit_bg}
                >
                  <Text style={{ fontSize: 20 }}>
                    {roomNumber.length >= 2 ? roomNumber[1] : ""}
                  </Text>
                </ImageBackground>
                <ImageBackground
                  source={NumberBg}
                  style={styles.number_edit_bg}
                >
                  <Text style={{ fontSize: 20 }}>
                    {roomNumber.length >= 3 ? roomNumber[2] : ""}
                  </Text>
                </ImageBackground>
                <ImageBackground
                  source={NumberBg}
                  style={styles.number_edit_bg}
                >
                  <Text style={{ fontSize: 20 }}>
                    {roomNumber.length >= 4 ? roomNumber[3] : ""}
                  </Text>
                </ImageBackground>
                <ImageBackground
                  source={NumberBg}
                  style={styles.number_edit_bg}
                >
                  <Text style={{ fontSize: 20 }}>
                    {roomNumber.length >= 5 ? roomNumber[4] : ""}
                  </Text>
                </ImageBackground>
                <ImageBackground
                  source={NumberBg}
                  style={styles.number_edit_bg}
                >
                  <Text style={{ fontSize: 20 }}>
                    {roomNumber.length >= 6 ? roomNumber[5] : ""}
                  </Text>
                </ImageBackground>
              </View>
            ) : (
              <View
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "white",
                  outline: "none",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#aaa", fontSize: 18 }}>
                  {!recommendRoomNumber.length
                    ? "请输入5-8位推荐码"
                    : recommendRoomNumber.reduce(
                        (a, b) => a.toString() + b.toString()
                      )}
                </Text>
              </View>
            )}
          </ImageBackground>
        </View>
        <View
          style={styles.enter_room_btn_view}
          onClick={() => {
            enterRoom();
          }}
        >
          <Image source={EnterBtnBg} style={styles.enter_room_btn_bg} />
        </View>
        <View style={styles.room_history_view}>
          <Text style={{ marginLeft: "8%", fontSize: 17, marginTop: 10 }}>
            <b>历史房间 : </b>
          </Text>
          <ScrollView
            style={styles.room_history_scroll_view}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {historyRooms.map((item, i) => {
              return (
                <View
                  style={styles.history_room_panel}
                  key={i}
                  onClick={() => enterHistoryRoom(item.room)}
                >
                  <View style={styles.history_room_card}>
                    <Image
                      source={`${ROOM_IMG_URL}/${item.roomImg}`}
                      style={styles.histroy_room_bg}
                    />
                  </View>
                  <Text style={styles.history_room_num}>{item.room}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.number_pan_view}>
          <View style={styles.num_row}>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => {
                input_num(1);
              }}
            >
              <Text style={{ fontSize: 25 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => {
                input_num(2);
              }}
            >
              <Text style={{ fontSize: 25 }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => {
                input_num(3);
              }}
            >
              <Text style={{ fontSize: 25 }}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.num_row}>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => {
                input_num(4);
              }}
            >
              <Text style={{ fontSize: 25 }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => {
                input_num(5);
              }}
            >
              <Text style={{ fontSize: 25 }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => {
                input_num(6);
              }}
            >
              <Text style={{ fontSize: 25 }}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.num_row}>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => {
                input_num(7);
              }}
            >
              <Text style={{ fontSize: 25 }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => {
                input_num(8);
              }}
            >
              <Text style={{ fontSize: 25 }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => {
                input_num(9);
              }}
            >
              <Text style={{ fontSize: 25 }}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.num_row}>
            <TouchableOpacity style={styles.num_column}></TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => {
                input_num(0);
              }}
            >
              <Text style={{ fontSize: 25 }}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => {
                !activateTab
                  ? setRoomNumber(roomNumber.slice(0, -1))
                  : setRecommendRoomNumber(recommendRoomNumber.slice(0, -1));
              }}
            >
              <Image
                source={BackSpaceBg}
                style={{ width: 30, height: 20, resizeMode: "stretch" }}
              />
            </TouchableOpacity>
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
    flex: 0.1,
    flexDirection: "row",
    width: "100%",
  },
  userInfo_view: {
    width: "45%",
    marginTop: 5,
    marginLeft: 15,
    flexDirection: "row",
  },
  userInfo_text: {
    color: "white",
  },
  avatar_img: {
    width: 50,
    height: 50,
  },
  action_view: {
    width: "50%",
    flexDirection: "row",
  },
  action_btn: {
    width: 90,
    height: 35,
    textAlign: "center",
    alignSelf: "center",
  },
  action_btn_text: {
    color: "white",
    marginTop: 8,
    marginLeft: 15,
  },
  tab_view: {
    flex: 0.13,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tab_btn: {
    width: 100,
    height: 35,
    resizeMode: "contain",
  },
  tab_text: {
    color: "white",
    height: "100%",
    textAlign: "center",
    paddingTop: 7,
  },
  enter_code_view: {
    flex: 0.13,
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  room_code_input: {
    height: 75,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input_number_view: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
  },
  number_edit_bg: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  recommendation_code_input: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    outline: "none",
    color: "#aaa",
    fontSize: 18,
  },
  enter_room_btn_view: {
    flex: 0.07,
    justifyContent: "center",
    alignItems: "center",
  },
  enter_room_btn_bg: {
    width: "80%",
    height: 40,
    resizeMode: "stretch",
  },
  room_history_view: {
    flex: 0.3,
  },
  room_history_scroll_view: {
    width: "80%",
    marginTop: 20,
    marginLeft: "8%",
  },
  history_room_view: {
    flex: 0.2,
    backgroundColor: "black",
  },
  history_room_panel: {
    marginRight: 20,
  },
  history_room_card: {
    width: 78,
    height: 78,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  histroy_room_bg: {
    resizeMode: "stretch",
    width: 70,
    height: 70,
  },
  history_room_num: {
    marginTop: 5,
    textAlign: "center",
  },
  number_pan_view: {
    backgroundColor: "#f6f6f6",
    flex: 0.3,
  },
  num_row: {
    height: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  num_column: {
    width: "33.33%",
    height: "100%",
    textAlign: "center",
    borderColor: "#aaa",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RoomEnterPage;
