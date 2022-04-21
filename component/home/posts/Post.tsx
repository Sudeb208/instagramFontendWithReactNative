/* eslint-disable react-hooks/exhaustive-deps */
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';
import Iconss from 'react-native-vector-icons/EvilIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosIntance from '../../../helpers/axios';

//interface for ts
interface post {
  title: string;
  image: string;
  name: string;
  profileImage: string;
  comment: any;
  _id: string;
  navigation: any;
}
const windowWidth = Dimensions.get('window').width;
const Post = ({
  title,
  image,
  name,
  profileImage,
  comment,
  _id,
  navigation,
}: post) => {
  console.log(profileImage);

  return (
    <View style={styles.container}>
      <PostHeader name={name} image={profileImage} />
      {image && (
        <Image
          style={styles.postImage}
          source={{uri: `http://192.168.43.247:4001/public/${image}`}}
        />
      )}
      <PostFooter
        title={title}
        comment={comment}
        image={image}
        name={name}
        postId={_id}
        navigation={navigation}
      />
    </View>
  );
};

// post header
const PostHeader = ({name, image}: {name: string; image: string}) => {
  return (
    <View style={styles.postHeader}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity>
          <Image
            style={styles.profileImage}
            source={{uri: `http://192.168.43.247:4001/public/${image}`}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: '#fff'}}>{name}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 30}}>...</Text>
      </TouchableOpacity>
    </View>
  );
};

// post footer
const PostFooter = ({
  title,
  comment,
  image,
  name,
  postId,
  navigation,
}: {
  title: string;
  comment: any;
  image: string;
  name: string;
  postId: string;
  navigation: any;
}) => {
  const [reacts, setReacts] = useState(0);
  const [isLike, setIsLike] = useState(false);

  //get post like from backend
  const getLike = async () => {
    try {
      const res = await axiosIntance.post('/post/react', {post_id: postId});
      console.log(res.data);
      setReacts(res.data.countReact);
      setIsLike(!isLike);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  // verify post liked
  const isLiked = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      fetch('http://192.168.43.247:4001/api/personreact/post/get', {
        method: 'POST',
        headers: {
          Authorization: `Berer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({post_id: postId}),
      })
        .then(res => res.json())
        .then(json => {
          setIsLike(json.data);
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //create or update personlist for backend
  const createPersonLikeSection = async () => {
    const token = await AsyncStorage.getItem('token');
    fetch('http://192.168.43.247:4001/api/personreact/create', {
      method: 'POST',
      headers: {
        Authorization: `Berer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({post_id: postId}),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json, 'json');
      })
      .catch(error => {
        console.error(error);
      });
  };
  //like submit
  const likeSubmit = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const datas = await fetch(
        'http://192.168.43.247:4001/api/posts&comments/like',
        {
          method: 'POST',
          headers: {
            Authorization: `Berer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({post_id: postId, like: 'like', isPost: true}),
        },
      );
      console.log(datas);

      if (datas.status === 201) {
        console.log(datas);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    console.log('hello world');
    getLike();
    isLiked();
  }, [likeSubmit]);

  return (
    <View style={styles.PostFooter}>
      {/* footer icons */}
      <View style={styles.icons}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={async () => {
              await createPersonLikeSection();
              await likeSubmit();
              await getLike();
              await isLiked();
            }}>
            <Icon
              name={isLike ? 'heart' : 'hearto'}
              size={35}
              color={isLike ? '#FF6666' : '#fff'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push('CommentScreen', {postId})}>
            <Iconss
              style={{marginHorizontal: 30}}
              name="comment"
              size={35}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons name="send" size={35} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../../assets/saveDark.png')}
          />
        </TouchableOpacity>
      </View>
      {/* countLike  */}
      <TouchableOpacity style={styles.countLike}>
        <Image
          style={{width: 15, height: 15, borderRadius: 50}}
          source={{uri: image}}
        />
        <Text style={{color: '#ffffffcc', marginLeft: 5}}>
          Liked by
          <Text style={{color: '#fff', fontWeight: '500'}}>
            {' setu'}
          </Text> and{' '}
          <Text style={{color: '#fff', fontWeight: '500'}}>
            {reacts > 0 ? reacts : ''}
          </Text>
        </Text>
      </TouchableOpacity>
      <View>
        <Text style={{color: '#fff'}}>
          {' '}
          <Text style={{fontWeight: '600'}}>{name}</Text>
          {` ${title} `}
        </Text>
      </View>
      <TouchableOpacity>
        <Text style={{color: 'gray'}}>
          View {comment.length > 0 && 'all '}
          {comment.length > 1 ? comment.length : ''}{' '}
          {comment.length > 1 ? 'comments' : 'comment'}{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.6,
    marginRight: 20,
  },
  postImage: {
    marginVertical: 10,
    width: windowWidth,
    height: 500,
  },
  PostFooter: {
    marginHorizontal: 30,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 10,
  },
  icon: {width: 20, height: 25},
  countLike: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
