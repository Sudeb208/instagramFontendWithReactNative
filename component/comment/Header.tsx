import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';

const Header = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={35} />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Comments</Text>
      </View>
      <View style={styles.rightSide}>
        <TouchableOpacity>
          <Icons name="send" size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  leftSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  rightSide: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
});
