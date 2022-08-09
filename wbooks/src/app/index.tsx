import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { white } from '@constants/colors';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from '@redux/store';

import { headerStyle, headerTitleStyle } from './styles';
import Home from './screens/Home';
import BookDetails from './screens/BookDetails';
import BackButton from './components/BackButton';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Settings = () => {
  return (
    <View>
      <Text>Hi, i am settings screen !</Text>
    </View>
  );
};
const Library = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'HOME',
          headerStyle,
          headerTintColor: white,
          headerTitleStyle
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'SETTINGS',
          headerStyle,
          headerTitleStyle,
          headerTintColor: white
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen
            name="Library"
            component={Library}
            options={{
              title: 'Library',
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
      </NavigationContainer>
    </Provider>
  );
};

export default App;
