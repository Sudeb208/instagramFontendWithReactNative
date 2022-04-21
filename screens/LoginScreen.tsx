import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React, {useContext} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import Logo from '../component/Logo';
import axiosIntance from '../helpers/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../context';
import {ScrollView} from 'react-native-gesture-handler';

const userSchema = yup.object().shape({
  email: yup
    .string()
    .required('email or username required')
    .min(4, 'username must be 4 charecter'),
  password: yup
    .string()
    .min(6, 'password must be 8 Charecter')
    .required('password is required'),
});
interface values {
  email: string;
  password: string;
}
const LoginScreen = ({navigation}: any, context: any) => {
  const authentication = async (values: values) => {
    try {
      const User: any = await axiosIntance.post(`/user/account`, {
        email: values.email,
        password: values.password,
      });
      console.log(User.data.token);
      await AsyncStorage.setItem('token', User.data.token);
      console.log('sucess');
      data.setAuthentication(true);
      return 'data';
    } catch (error) {
      console.log(error);
    }
  };

  const data = useContext(AppContext);
  console.log('route ', data);
  console.log('route ', navigation);

  return (
    <ScrollView>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => authentication(values)}
        validationSchema={userSchema}
        validateOnMount={true}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View style={styles.wapper}>
            <View style={styles.container}>
              <Logo />
              <View
                style={[
                  styles.inputFild,
                  {
                    borderColor:
                      values.email.length < 1 || values.email.length >= 4
                        ? '#ccc'
                        : 'red',
                  },
                ]}>
                <TextInput
                  style={{padding: 10}}
                  placeholder="Phone number, username, password"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoFocus={true}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              {/* {errors.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )} */}
              <View
                style={[
                  styles.inputFild,
                  {
                    borderColor:
                      values.password.length < 1 || values.password.length >= 6
                        ? '#ccc'
                        : 'red',
                  },
                ]}>
                <TextInput
                  style={{padding: 10}}
                  placeholder="#444"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  textContentType="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              {/* {errors.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )} */}
              <TouchableOpacity
                style={{alignItems: 'flex-end', flex: 1, marginBottom: 25}}>
                <Text style={{color: '#745be6e8'}}>Forgot Password?</Text>
              </TouchableOpacity>
              {/* submit button  */}
              <View style={styles.button}>
                <Button
                  disabled={!isValid && true}
                  title="LOG IN"
                  onPress={async () => {
                    const data = await handleSubmit();
                    console.log(data);
                  }}
                  color={!isValid ? 'red' : 'green'}
                />
              </View>
              {/* end submit button  */}
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'center',
                  marginVertical: 40,
                }}>
                <Text style={{fontSize: 17}}>Don't Have A Account ? </Text>
                <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                  <Text
                    style={{color: 'blue', fontWeight: '500', fontSize: 18}}>
                    Sign UP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wapper: {flex: 1},
  container: {margin: 20},
  logo: {},
  inputFild: {borderWidth: 1, width: '100%', marginVertical: 14},
  button: {
    width: '100%',
    paddingVertical: 10,
  },
});
