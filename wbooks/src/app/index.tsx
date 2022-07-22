import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import BookDetails from './screens/BookDetails';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Details" component={BookDetails} options={{ title: 'BookDetails' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
