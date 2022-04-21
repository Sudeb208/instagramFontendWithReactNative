import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Page = ({data, index, translateX}: any) => {
  const {height, width} = Dimensions.get('window');
  const SIZE = width * 0.7;

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, width * (index + 1)],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    const borderRedious = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, width * (index + 1)],
      [0, SIZE / 2, 0],
    );

    return {
      transform: [{scale}],
      borderRadius: borderRedious,
    };
  });

  return (
    <View
      style={[
        {
          height,
          width,
          backgroundColor: index == 0 ? 'red' : index == 1 ? 'green' : 'blue',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <Animated.View
        style={[
          {
            height: SIZE,
            width: SIZE,
            backgroundColor: 'rgba(0,0,256, 0.8)',
          },
          rStyle,
        ]}>
        <Text>Whats app</Text>
      </Animated.View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
