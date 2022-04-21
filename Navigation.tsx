import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import PostGalleryScreen from './screens/PostGalleryScreen';
import CommentScreen from './screens/CommentScreen';
import MessageScreen from './screens/MessageScreen';
// import AnimatedScreen from './screens/AnimatedScreen';

const screenOption = {
  headerShown: false,
};
const Stack = createNativeStackNavigator();

export const AuthStack = ({setAuthentication}: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={screenOption}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          initialParams={{setAuthentication}}
        />

        <Stack.Screen name="SignUp" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const HomeStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="MessageScreen"
      screenOptions={screenOption}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="PostGallery" component={PostGalleryScreen} />
      <Stack.Screen name="CommentScreen" component={CommentScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      {/* <Stack.Screen name="Animated" component={AnimatedScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);
