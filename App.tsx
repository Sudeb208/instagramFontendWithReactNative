/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import ScreenNavigation from './ScreenNavigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'rgb(244, 240, 240)'} />

      <ScreenNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});
