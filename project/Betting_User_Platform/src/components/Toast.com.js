import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { showToast, closeToast } from "../redux/toastReducer";

const Toast = () => {
  const toastOpenFlag = useSelector((state) => state.toastState.opened);
  const toastText = useSelector((state) => state.toastState.message);
  const duration = 1.5;

  const timerRef = useRef(null);
  const dispatch = useDispatch();

  const startShowToast = () => {
    timerRef.current = setTimeout(() => {
      dispatch(closeToast());
      clearTimeout(timerRef.current);
    }, duration * 1000);
  };

  useEffect(() => {
    if (toastOpenFlag) {
      startShowToast();
    }
    return () => clearTimeout(timerRef.current);
  }, [toastOpenFlag]);
  return (
    <>
      {toastOpenFlag ? (
        <View style={styles.container}>
          <View style={styles.toast_view}>
            <Text style={styles.toast_txt}>{toastText}</Text>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "calc(50% - 20px)",
    left: "calc(50% - 150px)",
    zIndex: 10,
  },
  toast_view: {
    height: 40,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
  },
  toast_txt: {
    color: "white",
    fontSize: 14,
  },
});

export default Toast;
