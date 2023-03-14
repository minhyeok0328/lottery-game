/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import { BaseButton, CoinStatus } from '@components/atoms';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const handleTest = () => {
    Alert.alert('work!');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <CoinStatus coinCount={10} />
        </View>
        <View>
          <BaseButton
            title="this is button"
            source={require('@assets/images/trash.png')}
            onPress={handleTest}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
