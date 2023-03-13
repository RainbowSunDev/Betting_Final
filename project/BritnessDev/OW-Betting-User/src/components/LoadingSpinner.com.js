import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { closeLoadingSpinner } from "../redux/loadingSpinnerReducer";
import { LoadingMessage } from "../config/constants";

const LoadingSpinner = () => {
  const SpinnerOpenFlag = useSelector(
    (state) => state.loadingSpinnerState.opened
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [SpinnerOpenFlag]);
  return (
    <>
      {SpinnerOpenFlag ? (
        <View style={styles.container}>
          <View style={styles.spinner_view}>
            <ActivityIndicator
              color="grey"
              size="Large"
              style={styles.spinner}
            />
            <Text style={styles.loading_text}>{LoadingMessage}</Text>
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
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  spinner_view: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
    opacity: 0.8,
  },
  spinner: {
    width: 50,
    height: 50,
  },
  loading_text: {
    color: "white",
    fontSize: 16,
  },
});

export default LoadingSpinner;
