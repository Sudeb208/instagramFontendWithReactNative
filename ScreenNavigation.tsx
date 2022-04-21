/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {AuthStack, HomeStack} from './Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext, TokenContext} from './context';

const ScreenNavigation = () => {
  const [authentication, setAuthentication] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('token');

        if (value !== null) {
          setAuthentication(true);
          setToken(value);
        }
        console.log(value);
      } catch (error) {
        if (error) {
          setAuthentication(false);
        }
      }
    };
    getData();
  }, [authentication]);

  return (
    <AppContext.Provider value={{setAuthentication}}>
      <TokenContext.Provider value={token}>
        {authentication ? <HomeStack /> : <AuthStack />}
      </TokenContext.Provider>
    </AppContext.Provider>
  );
};

export default ScreenNavigation;
