import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import DetailBook from './screens/DatailsBook';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Details" component={DetailBook} options={{ title: 'Overview' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
