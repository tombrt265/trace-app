import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './app/navigation/index';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
