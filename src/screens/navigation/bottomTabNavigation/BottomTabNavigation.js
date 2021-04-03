import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

import BuyerHomeScreen from '../../buyerHomeScreen/BuyerHomeScreen';
import SellerHomeScreen from '../../sellerHomeScreen/SellerHomeScreen';
import SettingScreen from '../../settingScreen/SettingScreen';
import OfferServiceScreen from '../../OfferServiceScreen/OfferServiceScreen';

import {ScreensName, Strings} from '../../../assets/string/String';
import {COLORS} from '../../../assets/colors/color';

const Tab = createBottomTabNavigator();

const bottomTabHandler = (name, titleName, type) => ({
  title: titleName,
  tabBarIcon: ({focused, size}) =>
    type === 1 ? (
      <MaterialIcons
        name={name}
        size={size}
        color={focused ? COLORS.primary_color : COLORS.black}
      />
    ) : (
      <Ionicons
        name={name}
        size={size}
        color={focused ? COLORS.primary_color : COLORS.black}
      />
    ),
});

const BottomTabNavigation = () => {
  const switchAccount = useSelector(state => state.switch_user);
  MaterialIcons.loadFont();
  Ionicons.loadFont();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.primary_color,
        inactiveTintColor: COLORS.black,
        style: {
          paddingTop: 2,
        },
        labelStyle: {
          fontSize: 12,
          lineHeight: 18,
          fontFamily: 'Roboto-Bold',
        },
      }}>
      {switchAccount ? (
        <Tab.Screen
          name={ScreensName.BuyerHomeScreen}
          component={BuyerHomeScreen}
          options={bottomTabHandler('home', Strings.Home, 1)}
        />
      ) : (
        <Tab.Screen
          name={ScreensName.SellerHomeScreen}
          component={SellerHomeScreen}
          options={bottomTabHandler('home', Strings.Home, 1)}
        />
      )}

      {!switchAccount ? (
        <Tab.Screen
          name={ScreensName.OfferServiceScreen}
          component={OfferServiceScreen}
          options={bottomTabHandler('offer', Strings.Offer, 1)}
        />
      ) : (
        <></>
      )}

      <Tab.Screen
        name={ScreensName.SettingScreen}
        component={SettingScreen}
        options={bottomTabHandler('ios-settings', Strings.Setting, 0)}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
