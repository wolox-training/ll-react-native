import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { white } from '@constants/colors';
import { View, Text } from 'react-native';

import { headerStyle, headerTitleStyle } from './styles';
import Home from './screens/Home';
import BookDetails from './screens/BookDetails';
import BackButton from './components/BackButton';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Library = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'HOME',
          headerStyle,
          headerTintColor: white,
          headerTitleStyle,
          headerBackTitleVisible: false
        }}
      />

      <Stack.Screen
        name="Details"
        component={BookDetails}
        options={{
          title: 'BOOK DETAIL',
          headerStyle,
          headerTitleStyle,
          headerTintColor: white,
          headerLeft: () => <BackButton />
        }}
      />
    </Stack.Navigator>
  );
};

const Settings = () => {
  return (
    <View>
      <Text>Hi, i am settings screen !</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Library" component={Library} options={{ headerShown: false }} />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'SETTINGS',
            headerStyle,
            headerTitleStyle,
            headerTintColor: white,
            headerLeft: () => <BackButton />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
