/* eslint-disable react-hooks/exhaustive-deps */
import {PermissionsAndroid, Platform, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderPost from '../component/PostGallerys/HeaderPost';
import CameraRoll from '@react-native-community/cameraroll';
import SelectedImage from '../component/PostGallerys/SelectedImage';
import GalleryImages from '../component/PostGallerys/GalleryImages';
import {ScrollView} from 'react-native-gesture-handler';

//get stroage permition
const hasAndroidPermission = async () => {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
};
//end get stroage permition

const PostGalleryScreen = ({navigation}: any) => {
  const [file, setFile]: any = useState([]);
  const [images, setImages]: any = useState([]);
  const [selectImage, setSelectImage]: any = useState('');
  const [selectFile, setSelectFile] = useState('');
  console.log(selectImage);

  async function getFileName() {
    try {
      if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
        return;
      }
      //   CameraRoll.save(tag, { type, album });
      const data = await CameraRoll.getAlbums({assetType: 'All'});
      console.log(data);
      setFile(data);
    } catch (error) {
      console.log(error);
    }
  }
  const getPhotos = async () => {
    try {
      if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
        return;
      }
      //   CameraRoll.save(tag, { type, album });
      const data = await CameraRoll.getPhotos({
        first: 100,
        assetType: 'All',
        groupName: selectFile,
      });
      console.log(data);
      setImages(data.edges);
      setSelectImage(data.edges[0].node.image.uri);
    } catch (error) {}
  };
  useEffect(() => {
    getFileName();
    getPhotos();
  }, [selectFile]);
  return (
    <View style={styles.container}>
      <View>
        <HeaderPost
          file={file}
          selectFile={selectFile}
          setSelectFile={setSelectFile}
          navigation={navigation}
          selectImage={selectImage}
        />
        <SelectedImage image={selectImage} />
      </View>
      <ScrollView>
        <GalleryImages images={images} setSelectImage={setSelectImage} />
      </ScrollView>
    </View>
  );
};

export default PostGalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
