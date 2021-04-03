import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import style from './WizardScreenStyle';
import {ScreensName} from '../../assets/string/String';

const WelcomeScreen = props => {
  return (
    <View style={style.mainBody}>
      <TouchableOpacity
        //on click on text go to auth screens
        onPress={() => props.navigation.replace(ScreensName.AuthScreen)}>
        <Text style={style.textStyle}>WelcomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
