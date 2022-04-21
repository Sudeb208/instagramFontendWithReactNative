import {StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import MessageHeader from '../component/message/MessageHeader';
import SearchBotton from '../component/message/SearchBotton';
import MessageSelect from '../component/message/MessageSelect';
import Animated from 'react-native-reanimated';
import PrimaryBody from '../component/message/PrimaryBody';
import GeneralBody from '../component/message/GeneralBody';
import RequestsBody from '../component/message/RequestsBody';
import {w} from '../lib/widthAndHeight';
import MyBottomSheet from '../component/MyBottomSheet';
import {BottomSheetButton} from './ProfileScreen';

const MessageScreen = () => {
  const [selected, setSelected] = useState(0);
  const ref = useRef<any>();

  const endFunction = (e: {nativeEvent: {contentOffset: {x: number}}}) => {
    const x = Math.round(e.nativeEvent.contentOffset.x / w(1));
    setSelected(x);
  };

  const PrimarySlide = (index: number) => {
    const offset = w(index);
    ref?.current?.scrollTo({x: offset, y: 0, Animated: true});
  };
  const [parameeter, setParamiter] = useState(false);
  const [paramiterName, setParamiterName] = useState('All Acounts');

  return (
    <View style={styles.container}>
      <MessageHeader />
      <SearchBotton />
      <MessageSelect
        selected={selected}
        setSelected={setSelected}
        primary={PrimarySlide}
      />
      <View style={{}}>
        <Animated.ScrollView
          ref={ref}
          horizontal
          onScroll={endFunction}
          pagingEnabled>
          <PrimaryBody />
          <GeneralBody />
          <RequestsBody
            setParamiter={setParamiter}
            paramiter={parameeter}
            paramiterName={paramiterName}
          />
        </Animated.ScrollView>
      </View>
      {parameeter && (
        <MyBottomSheet show={parameeter} setShow={setParamiter} height={300}>
          <BottomSheetButton
            name="Top Requests"
            border={false}
            onPress={() => {
              setParamiter(false);
              setParamiterName('Top Requests');
            }}
          />
          <BottomSheetButton
            name="All Requests"
            border={false}
            onPress={() => {
              setParamiter(false);
              setParamiterName('All Requests');
            }}
          />
        </MyBottomSheet>
      )}
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
