import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AddPost from '../component/addPost/AddPostHeader';
import FormikPostUploader from '../component/addPost/FormikPostUploader';
import FilePicker from '../component/PostGallerys/FilePicker';

const CreatePostScreen = ({route, navigation}: any) => {
  const [image, setImage] = useState({});
  return (
    <SafeAreaView style={styles.Container}>
      <AddPost navigation={navigation} />
      <FilePicker setImage={setImage} />
      <FormikPostUploader navigation={navigation} route={route} image={image} />
    </SafeAreaView>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
