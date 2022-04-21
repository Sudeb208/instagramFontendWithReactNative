import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {h, w} from '../../lib/widthAndHeight';
import Icon from 'react-native-vector-icons/AntDesign';

const BodyPart = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.fristPart}
        onPress={() => console.log('hello world')}>
        <Icon name="user" size={w(0.1)} />
        <View style={{marginLeft: w(0.04)}}>
          <Text style={styles.userName}>user Name</Text>
          <Text style={styles.notification}>active time or seen time</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.lastPart}>
        <Icon name="camerao" size={w(0.1)} />
      </View>
    </View>
  );
};

export default BodyPart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: w(0.05),
    marginBottom: h(0.02),
  },
  fristPart: {
    flexDirection: 'row',
    flex: 1,
  },
  userName: {
    fontSize: w(0.05),
    fontWeight: '500',
  },
  notification: {
    fontSize: w(0.04),
  },
  lastPart: {},
});
