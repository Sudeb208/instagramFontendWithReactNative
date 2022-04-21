import {
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import posts from "../../data/posts";

const windowWidth = Dimensions.get("window").width;

const ProfileLastPart = ({
  postIcon,
  setPostIcon,
  tagIcon,
  setTagIcon,
}: {
  postIcon: boolean;
  setPostIcon: Function;
  tagIcon: boolean;
  setTagIcon: Function;
}) => {
  return (
    <View>
      <View style={styles.icons}>
        <Animated.View
          style={[
            {
              alignItems: "center",
              flex: 1,
              borderBottomColor: "#ccc",
              borderBottomWidth: postIcon ? 2 : 0,
              paddingBottom: 5,
            },
          ]}
          onStartShouldSetResponder={() => true}
          onResponderGrant={() => {
            setPostIcon(true);
            setTagIcon(false);
          }}
        >
          <Icon name="windowso" size={35} />
        </Animated.View>
        <Animated.View
          style={{
            alignItems: "center",
            flex: 1,
            borderBottomColor: "#ccc",
            borderBottomWidth: tagIcon ? 2 : 0,
            paddingBottom: 5,
          }}
          onStartShouldSetResponder={() => true}
          onResponderGrant={() => {
            setPostIcon(false);
            setTagIcon(true);
          }}
        >
          <Feather name="users" size={35} />
        </Animated.View>
      </View>
    </View>
  );
};

export const Mypost = () => (
  <View
    style={{
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: 5,
    }}
  >
    {posts.map((data, index) => {
      return (
        <View key={index} style={{ marginBottom: 3, marginRight: 1.5 }}>
          <Image
            source={{ uri: data.image }}
            style={{ width: windowWidth / 3 - 2, height: 120 }}
          />
        </View>
      );
    })}
    {posts.map((data, index) => {
      return (
        <View key={index} style={{ marginBottom: 3, marginRight: 1.5 }}>
          <Image
            source={{ uri: data.image }}
            style={{ width: windowWidth / 3 - 2, height: 120 }}
          />
        </View>
      );
    })}
    {posts.map((data, index) => {
      return (
        <View key={index} style={{ marginBottom: 3, marginRight: 1.5 }}>
          <Image
            source={{ uri: data.image }}
            style={{ width: windowWidth / 3 - 2, height: 120 }}
          />
        </View>
      );
    })}
    {posts.map((data, index) => {
      return (
        <View key={index} style={{ marginBottom: 3, marginRight: 1.5 }}>
          <Image
            source={{ uri: data.image }}
            style={{ width: windowWidth / 3 - 2, height: 120 }}
          />
        </View>
      );
    })}
  </View>
);

// tag post
export const TagPost = () => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: 5,
    }}
  >
    {posts.map((data, index) => {
      return (
        <View key={index} style={{ marginBottom: 3 }}>
          <Image
            source={{ uri: data.image }}
            style={{ width: windowWidth / 3 - 2, height: 120 }}
          />
        </View>
      );
    })}
  </View>
);

export default ProfileLastPart;

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
  },
});
