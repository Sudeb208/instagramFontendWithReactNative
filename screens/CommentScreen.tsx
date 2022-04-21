/* eslint-disable react-hooks/exhaustive-deps */
import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Header from '../component/comment/Header';
import PostCaption from '../component/comment/PostCaption';
import MainComments from '../component/comment/MainComments';
import BottomInput from '../component/comment/BottomInput';
import axiosIntance from '../helpers/axios';
import {Text} from 'react-native-paper';

const CommentScreen = ({navigation, route}: any) => {
  console.log(route.params);
  const [comment, setComment] = useState([]);
  const [comment_id, setComment_id] = useState('');
  const [commentText, setCommentText] = useState('');

  const inputFocus = useRef(null);

  const getComment = async () => {
    try {
      const comments = await axiosIntance.post('/comment/post_id', {
        post_id: route.params.postId,
      });
      console.log(comments.data.data);
      setComment(comments.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getComment();
  }, []);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <ScrollView>
        <View style={{marginBottom: 80}}>
          <PostCaption />
          {comment.length > 0 ? (
            comment.map(
              (
                data: {
                  _id: string;
                  comment: string;
                  replyComment: [];
                  user_id: string;
                },
                index: number,
              ) => (
                <MainComments
                  key={index}
                  commentDetails={data}
                  setComment_id={setComment_id}
                  setCommentText={setCommentText}
                  inputFocus={inputFocus}
                />
              ),
            )
          ) : (
            <Text>no comments </Text>
          )}
        </View>
      </ScrollView>
      <BottomInput
        post_id={route.params.postId}
        getComment={getComment}
        comment_id={comment_id}
        commentText={commentText}
        setCommentText={setCommentText}
        inputFocus={inputFocus}
      />
      <Text onPress={getComment}>press</Text>
    </View>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
