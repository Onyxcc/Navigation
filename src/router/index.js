import {View, Text} from 'react-native';
import React from 'react';
import {Home, Setting, Shop} from '../pages';
import Splash from '../pages/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNav from '../components/BottomNav';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNav {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Shop" component={Shop} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default Router;
