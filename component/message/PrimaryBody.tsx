import {StyleSheet, View} from 'react-native';
import React from 'react';
import {h, w} from '../../lib/widthAndHeight';
import BodyPart from './BodyPart';
import {ScrollView} from 'react-native-gesture-handler';

const PrimaryBody = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <BodyPart />
        <BodyPart />
        <BodyPart />
      </ScrollView>
    </View>
  );
};

export default PrimaryBody;

const styles = StyleSheet.create({
  container: {
    width: w(1),
    height: h(1),
  },
});
