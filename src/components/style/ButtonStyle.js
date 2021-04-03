import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors/color';
import {FontFamilyName} from '../../assets/string/String';

export default StyleSheet.create({
  buttonStyle: {
    backgroundColor: COLORS.primary_color,
    borderWidth: 0,
    color: COLORS.white,
    borderColor: COLORS.primary_color,
    height: 60,
    width: 300,
    shadowOpacity: 0.2,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 30,
    marginBottom: 20,
    shadowOffset: {
      width: 2,
      height: 12,
    },
  },
  imageStyle: {
    height: 16,
    width: 16,
    marginLeft: 6,
    marginRight: 24,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  socialButtonStyle: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderWidth: 2,
    color: COLORS.white,
    borderColor: COLORS.secondry_text_color,
    height: 32,
    width: 152,
    shadowOpacity: 0.2,
    elevation: 3,
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 36,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  buttonTextStyle: {
    color: COLORS.white,
    alignSelf: 'center',
    fontSize: 22,
    fontFamily: FontFamilyName.RobotoBold,
    lineHeight: 24,
  },
  SocialButtonTextStyle: {
    color: COLORS.text_color,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: FontFamilyName.RobotoBold,
    lineHeight: 24,
  },
});
