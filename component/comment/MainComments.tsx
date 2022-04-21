import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const MainComments = ({
  commentDetails,
  setComment_id,
  setCommentText,
  inputFocus,
}: {
  commentDetails: any;
  setComment_id: Function;
  setCommentText: Function;
  inputFocus: any;
}) => {
  const date = new Date(commentDetails.date);
  const nowDate = new Date(Date.now());
  const seconds = (nowDate.getTime() - date.getTime()) / 1000;
  const minute = seconds / 60;
  const hour = minute / 60;
  const day = hour / 24;

  const time =
    seconds < 59
      ? seconds.toFixed() + 's'
      : minute < 59
      ? minute.toFixed() + 'm'
      : hour < 23
      ? hour.toFixed() + 'h'
      : day.toFixed() + 'd';

  const [viewComment, setViewComment] = useState(false);
  const replyComment = async () => {
    setComment_id(commentDetails._id);
    setCommentText(`@${commentDetails.user_id.fristName} `);
    inputFocus.current.focus();
  };

  return (
    <View
      style={
        {
          // borderBottomWidth: 0.5,
          // borderBottomColor: '#ccc',
          // paddingBottom: 10,
        }
      }>
      <View style={styles.container}>
        <View style={styles.fristPart}>
          <TouchableOpacity>
            <Icon name="user" size={35} />
          </TouchableOpacity>
        </View>
        <View style={styles.secondPart}>
          <View>
            <Text style={styles.profileName}>
              {commentDetails.user_id.fristName} {'  '}
              <Text style={styles.caption}>{commentDetails.comment}</Text>
            </Text>
          </View>
          <View style={styles.captionBottom}>
            <Text style={{flex: 1.2, fontWeight: '600'}}>{time}</Text>
            <Text style={{flex: 1.5}}>1 like</Text>
            <TouchableOpacity style={{flex: 8}} onPress={replyComment}>
              <Text>Reply</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.thirdPart}>
          <TouchableOpacity>
            <Icon name="hearto" />
          </TouchableOpacity>
        </View>
      </View>
      {commentDetails.replyComment.length > 0 && (
        <View style={{paddingLeft: 30}}>
          {viewComment && (
            <Text
              style={{
                borderBottomWidth: 0.5,
                paddingBottom: 3,
                borderBottomColor: '#ccc',
              }}
              onPress={() => setViewComment(false)}>
              Reply
            </Text>
          )}
          {viewComment ? (
            commentDetails.replyComment.map((data: any, index: number) => (
              <MainComments
                key={index}
                commentDetails={data}
                setComment_id={setComment_id}
                setCommentText={setCommentText}
                inputFocus={inputFocus}
              />
            ))
          ) : (
            <TouchableOpacity onPress={() => setViewComment(true)}>
              <Text>View Reply</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default MainComments;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  fristPart: {
    flex: 1,
  },
  secondPart: {
    flex: 8,
  },
  thirdPart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  caption: {
    fontWeight: '400',
    fontSize: 14,
    marginLeft: 10,
  },
  captionBottom: {
    flexDirection: 'row',
    marginTop: 5,
  },
});
