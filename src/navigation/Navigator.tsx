import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Route} from './RouteNames';
import MainScreen from '../screens/MainScreen';
import InfoScreen from '../screens/InfoScreen';

const Navigator = () => {
  const Stack = createStackNavigator();

  const mainScreenParams = {
      symbolsList: ['ETH', 'BTC', 'DASH', 'DOT', 'LTC'],
      converters: ['USD'],
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#ffffff'},
          headerMode: 'screen',
        }}>
        <Stack.Screen name={Route.Main} component={MainScreen} initialParams={mainScreenParams} />
        <Stack.Screen name={Route.Info} component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
