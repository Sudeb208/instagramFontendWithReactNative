/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect} from 'react';

import * as ImagePicker from 'react-native-image-picker';

const FilePicker = ({setImage}: {setImage: Function}) => {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log(granted);

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestCameraPermission();
  }, []);

  const getPhotos = async () => {
    try {
      await ImagePicker.launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: false,
        },
        (response: any) => {
          console.log('uri', response.assets[0].uri);
          setImage(response);
        },
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={() => getPhotos()}>
        <Text style={{color: '#fff'}}>click for image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilePicker;

const styles = StyleSheet.create({});
