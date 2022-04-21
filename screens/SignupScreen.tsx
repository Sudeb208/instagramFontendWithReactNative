/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Logo from '../component/Logo';
import {Formik} from 'formik';
import * as yup from 'yup';

const userSchema = yup.object().shape({
  email: yup
    .string()
    .required('email or username required')
    .min(4, 'username must be 4 charecter'),
  password: yup
    .string()
    .min(8, 'password must be 8 Charecter')
    .required('password is required'),
  confirmPassword: yup
    .string()
    .min(8, 'password must be 8 Charecter')
    .required('password is required'),
  fristName: yup.string().required('fristName is required'),
  lastName: yup.string().required('fristName is required'),
});

const SignupScreen = ({navigation}: any) => {
  console.log(Platform.OS);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        fristName: '',
        lastName: '',
      }}
      onSubmit={(values: any) => console.log(values)}
      validationSchema={userSchema}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, isValid}: any) => (
        <ScrollView style={styles.wapper}>
          <View style={styles.container}>
            <Logo />
            {/* user name input field  */}
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

            {/* frist name and last name */}
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={[
                  styles.inputFild,
                  {
                    borderColor:
                      values.fristName.length < 1 ||
                      values.fristName.length >= 3
                        ? '#ccc'
                        : 'red',
                  },
                ]}>
                <TextInput
                  style={{padding: 10}}
                  placeholder="Frist Name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  onChangeText={handleChange('fristName')}
                  onBlur={handleBlur('fristName')}
                  value={values.fristName}
                />
              </View>
              <View
                style={[
                  styles.inputFild,
                  {
                    borderColor:
                      values.lastName.length < 1 || values.lastName.length >= 3
                        ? '#ccc'
                        : 'red',
                    marginLeft: 5,
                  },
                ]}>
                <TextInput
                  style={{padding: 10}}
                  placeholder="Last Name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="name"
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                />
              </View>
            </View>
            {/* end frist name and last name */}

            {/* password and comfirm Password  */}
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={[
                  styles.inputFild,
                  {
                    borderColor:
                      values.password.length < 1 || values.password.length >= 8
                        ? '#ccc'
                        : 'red',
                  },
                ]}>
                <TextInput
                  style={{padding: 10}}
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  textContentType="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              <View
                style={[
                  styles.inputFild,
                  {
                    borderColor:
                      (values.confirmPassword.length < 1 ||
                        values.confirmPassword.length >= 8) &&
                      values.confirmPassword === values.password
                        ? '#ccc'
                        : 'red',
                    marginLeft: 5,
                  },
                ]}>
                <TextInput
                  style={{padding: 10}}
                  placeholder="Confirm Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  textContentType="password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                />
              </View>
            </View>
            {/* end password and confirm password */}
            {/* submit button  */}
            <View style={styles.button}>
              <Button
                disabled={!isValid && true}
                title="Sign Up"
                onPress={() => handleSubmit()}
              />
            </View>
            {/* end submit button  */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 40,
              }}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  wapper: {flex: 1},
  container: {margin: 20},
  logo: {},
  inputFild: {flex: 1, borderWidth: 1, marginVertical: 14},
  button: {
    width: '100%',
    paddingVertical: 10,
  },
});
