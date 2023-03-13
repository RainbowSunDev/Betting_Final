import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AVATAR_URL } from "../config/constants";

const SentMessageBox = (props) => {
  return (
    <View style={styles.sent_message_view}>
      <Text style={styles.name_text}>{props.name}</Text>
      <View style={{ flexDirection: "row", alignItems: "top" }}>
        <Text style={styles.sent_content_view}>{props.content}</Text>
        <View style={styles.sent_arrow}>
          <View style={styles.sent_inner}></View>
        </View>
        <Image
          source={{ uri: `${AVATAR_URL}/${props.avatar}` }}
          style={{ width: 40, height: 40, marginLeft: 15 }}
        />
      </View>
    </View>
  );
};

const ReceivedMessageBox = (props) => {
  return (
    <View style={styles.received_message_view}>
      <Text style={styles.name_text}>{props.name}</Text>
      <View style={{ flexDirection: "row", alignItems: "top" }}>
        <Image
          source={{ uri: `${AVATAR_URL}/${props.avatar}` }}
          style={{ width: 40, height: 40, marginRight: 15 }}
        />
        <View style={styles.received_arrow}>
          <View style={styles.received_inner}></View>
        </View>
        <Text style={styles.received_content_view}>{props.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sent_message_view: {
    marginTop: 15,
    alignItems: "flex-end",
  },
  sent_content_view: {
    width: "fit-content",
    backgroundColor: "#95eb69",
    padding: 10,
    borderRadius: 5,
  },
  received_message_view: {
    marginTop: 15,
    alignItems: "flex-start",
  },
  received_content_view: {
    width: "fit-content",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
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

export { SentMessageBox, ReceivedMessageBox };
