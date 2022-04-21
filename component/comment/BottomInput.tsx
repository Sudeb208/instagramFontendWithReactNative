import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BottomInput = ({
  post_id,
  getComment,
  comment_id,
  commentText,
  setCommentText,
  inputFocus,
}: {
  post_id: string;
  getComment: Function;
  comment_id: string;
  commentText: string;
  setCommentText: Function;
  inputFocus: any;
}) => {
  const postComment = async () => {
    const token = await AsyncStorage.getItem('token');
    commentText.length > 0 &&
      fetch('http://192.168.43.247:4001/api/comment/create/new', {
        method: 'POST',
        headers: {
          Authorization: `Berer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post_id,
          parent_id: comment_id.length > 0 ? comment_id : '',
          comment: commentText,
        }),
      })
        .then(res => res.json())
        .then(json => {
          console.log(json);
          setCommentText('');
          getComment();
        })
        .catch(error => {
          console.error(error);
        });
  };
  return (
    <View style={styles.container}>
      <View style={styles.fristSide}>
        <TouchableOpacity>
          <Icon name="user" size={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.middleSide}>
        <TouchableOpacity>
          <TextInput
            placeholder="Add a comment"
            value={commentText}
            onChangeText={text => setCommentText(text)}
            ref={inputFocus}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lastSide}>
        <TouchableOpacity
          onPress={() => postComment()}
          disabled={commentText.length <= 0 ? true : false}>
          <Text
            style={{
              fontSize: 18,
              color:
                commentText.length > 0
                  ? 'rgba(48, 86, 151, 0.945)'
                  : 'rgba(48, 86, 151, 0.522)',
            }}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    position: 'absolute',
    bottom: 0,
    borderTopColor: '#cccccc',
    borderTopWidth: 0.5,
    backgroundColor: '#dddddd',
  },
  fristSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSide: {
    flex: 8,
    paddingLeft: 10,
  },
  lastSide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
