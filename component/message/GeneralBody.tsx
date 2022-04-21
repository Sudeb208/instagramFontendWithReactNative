import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {h, w} from '../../lib/widthAndHeight';

const GeneralBody = () => {
  return (
    <View style={styles.container}>
      <Text>General body</Text>
    </View>
  );
};

export default GeneralBody;

const styles = StyleSheet.create({
  container: {
    width: w(1),
    backgroundColor: 'red',
    height: h(1),
  },
});
