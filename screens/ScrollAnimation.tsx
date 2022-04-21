import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import React from 'react';
import Page from '../component/message/Page';

const array = ['whats', 'up', ' bangladesh'];
const ScrollAnimation = () => {
  // const {width} = Dimensions.get('window');

  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <Animated.ScrollView
      horizontal
      style={styles.container}
      onScroll={scrollHandler}
      pagingEnabled
      scrollEnabled={true}>
      {array.map((data, index) => (
        <Page data={data} index={index} key={index} translateX={translateX} />
      ))}
    </Animated.ScrollView>
  );
};

export default ScrollAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
