import {Image, StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';

const Width = Dimensions.get('window').width;
const {height} = Dimensions.get('window');
const SelectedImage = ({image}: any) => {
  return (
    <View style={styles.container}>
      {image.length > 0 && (
        <Image
          source={{uri: image}}
          style={{width: Width, height: height / 2.5}}
        />
      )}
    </View>
  );
};

export default SelectedImage;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
});
