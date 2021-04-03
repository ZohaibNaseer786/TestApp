import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

import DrawerNavigation from '../drawerNavigation/DrawerNavigation';

import {ScreensName} from '../../../assets/string/String';
import {COLORS} from '../../../assets/colors/color';

const stack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const chatHeaderHandler = navigation => ({
  headerBackTitleVisible: false,
  headerRight: () => (
    <View style={{flexDirection: 'row', marginRight: 12}}>
      <Ionicons size={20} color={COLORS.white} name={'camera'} />
      <Ionicons
        style={{marginLeft: 24}}
        size={24}
        color={COLORS.white}
        name={'phone'}
      />
    </View>
  ),
  headerStyle: {
    backgroundColor: COLORS.primary_color,
  },
  headerTintColor: COLORS.white,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20.47,
  },
});

const navHeaderHandler = navigation => ({
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: COLORS.primary_color,
  },
  headerTintColor: COLORS.white,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20.47,
  },
});

const AppNavigation = navigation => {
  Ionicons.loadFont();
  return (
    <stack.Navigator>
      <stack.Screen
        name={ScreensName.DrawerNavigation}
        component={DrawerNavigation}
        options={navOptionHandler}
      />
    </stack.Navigator>
  );
};

export default AppNavigation;
