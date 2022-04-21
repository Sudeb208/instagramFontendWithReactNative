import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {h, w} from '../../lib/widthAndHeight';
import Icon from 'react-native-vector-icons/AntDesign';

const RequestsBody = ({
  setParamiter,
  paramiter,
  paramiterName,
}: {
  setParamiter: Function;
  paramiter: boolean;
  paramiterName: string;
}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.message}>
          <Text>Request aren't marked as seen until you accept them. </Text>
        </View>
        <TouchableOpacity
          onPress={() => setParamiter(true)}
          style={styles.button}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              flex: 1,
            }}>
            <Text>{paramiterName}</Text>
          </View>
          <Icon name="menuunfold" size={w(0.05)} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RequestsBody;

const styles = StyleSheet.create({
  container: {
    width: w(1),
    height: h(1),
  },
  message: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: w(0.03),
    backgroundColor: '#cccccc35',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: w(0.03),
    borderWidth: 0.5,
    borderBottomWidth: 0.5,
    margin: w(0.02),
    padding: w(0.02),
  },
});
