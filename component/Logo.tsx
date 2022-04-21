import {View, Text, Image} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View style={{alignItems: 'center', paddingVertical: 60}}>
      <Image
        style={{width: 160, height: 160, alignItems: 'center'}}
        source={{
          uri: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png',
        }}
      />
    </View>
  );
};

export default Logo;
