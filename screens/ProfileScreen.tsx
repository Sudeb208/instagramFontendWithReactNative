import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import ProfileHeader from '../component/Profile/ProfileHeader';
import ProfileBody from '../component/Profile/ProfileBody';
import ProfileLastPart, {
  Mypost,
  TagPost,
} from '../component/Profile/ProfileLastPart';
import MyBottomSheet from '../component/MyBottomSheet';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../context';

const ProfileScreen = () => {
  const [postIcon, setPostIcon] = useState(true);
  const [tagIcon, setTagIcon] = useState(false);
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const [contractSheet, setContractSheet] = useState(false);
  const [profileSheet, setProfileSheet] = useState(false);
  console.log(show);
  const data = useContext(AppContext);

  const signout = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(typeof token);

      const datas = await fetch(
        'http://192.168.43.247:4001/api/user/account/logout',
        {
          method: 'POST',
          headers: {
            Authorization: `Berer ${token}`,
          },
        },
      );
      console.log(datas);

      await AsyncStorage.removeItem('token');
      console.log('signOut success');
      data.setAuthentication(false);
    } catch (error: any) {
      console.log(error.response);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView
          stickyHeaderIndices={[2]}
          showsVerticalScrollIndicator={false}>
          <ProfileHeader
            show={show}
            setShow={setShow}
            menu={menu}
            setMenu={setMenu}
            profileSheet={profileSheet}
            setProfileSheet={setProfileSheet}
          />
          <ProfileBody value={contractSheet} setValue={setContractSheet} />
          <ProfileLastPart
            postIcon={postIcon}
            setPostIcon={setPostIcon}
            tagIcon={tagIcon}
            setTagIcon={setTagIcon}
          />
          <View style={{flex: 1, minHeight: 360}}>
            {postIcon && <Mypost />}
            {tagIcon && <TagPost />}
          </View>
        </ScrollView>

        {/* bottom sheet for create  */}
        {show && (
          <MyBottomSheet show={show} setShow={setShow} height={400}>
            <View>
              {/* header name */}
              <BottomSheetHeader name="Create" />
              {/* post */}
              <BottomSheetButton name="Posts" iconName="post" />
              <BottomSheetButton name="Story" iconName="history" />
              <BottomSheetButton
                name="Stroy Highlight"
                iconName="heart-circle-outline"
              />
              <BottomSheetButton name="Live" iconName="access-point-network" />
              <BottomSheetButton name="Guide" iconName="book-open-variant" />
            </View>
          </MyBottomSheet>
        )}

        {/* bottom sheet for menu */}
        {menu && (
          <MyBottomSheet show={menu} setShow={setMenu} height={460}>
            <BottomSheetButton
              name="Setting"
              iconName="account-settings-outline"
              border={false}
            />
            <BottomSheetButton
              name="Archive"
              iconName="history"
              border={false}
            />
            <BottomSheetButton
              name="Insights"
              iconName="history"
              border={false}
            />
            <BottomSheetButton
              name="Your Activity"
              iconName="history"
              border={false}
            />
            <BottomSheetButton
              name="QR Code"
              iconName="history"
              border={false}
            />
            <BottomSheetButton name="saved" iconName="history" border={false} />
            <BottomSheetButton
              name="Close Friends"
              iconName="history"
              border={false}
            />
            <BottomSheetButton
              name="Discover Friends"
              iconName="history"
              border={false}
            />
          </MyBottomSheet>
        )}

        {/* bottom sheet for contract */}
        {contractSheet && (
          <MyBottomSheet
            show={contractSheet}
            setShow={setContractSheet}
            height={210}>
            <BottomSheetHeader name="Contact" />
            <View style={{marginHorizontal: 30}}>
              <View style={{marginBottom: 20}}>
                <Text style={{fontWeight: '700', fontSize: 18}}>Call</Text>
                <Text
                  style={{color: '#9b9b9b', fontSize: 16, letterSpacing: 2}}>
                  01746xxxxxx
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: '700', fontSize: 18}}>Email</Text>
                <Text
                  style={{color: '#9b9b9b', fontSize: 16, letterSpacing: 2}}>
                  Sudeb@gmail.com
                </Text>
              </View>
            </View>
          </MyBottomSheet>
        )}
        {profileSheet && (
          <MyBottomSheet
            show={profileSheet}
            setShow={setProfileSheet}
            height={140}>
            <BottomSheetButton
              name="Logout"
              iconName="history"
              border={false}
              onPress={signout}
            />
            <BottomSheetButton
              name="Add other Account"
              iconName="history"
              border={false}
            />
          </MyBottomSheet>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    zIndex: 49999,
    elevation: 344444,
  },
});

// for bottomSheet button

export const BottomSheetButton = ({
  name,
  iconName,
  border = true,
  onPress,
}: {
  name: string;
  iconName?: string;
  border?: boolean;
  onPress?: any;
}) => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      marginBottom: 14,
      marginHorizontal: 10,
    }}
    onPress={onPress ? onPress : console.log('hello')}>
    {iconName && <Icon name={iconName} size={30} style={{marginRight: 20}} />}
    <Text
      style={{
        fontSize: 18,
        borderBottomColor: '#ccc',
        borderBottomWidth: border ? 1 : 0,
        flex: 1,
        paddingBottom: 14,
      }}>
      {name}
    </Text>
  </TouchableOpacity>
);

const BottomSheetHeader = ({name}: {name: string}) => (
  <View
    style={{
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginBottom: 10,
    }}>
    <Text
      style={{
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
        paddingBottom: 10,
      }}>
      {name}
    </Text>
  </View>
);
