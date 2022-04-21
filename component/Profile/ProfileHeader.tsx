import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
const height = Dimensions.get("screen").height;

const ProfileHeader = ({
  show,
  setShow,
  menu,
  setMenu,
  profileSheet,
  setProfileSheet,
}: {
  show: boolean;
  setShow: Function;
  menu: boolean;
  setMenu: Function;
  profileSheet: boolean;
  setProfileSheet: Function;
}) => {
  return (
    <View>
      <View style={styles.container}>
        <View
          style={styles.leftSide}
          onStartShouldSetResponder={() => true}
          onResponderGrant={() => setProfileSheet(!profileSheet)}
        >
          <Text style={styles.name}>sudeb </Text>
          <Icon name="down" size={15} style={{ justifyContent: "center" }} />
        </View>
        <View style={styles.rightSide}>
          <Icon
            color={"#474747"}
            name="plussquareo"
            size={30}
            style={{ marginRight: 30 }}
            onPress={() => setShow(!show)}
          />
          <Icon
            color={"#474747"}
            name="bars"
            size={30}
            onPress={() => {
              setMenu(!menu);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  leftSide: { flexDirection: "row", alignItems: "center" },
  rightSide: { flexDirection: "row", alignItems: "center" },
  name: {
    fontSize: 24,
  },
  BottomSheetStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 450,
    elevation: 300,
    opacity: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "red",
    paddingTop: 30,
  },
});
