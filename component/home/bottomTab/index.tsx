import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const ScreenHeight = Dimensions.get("screen").height;
const windowHeight = Dimensions.get("window").height;
const navBarHeight = ScreenHeight - windowHeight;

const BottomTab = ({ icons, navigation }: any) => {
  const [activeIcon, setActiveIcon] = useState("home");
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {icons.map((icon: any, index: any) => (
          <TouchableOpacity
            onPress={() => {
              if (icon.name == "user-alt") {
                navigation.push("ProfileScreen");
              }
              setActiveIcon(icon.name);
            }}
            key={index}
          >
            <Icon
              name={icon.name}
              size={activeIcon == icon.name ? 35 : 30}
              color={activeIcon == icon.name ? "#ccc" : "#fff"}
              style={{ fontWeight: "300" }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "#000000",
  },
  main: {
    position: "absolute",
    zIndex: 9999,
    bottom: 0,
    alignItems: "center",
    right: 0,
    left: 0,
    borderTopWidth: 0.5,
    borderTopColor: "#2e2323",
  },
});
