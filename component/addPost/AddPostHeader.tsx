/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icons from 'react-native-vector-icons/AntDesign';

const AddPost = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <AddPostHeader navigation={navigation} />
    </View>
  );
};

const AddPostHeader = ({navigation}: any) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={30} color="#fff" />
    </TouchableOpacity>
    <Text style={styles.HeaderText}> New Post</Text>
    <Text />
    <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
      <Icons
        name="check"
        size={30}
        color="#3fc748"
        style={{fontWeight: 'bold'}}
      />
    </TouchableOpacity>
  </View>
);
export default AddPost;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    padding: 10,
    borderBottomWidth: 0.3,
  },
  HeaderText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20,
  },
  container: {
    padding: 10,
    justifyContent: 'center',
  },
});
