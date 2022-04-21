import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ProfileBody = ({
  value,
  setValue,
}: {
  value: boolean;
  setValue: Function;
}) => {
  return (
    <View style={styles.container}>
      <ProfileDetails />
      <Description />
      <OtherButtons value={value} setValue={setValue} />
    </View>
  );
};

// profile details
const ProfileDetails = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    {/* left side profile picture */}
    <View style={{paddingRight: 20}}>
      <Image
        source={{
          uri: 'https://scontent.fcgp1-1.fna.fbcdn.net/v/t1.6435-9/54206226_2316472988623032_8427632124391063552_n.jpg?stp=dst-jpg_p640x640&_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEXao9C_M9Y8bfbPJaoF5mnIMWnpRp5g8EgxaelGnmDweQ5IKqi_-nYBJ_E6jornzgipiijyXOzDA8trcaT0tT0&_nc_ohc=aa7WLz3YEysAX80kijJ&_nc_ht=scontent.fcgp1-1.fna&oh=00_AT_x9rmOw-fGbUiXDNAVLN86RrJVNJxCvKvFAHf1UnvFbw&oe=6266A18B',
        }}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
    </View>
    {/* right side post and follower details */}
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 20,
      }}>
      {/* posts */}
      <View style={{alignItems: 'center'}}>
        <Text style={styles.Number}>6</Text>
        <Text style={{fontWeight: '600'}}>Posts</Text>
      </View>
      {/* follower */}
      <View style={{alignItems: 'center'}}>
        <Text style={styles.Number}>147</Text>
        <Text style={{fontWeight: '600'}}>Followers</Text>
      </View>
      {/* following */}
      <View style={{alignItems: 'center'}}>
        <Text style={styles.Number}>131</Text>
        <Text style={{fontWeight: '600'}}>Following</Text>
      </View>
    </View>
  </View>
);

// name and description
const Description = () => (
  <View style={{marginTop: 10}}>
    <Text style={{fontWeight: '700'}}>Paul Sudeb</Text>
    <Text style={{}}>K I D D I N G B E AS T</Text>
  </View>
);

// edit profile and other buttons
const OtherButtons = ({
  value,
  setValue,
}: {
  value: boolean;
  setValue: Function;
}) => (
  <View style={{flexDirection: 'column', marginVertical: 20}}>
    <TouchableOpacity style={[styles.buttons, {marginBottom: 5}]}>
      <Text style={{padding: 8, fontWeight: '700'}}>Edit Profile</Text>
    </TouchableOpacity>

    <View
      style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
      <TouchableOpacity style={styles.buttons}>
        <Text style={{padding: 8, fontWeight: '700'}}>Ad tools</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttons, {marginHorizontal: 5}]}>
        <Text style={{padding: 8, fontWeight: '700'}}>Insights</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => setValue(!value)}>
        <Text style={{padding: 8, fontWeight: '700'}}>Contact</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default ProfileBody;

const styles = StyleSheet.create({
  container: {padding: 15},
  profileImage: {},
  Number: {fontWeight: '600', fontSize: 24},
  buttons: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c2c0c0',
    borderRadius: 5,
    flex: 1,
  },
});
