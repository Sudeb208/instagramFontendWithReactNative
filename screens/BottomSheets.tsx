import { StatusBar } from "expo-status-bar";
import React, { useCallback, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetRefProps } from "../component/BottomSheet";
import { BottomSheetPress, isActiveOnPress } from "../component/Ref";

export default function BottomSheets() {
  const ref = useRef<BottomSheetRefProps>(null);
  const refs = useRef<BottomSheetRefProps>(null);

  const [value, setValue] = useState(false);
  // console.log(value);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={styles.container}
        onStartShouldSetResponder={() => true}
        onResponderGrant={() => {
          const data = isActiveOnPress(refs);
          // if (data) {
          //   setValue(true);
          // }
        }}
      >
        <StatusBar style="light" />
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: "orange" }} />
        </BottomSheet>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => BottomSheetPress(refs, 0, -300)}
      />
      <BottomSheet ref={refs}>
        <View style={{ flex: 1, backgroundColor: "red", elevation: 222 }}>
          <Text> hello world</Text>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: "white",
    opacity: 0.6,
  },
});
