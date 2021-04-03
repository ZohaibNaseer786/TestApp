import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from './LoginScreenStyle';
import {Strings, ScreensName} from '../../assets/string/String';
import Button from '../../components/Button';

const LoginScreen = props => {
  return (
    <View style={Styles.mainBody}>
      <TouchableOpacity
        onPress={() => props.navigation.replace(ScreensName.SignUpScreen)}>
        <Text style={Styles.textStyle}>GO TO SIGNUP SCREEN</Text>
      </TouchableOpacity>
      <Button
        title={Strings.Login}
        buttonstyle={{alignSelf: 'center'}}
        onPress={() => {
          props.navigation.replace(ScreensName.AppScreen);
        }}
      />
    </View>
  );
};

export default LoginScreen;
