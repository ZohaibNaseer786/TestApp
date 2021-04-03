import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../../loginScreen/LoginScreen';
import SignUpScreen from '../../signUpScreen/SignUpScreen';

import {ScreensName, FontFamilyName} from '../../../assets/string/String';
import {COLORS} from '../../../assets/colors/color';

const stack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const navHeaderHandler = () => ({
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: COLORS.primary_color,
  },
  headerTintColor: COLORS.white,
  headerTitleStyle: {
    fontFamily: FontFamilyName.RobotoBold,
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20.47,
  },
});

const AuthNavigation = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name={ScreensName.LoginScreen}
        component={LoginScreen}
        options={navHeaderHandler}
      />
      <stack.Screen
        name={ScreensName.SignUpScreen}
        component={SignUpScreen}
        options={navHeaderHandler}
      />
    </stack.Navigator>
  );
};

export default AuthNavigation;
