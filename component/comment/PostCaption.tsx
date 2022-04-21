import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const PostCaption = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <TouchableOpacity>
          <Icon name="user" size={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.profileName}>
          Profile name{' '}
          <Text style={styles.caption}>
            CaptioneyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjM3OWIyNjI0NmQ1NjRiNDMyNTU2NzkiLCJmcmlzdE5hbWUiOiJzZXR1IiwibGFzdE5hbWUiOiJjaGFrcmFicm90eSIsImVtYWlsIjoic3VkZWIyMDhAZ21haWwuY29tIiwidXNlck5hbWUiOiJzZXR1bVotOC1aTTNGbSIsImlhdCI6MTY0OTg2MzE2NSwiZXhwIjoxNjUwNDY3OTY1fQ.Pojds-IRed9bb_dppg3hwkL0m8usYkx3N_c16mINCtY
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default PostCaption;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    paddingRight: 10,
  },
  leftSide: {
    flex: 1,
  },
  rightSide: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  caption: {
    fontWeight: '400',
    fontSize: 14,
    marginLeft: 10,
  },
});
