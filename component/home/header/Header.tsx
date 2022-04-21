import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from "react-native-vector-icons";

export default function Header({navigation}: any) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/logo2.png')}
      />
      <View style={styles.leftSide}>
        <TouchableOpacity onPress={() => navigation.push('PostGallery')}>
          <Icon name="plus" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon style={styles.heart} name="heart" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.message}>
          <View style={styles.unread}>
            <Text style={styles.unreadText}>3</Text>
          </View>
          <Icon name="facebook-messenger" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  logo: {
    width: 150,
    height: 60,
  },
  leftSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heart: {
    paddingHorizontal: 30,
  },
  message: {},
  unread: {
    color: '#fff',
    position: 'absolute',
    elevation: 2,
    zIndex: 4,
    right: -3,
    top: -10,
  },
  unreadText: {
    color: '#fff',
    backgroundColor: '#bb3131',
    padding: 3,
    borderRadius: 25,
  },
});
