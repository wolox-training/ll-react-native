import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { white } from '@constants/colors';

import { headerStyle, headerTitleStyle } from './styles';
import Home from './screens/Home';
import BookDetails from './screens/BookDetails';
import BackButton from './components/BackButton';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'HOME',
            headerStyle,
            headerTintColor: white,
            headerTitleStyle
          }}
        />

        <RootStack.Screen
          name="Details"
          component={BookDetails}
          options={{
            title: 'BOOK DETAIL',
            headerStyle,
            headerTitleStyle,
            headerTintColor: white,
            headerBackTitleVisible: false,
            headerLeft: () => <BackButton />
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
