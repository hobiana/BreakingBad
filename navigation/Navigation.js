import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/Home';
import SettingsScreen from '../screens/setting/Setting';
import ProfileScreen from '../screens/profile/Profile'
import EpisodesScreen from '../screens/episodes/Episodes'
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


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
      <Tab.Navigator tabBarOptions={{
        labelStyle: { textTransform: "none", },
        style: {
          color: '#292D3E'
        }
      }}>
        <Tab.Screen
          name="Character"
          component={Root}
          options={{
            tabBarBadgeStyle: '#292D3E',
            tabBarIcon: () => (
              <Icon name="users" color={'#292D3E'} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Episodes"
          component={EpisodesScreen}
          options={{
            tabBarBadgeStyle: '#292D3E',
            tabBarIcon: () => (
              <Icon name="tv" color={'#292D3E'} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarBadgeStyle: '#292D3E',
            tabBarIcon: () => (
              <Feather name="settings" color={'#292D3E'} size={25} />
            ),
          }}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
}