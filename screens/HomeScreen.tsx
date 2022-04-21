/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../component/home/header/Header';
import Story from '../component/home/story/Story';
import Post from '../component/home/posts/Post';
import bottomIcons from '../data/bottomIcons';
import BottomTab from '../component/home/bottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosIntance from '../helpers/axios';

interface _post {
  title: string;
  image: string;
  user: {
    name: string;
    image: string;
  };
}

const HomeScreen = ({navigation}: any): any => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  //get data from server
  const postData = async () => {
    const data = await axiosIntance('/posts');
    console.log(data.data.posts);
    setPosts(data.data.posts);
  };
  const onRefresh = async () => {
    setLoading(true);
    await postData();
    setLoading(false);
  };
  useEffect(() => {
    postData();
  }, []);
  return (
    <View style={styles.container}>
      {/* header */}
      <Header navigation={navigation} />
      {/* story */}
      <Story />
      {/* posts */}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 30}}>
        {posts.length > 0 &&
          posts.map((data: any, index) => (
            <View
              key={index}
              style={{
                borderBottomColor: '#ccc',
                borderBottomWidth: 0.3,
                paddingTop: 15,
              }}>
              {console.log(data.user_id.fristName)}
              <Post
                title={data.caption}
                image={data.image[0].img}
                name={data.user_id.fristName}
                profileImage={data.user_id.profileImage[0].img}
                comment={[]}
                _id={data._id}
                navigation={navigation}
              />
            </View>
          ))}
      </ScrollView>
      <BottomTab icons={bottomIcons} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
