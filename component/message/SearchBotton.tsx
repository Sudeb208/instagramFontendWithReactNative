import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {h, w} from '../../lib/widthAndHeight';

const SearchBotton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fristPart}>
        <Icon name="search1" size={w(0.05)} style={{marginRight: w(0.03)}} />
        <Text>Search</Text>
      </View>
      <Icon name="menuunfold" size={w(0.05)} />
    </View>
  );
};

export default SearchBotton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: w(0.06),
    paddingHorizontal: w(0.03),
    backgroundColor: 'lightgray',
    height: h(0.05),
    alignItems: 'center',
    borderRadius: 10,
  },
  fristPart: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
