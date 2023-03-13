import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import HeaderComponent from "../../components/Header.com";
import ImportImageBtnBg from "./img/importImageBtnBg.png";
import SendMsgBtnBg from "./img/sendMsgBtnBg.png";
import {
  SentMessageBox,
  ReceivedMessageBox,
} from "../../components/MessageBox.com";
import {
  API_BASE,
  ARRYA_ERROR_MSG,
  RES_MSG_SERVER_ERROR,
  RES_STATUS_SUCCESS,
  SOCKET_CHAT_GET_DATA,
  SOCKET_CHAT_JOIN_ROOM,
  SOCKET_CHAT_SEND_MESSAGE,
  SOCKET_CHAT_SENT,
  USER_SEND_MSG,
} from "../../config/constants";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../services/socket.service";
import { checkSocketResponse } from "../../utils";
import { showToast } from "../../redux/toastReducer";

const CustomerServicePage = ({ navigation }) => {
  const userInfo = useSelector((state) => state.authState.userInfo);
  const currentRoom = useSelector((state) => state.roomsState.currentRoom);
  const [messageHistory, setMessageHistory] = useState([]);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    socket.open();

    socket.emit(SOCKET_CHAT_JOIN_ROOM, {
      userID: userInfo._id,
      roomID: currentRoom._id,
    });

    socket.on(SOCKET_CHAT_JOIN_ROOM, async (response) => {
      const res = await checkSocketResponse(response);
      if (res.status === RES_STATUS_SUCCESS) {
        if (res.data) setMessageHistory(res.data.msg);
      } else {
        dispatch(showToast({ message: ARRYA_ERROR_MSG[res.status] }));
      }
    });

    socket.on(SOCKET_CHAT_SENT, async (response) => {
      const res = await checkSocketResponse(response);
      console.log(response);
      if (res.status === RES_STATUS_SUCCESS) {
        if (response.sendTo == 1) {
          setMessageHistory((messageHistory) => [
            ...messageHistory,
            {
              content_type: "letter",
              sender_type: "user",
              msg: response.content,
            },
          ]);
          setMessage("");
        } else
          setMessageHistory((messageHistory) => [
            ...messageHistory,
            {
              content_type: "letter",
              sender_type: "admin",
              msg: response.content,
            },
          ]);
      } else {
        dispatch(showToast({ message: ARRYA_ERROR_MSG[res.status] }));
      }
    });

    return () => {
      socket.removeAllListeners();
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    socket.emit(SOCKET_CHAT_SEND_MESSAGE, {
      userID: userInfo._id,
      roomID: currentRoom._id,
      sendTo: USER_SEND_MSG,
      msg: message,
    });
  };

  const inputScrollRef = useRef();

  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} title={"在线客服"} />
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={styles.chat_view}
        onContentSizeChange={() => {
          inputScrollRef.current.scrollToEnd();
        }}
        ref={inputScrollRef}
      >
        {messageHistory.map((item, i) => {
          if (item.sender_type == "user")
            return (
              <SentMessageBox
                name={userInfo.nickname}
                content={item.msg}
                avatar={userInfo.avatar}
                key={i}
              />
            );
          else
            return (
              <ReceivedMessageBox
                name="金冠"
                content={item.msg}
                avatar="room.png"
                key={i}
              />
            );
        })}
      </ScrollView>
      <View style={styles.bottom_edit_view}>
        {/* <Image source={ImportImageBtnBg} style={styles.edit_btn} /> */}
        <View style={{ width: 20 }} />
        <TextInput
          style={[styles.edit_msg, { outline: "none" }]}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Image
          source={SendMsgBtnBg}
          style={styles.edit_btn}
          onClick={() => sendMessage()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chat_view: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  sent_message_view: {
    marginTop: 15,
    alignItems: "flex-end",
  },
  sent_content_view: {
    width: "fit-content",
    backgroundColor: "#95eb69",
    padding: 10,
  },
  received_message_view: {
    marginTop: 15,
    alignItems: "flex-start",
  },
  received_content_view: {
    width: "fit-content",
    backgroundColor: "white",
    padding: 10,
  },
  name_text: {
    fontSize: 10,
    color: "#838383",
    marginBottom: 2,
  },
  sent_arrow: {
    width: 0,
    height: 20,
    backgroundColor: "#95eb69",
    position: "relative",
    top: 0,
    right: 10,
  },
  sent_inner: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 20,
    borderLeftColor: "#95eb69",
    borderTopWidth: 10,
    borderTopColor: "transparent",
    borderBottomWidth: 10,
    borderBottomColor: "transparent",
  },
  received_arrow: {
    width: 0,
    height: 20,
    backgroundColor: "white",
    position: "relative",
    top: 0,
    left: -10,
  },
  received_inner: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderRightWidth: 20,
    borderRightColor: "white",
    borderTopWidth: 10,
    borderTopColor: "transparent",
    borderBottomWidth: 10,
    borderBottomColor: "transparent",
  },
  bottom_edit_view: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    justifySelf: "flex-end",
    height: 40,
    backgroundColor: "white",
  },
  edit_btn: {
    width: 25,
    height: 25,
    resizeMode: "stretch",
    marginLeft: 10,
    marginRight: 10,
  },
  edit_msg: {
    width: "-webkit-fill-available",
    height: 30,
    backgroundColor: "#f5f5f5",
  },
});

export default CustomerServicePage;
