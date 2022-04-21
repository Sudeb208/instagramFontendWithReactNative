/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Switch} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const uploadPostSchema = yup.object().shape({
  caption: yup.string().max(2200, 'Caption has reached the charecter'),
  boost: yup.boolean(),
});

const FormikPostUploader = ({route, _image, navigation}: any) => {
  // defult image url
  const placeholderImage =
    'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg';
  // image url getting from params
  const thumbnailUrl = route.params.imagePath;

  const handleSubmits = async (
    values: {caption: string; boost?: boolean},
    resetFrom: Function,
  ) => {
    try {
      const formData = new FormData();
      formData.append('postPicture', {
        name: thumbnailUrl,
        uri: thumbnailUrl,
        type: 'image/jpeg',
      });
      // formData.append('postPicture', image && imageData);
      formData.append('caption', values.caption);
      const token = await AsyncStorage.getItem('token');
      const datas = await fetch('http://192.168.43.247:4001/api/create/post', {
        method: 'POST',
        headers: {
          Authorization: `Berer ${token}`,
        },
        body: formData,
      });
      if (datas.status === 201) {
        resetFrom({});
        navigation.push('HomeScreen');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={{caption: '', boost: false}}
      onSubmit={(values, {resetForm}) => handleSubmits(values, resetForm)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}>
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        isValid,
        setFieldValue,
      }) => (
        <>
          {/* image and caption  */}
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              padding: 20,
            }}>
            <Image
              source={{uri: thumbnailUrl ? thumbnailUrl : placeholderImage}}
              style={{width: 100, height: 100}}
            />
            <TextInput
              style={{color: '#fff', fontSize: 20, flex: 1, marginLeft: 18}}
              placeholder="Write a caption ..."
              placeholderTextColor={'gray'}
              multiline={true}
              onChangeText={handleChange('caption')}
              onBlur={handleBlur('caption')}
              value={values.caption}
            />
          </View>
          {/* other option */}
          <View style={styles.block}>
            <TouchableOpacity>
              <Text style={styles.text}>Tag people</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.block}>
            <TouchableOpacity>
              <Text style={styles.text}>Add location</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.block}>
            <TouchableOpacity>
              <Text style={styles.text}>Add reminder</Text>
            </TouchableOpacity>
          </View>
          {/* switch  */}
          <View
            style={[
              {
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              },
              styles.block,
            ]}>
            <Text style={styles.text}>Boost Post</Text>
            <Switch
              value={values.boost}
              onValueChange={() => {
                setFieldValue('boost', !values.boost);
              }}
              trackColor={{true: '#0f6dbf', false: '#ccc'}}
            />
          </View>
          {/* share post other platfrom */}
          <View style={[styles.block, {marginBottom: 2}]}>
            <Text style={[styles.text, {fontSize: 16, marginBottom: 2}]}>
              Also post to
            </Text>
            <View
              style={[
                {
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                },
              ]}>
              <Text style={styles.text}>Facebook</Text>
              <Switch
                value={values.boost}
                onValueChange={() => {
                  setFieldValue('boost', !values.boost);
                }}
                trackColor={{true: '#0f6dbf', false: '#ccc'}}
              />
            </View>
            <View
              style={[
                {
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginVertical: 10,
                },
              ]}>
              <Text style={styles.text}>Twitter</Text>
              <Switch
                value={values.boost}
                onValueChange={() => {
                  setFieldValue('boost', !values.boost);
                }}
                trackColor={{true: '#0f6dbf', false: '#ccc'}}
              />
            </View>
            <View
              style={[
                {
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                },
              ]}>
              <Text style={styles.text}>Boost Post</Text>
              <Switch
                value={values.boost}
                onValueChange={() => {
                  setFieldValue('boost', !values.boost);
                }}
                trackColor={{true: '#0f6dbf', false: '#ccc'}}
              />
            </View>
          </View>
          <TouchableOpacity>
            <Text style={{color: '#fff', marginBottom: 10}}>Advence</Text>
          </TouchableOpacity>
          <Button
            onPress={() => handleSubmit()}
            title="Share"
            disabled={!isValid}
          />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;

const styles = StyleSheet.create({
  text: {color: '#fff', fontSize: 18},
  block: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
});
