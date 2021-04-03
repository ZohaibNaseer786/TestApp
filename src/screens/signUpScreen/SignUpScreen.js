import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import Button from '../../components/Button';
import Styles from './SignUpScreenStyle';
import {COLORS} from '../../assets/colors/color';
import {Strings, ScreensName} from '../../assets/string/String';

const SignUpScreen = props => {
  return (
    <View style={Styles.mainBody}>
      <Button
        title={Strings.SignUp}
        buttonstyle={{alignSelf: 'center'}}
        onPress={() => {
          props.navigation.replace(ScreensName.LoginScreen);
        }}
      />
    </View>
  );
};

export default SignUpScreen;
