/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';

import {Picker} from '@react-native-picker/picker';

import Icon from 'react-native-vector-icons/AntDesign';
function HeaderPost({
  file,
  selectFile,
  setSelectFile,
  navigation,
  selectImage,
}: {
  file: [];
  selectFile: string;
  setSelectFile: Function;
  navigation: any;
  selectImage: any;
}) {
  //states

  const pickerRef: any = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Icon name="close" size={35} />
        <View style={{elevation: 100, width: 150}}>
          <Picker
            ref={pickerRef}
            selectedValue={selectFile}
            onValueChange={item => setSelectFile(item)}
            style={{fontSize: 20}}>
            <Picker.Item label="gallery" value="" />
            {file.map((data: {count: number; title: string}, index: number) => (
              <Picker.Item key={index} label={data.title} value={data.title} />
            ))}
          </Picker>
        </View>
      </View>
      <TouchableOpacity>
        <Icon
          name="arrowright"
          size={35}
          onPress={() =>
            navigation.navigate('CreatePostScreen', {imagePath: selectImage})
          }
        />
      </TouchableOpacity>
    </View>
  );
}
export default HeaderPost;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
