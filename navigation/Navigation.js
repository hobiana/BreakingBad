import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/Home';
import SettingsScreen from '../screens/setting/Setting';
import ProfileScreen from '../screens/profile/Profile'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Root(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Character" component={Root} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}