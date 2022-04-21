import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const AnimatedScreen = () => {
  // state
  const [hide, setHide] = useState(0);

  const progress = useSharedValue(50);
  const opacity = useSharedValue(1);
  const tranfromX = useSharedValue(0);
  const tranfromY = useSharedValue(0);

  const reAnimatedStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      borderRadius: progress.value,
      opacity: opacity.value,
      transform: [{translateX: tranfromX.value}, {translateY: tranfromY.value}],
    };
  }, []);
  // useEffect(() => {
  //   progress.value = withRepeat(withTiming(50, { duration: 1000 }), 5, true);
  //   opacity.value = withRepeat(withTiming(1, { duration: 1000 }), 5, true);
  //   scale.value = withTiming(withRepeat(withSpring(1), 5, true), {
  //     duration: 3000,
  //   });
  // }, []);
  type context = {
    translateX: number;
    translateY: number;
  };

  const PanGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    context
  >({
    onStart: (event, context) => {
      context.translateX = tranfromX.value;
      context.translateY = tranfromY.value;
    },
    onActive: (event, context) => {
      console.log(event);

      tranfromX.value = event.translationX + context.translateX;
      tranfromY.value = event.translationY + context.translateY;
    },
    onEnd: (event, context) => {
      console.log(event.translationY);
      const distantion = Math.sqrt(tranfromX.value ** 2 + tranfromY.value ** 2);
      // event.translationY + context.translateY > 200 ||
      // event.translationX + context.translateX > 200 ||
      // event.translationX + context.translateX < -200 ||
      // event.translationY + context.translateY < -200
      if (distantion < 200) {
        (tranfromX.value = withSpring(0, {damping: 100})),
          ((tranfromY.value = withSpring(0)), {damping: 500});
        // setHide(withSpring(1));
      }
      // (tranfromX.value = withSpring(0)), (tranfromY.value = withSpring(0));
    },
  });

  return (
    <Animated.View
      style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <View style={styles.cricle}>
        {!hide && (
          <PanGestureHandler onGestureEvent={PanGesture}>
            <Animated.View
              style={[
                {
                  width: 100,
                  height: 100,
                  backgroundColor: '#4e5c84',
                  borderRadius: 60,
                },
                reAnimatedStyle,
              ]}
            />
          </PanGestureHandler>
        )}
      </View>
    </Animated.View>
  );
};

export default AnimatedScreen;

const styles = StyleSheet.create({
  cricle: {
    width: 200 * 2,
    height: 200 * 2,
    borderWidth: 5,
    borderColor: 'lightblue',
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
