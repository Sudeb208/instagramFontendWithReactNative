import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {h} from '../../lib/widthAndHeight';

const MessageSelect = ({
  selected,
  setSelected,
  primary,
}: {
  selected: number;
  setSelected: Function;
  primary: Function;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          primary(0);
          setSelected(0);
        }}
        style={[
          {
            borderBottomWidth: selected === 0 ? 4 : 0,
          },
          styles.Button,
        ]}>
        <Text
          style={[styles.text, {fontWeight: selected === 0 ? 'bold' : '400'}]}>
          Primary
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          primary(1);
          setSelected(1);
        }}
        style={[
          {
            borderBottomWidth: selected === 1 ? 4 : 0,
          },
          styles.Button,
        ]}>
        <Text
          style={[styles.text, {fontWeight: selected === 1 ? 'bold' : '400'}]}>
          General
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          primary(2);
          setSelected(2);
        }}
        style={[
          {
            borderBottomWidth: selected === 2 ? 4 : 0,
          },
          styles.Button,
        ]}>
        <Text
          style={[styles.text, {fontWeight: selected === 2 ? 'bold' : '400'}]}>
          Requests
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MessageSelect;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    marginBottom: h(0.02),
  },
  text: {fontSize: 18},

  Button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: h(0.02),
    borderRadius: 10,
    borderBottomColor: 'gray',
  },
});
