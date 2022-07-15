import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import App from './src/app';

export default function index() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
