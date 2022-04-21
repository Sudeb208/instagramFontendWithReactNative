/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

const GalleryImages = ({
  images,
  setSelectImage,
}: {
  images: [];
  setSelectImage: Function;
}) => {
  return (
    <View style={styles.container}>
      {images.length > 0 &&
        images.map((data: any, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectImage(data.node.image.uri)}>
            <Image
              source={{uri: data.node.image.uri}}
              style={{width: 100, height: 100, marginBottom: 4}}
            />
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default GalleryImages;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
