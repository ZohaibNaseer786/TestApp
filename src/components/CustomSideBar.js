import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Switch,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';

import {SWITCH_ACCOUNT} from '../redux/reducers/SwitchAccountReducer';
import {COLORS} from '../assets/colors/color';
import {Strings, ScreensName} from '../assets/string/String';

const DrawerIconHandler = (name, type) => {
  return type === 1 ? (
    <MaterialIcons name={name} size={24} color={COLORS.black} />
  ) : (
    <Ionicons name={name} size={24} color={COLORS.black} />
  );
};

const CustomSidebarMenu = props => {
  const switchAccount = useSelector(state => state.switch_user);
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    dispatch({
      type: SWITCH_ACCOUNT,
      payload: !switchAccount,
    });
  };

  MaterialIcons.loadFont();
  Ionicons.loadFont();

  return (
    <SafeAreaView style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Image
            source={require('../assets/image/no_user.png')}
            style={{
              height: 55,
              width: 52,
              alignSelf: 'center',
              borderRadius: 26,
              margin: 5,
            }}
          />
        </View>
        <Text style={stylesSidebar.profileHeaderText}>Zohaib Naseer</Text>
        <View style={stylesSidebar.switchContainer}>
          <Text style={stylesSidebar.switchText}>
            {switchAccount ? Strings.Buyer : Strings.Seller}
          </Text>
          <Switch
            style={stylesSidebar.switchStyle}
            trackColor={{
              false: COLORS.secondry_color,
              true: COLORS.secondry_color,
            }}
            thumbColor={COLORS.white}
            onValueChange={toggleSwitch}
            value={switchAccount}
          />
        </View>

        {/* <Text style={stylesSidebar.emailText}>
                    zohaibnaseer2244@gmail.com
                </Text> */}
      </View>

      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          height: '80%',
          backgroundColor: COLORS.white,
          paddingTop: 32,
        }}>
        <View style={{width: '100%'}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              props.navigation.navigate(ScreensName.BottomTabNavigation);
            }}>
            <View style={stylesSidebar.contentStyle}>
              {DrawerIconHandler('home', 1)}
              <Text style={stylesSidebar.text}>{Strings.Home}</Text>
            </View>
          </TouchableOpacity>

          {switchAccount ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                props.navigation.navigate(ScreensName.FavoritesScreen);
              }}>
              <View style={stylesSidebar.contentStyle}>
                {DrawerIconHandler('heart-multiple-outline', 1)}
                <Text style={stylesSidebar.text}>{Strings.Favorites}</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <></>
          )}

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              props.navigation.navigate(ScreensName.AdvanceSearchScreen);
            }}>
            <View style={stylesSidebar.contentStyle}>
              {DrawerIconHandler('search-outline', 0)}
              <Text style={stylesSidebar.text}>{Strings.AdvanceSearch}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              props.navigation.navigate(ScreensName.MyActivityScreen);
            }}>
            <View style={stylesSidebar.contentStyle}>
              {DrawerIconHandler('newspaper-outline', 0)}
              <Text style={stylesSidebar.text}>{Strings.MyActivity}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.primary_color,
    color: COLORS.primary_color,
  },
  profileHeader: {
    flexDirection: 'column',
    backgroundColor: COLORS.primary_color,
    padding: 15,
    paddingTop: 0,
    textAlign: 'center',
    height: '30%',
  },
  profileHeaderPicCircle: {
    width: 53,
    height: 56,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.text_color,
    borderRadius: 94 / 2,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  profileHeaderText: {
    color: COLORS.white,
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontSize: 19,
    lineHeight: 18,
    marginTop: 20,
    fontFamily: 'Roboto-Bold',
  },
  emailText: {
    color: '#9393AA',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
  contentStyle: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'flex-start',
    paddingTop: 7,
    paddingBottom: 7,
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: 'Roboto-Bold',
    color: COLORS.black,
    marginLeft: 36,
  },
  switchContainer: {
    height: 24,
    width: '100%',
    marginTop: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchStyle: {
    height: 24,
    width: 32,
  },
  switchText: {
    fontSize: 18,
    lineHeight: 18,
    marginTop: 6,
    alignSelf: 'center',
    color: COLORS.white,
    marginRight: '5%',
    fontFamily: 'Roboto-Bold',
  },
});

export default CustomSidebarMenu;
