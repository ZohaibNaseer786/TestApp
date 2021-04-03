import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';

import Styles from './SplashScreenStyle';
import {ScreensName} from '../../assets/string/String';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      //splash screen go to welcome screen after 2 second
      navigation.replace(ScreensName.WizardScreen);
    }, 2000);
  }, []);

  return (
    <>
      <ImageBackground
        style={Styles.imageBackgroungStyle}
        source={require('../../assets/image/bg_splash.png')}></ImageBackground>
    </>
  );
};

export default SplashScreen;
