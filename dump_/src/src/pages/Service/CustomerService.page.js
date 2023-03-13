import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput
} from "react-native";
import HeaderComponent from "../../components/Header.com";
import ImportImageBtnBg from "./img/importImageBtnBg.png";
import SendMsgBtnBg from "./img/sendMsgBtnBg.png";
import {
  SentMessageBox,
  ReceivedMessageBox
} from "../../components/MessageBox.com";

const CustomerServicePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} title={"在线客服"} />
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={styles.chat_view}
      >
        <SentMessageBox name="Dong" content="1235413245" />
        <ReceivedMessageBox name="金冠客服" content="ery33246346" />
        <SentMessageBox name="Dong" content="1235413245234532424" />
        <SentMessageBox name="Dong" content="1235413245234532424" />
        <ReceivedMessageBox name="金冠客服" content="ery33246346" />
        <ReceivedMessageBox name="金冠客服" content="ery33246346" />
        <SentMessageBox name="Dong" content="1235413245234532424" />
        <ReceivedMessageBox name="金冠客服" content="ery33246346" />
        <SentMessageBox name="Dong" content="1235413245234532424" />
        <ReceivedMessageBox name="金冠客服" content="ery33246346" />
        <SentMessageBox name="Dong" content="1235413245234532424" />
        <ReceivedMessageBox name="金冠客服" content="ery33246346" />
      </ScrollView>
      <View style={styles.bottom_edit_view}>
        <Image source={ImportImageBtnBg} style={styles.edit_btn} />
        <TextInput style={[styles.edit_msg, { outline: "none" }]} />
        <Image source={SendMsgBtnBg} style={styles.edit_btn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chat_view: {
    paddingLeft: 30,
    paddingRight: 30
  },
  sent_message_view: {
    marginTop: 15,
    alignItems: "flex-end"
  },
  sent_content_view: {
    width: "fit-content",
    backgroundColor: "#95eb69",
    padding: 10
  },
  received_message_view: {
    marginTop: 15,
    alignItems: "flex-start"
  },
  received_content_view: {
    width: "fit-content",
    backgroundColor: "white",
    padding: 10
  },
  name_text: {
    fontSize: 10,
    color: "#838383",
    marginBottom: 2
  },
  sent_arrow: {
    width: 0,
    height: 20,
    backgroundColor: "#95eb69",
    position: "relative",
    top: 0,
    right: 10
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
    borderBottomColor: "transparent"
  },
  received_arrow: {
    width: 0,
    height: 20,
    backgroundColor: "white",
    position: "relative",
    top: 0,
    left: -10
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
    borderBottomColor: "transparent"
  },
  bottom_edit_view: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    justifySelf: "flex-end",
    height: 40,
    backgroundColor: "white"
  },
  edit_btn: {
    width: 25,
    height: 25,
    resizeMode: "stretch",
    marginLeft: 10,
    marginRight: 10
  },
  edit_msg: {
    width: "-webkit-fill-available",
    height: 30,
    backgroundColor: "#f5f5f5"
  }
});

export default CustomerServicePage;
