/* eslint-disable @typescript-eslint/no-unused-vars */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {h, w} from '../lib/widthAndHeight';

const windowHeight = Dimensions.get('screen').height;
const MyBottomSheet = ({
  show,
  setShow,
  children,
  height,
}: {
  show: boolean;
  setShow: Function;
  children?: React.ReactNode;
  height?: number;
}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#ccc',
          padding: 16,
          opacity: 0.3,
          position: 'absolute',
          width: w(1),
          height: h(2),
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 20,
          zIndex: 40,
        }}
        onStartShouldSetResponder={() => true}
        onResponderGrant={() => setShow(false)}
      />
      <View style={[styles.BottomSheetStyle, {height: height ? height : 300}]}>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <View
            style={{
              width: 50,
              height: 5,
              backgroundColor: '#7d7d7d',
              borderRadius: 30,
              alignContent: 'center',
            }}
          />
        </View>
        {children}
        {/* <Button title="cancel" onPress={() => setShow(false)} /> */}
      </View>
    </View>
  );
};

export default MyBottomSheet;

const styles = StyleSheet.create({
  BottomSheetStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: w(1),
    elevation: 300,
    opacity: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    paddingTop: 10,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {height: 200, width: 500},
    shadowRadius: 20,
    zIndex: 50,
  },
});
