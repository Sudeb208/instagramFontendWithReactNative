import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {w} from '../../lib/widthAndHeight';

const MessageHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fristPart}>
        <TouchableOpacity style={{marginRight: w(0.05)}}>
          <Icon name="arrowleft" size={w(0.09)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userNamePart}>
          <Text style={styles.userName}>Sudeb </Text>
          <Icon name="down" size={w(0.05)} />
        </TouchableOpacity>
      </View>
      <View style={styles.fristPart}>
        <TouchableOpacity style={{marginRight: w(0.05)}}>
          <Icon name="bars" size={w(0.09)} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: w(0.05)}}>
          <Icon name="form" size={w(0.09)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: w(0.03),
  },
  fristPart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  userNamePart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
