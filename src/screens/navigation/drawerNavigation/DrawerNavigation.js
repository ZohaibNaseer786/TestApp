import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTabNavigation from '../bottomTabNavigation/BottomTabNavigation';
import MyActivityScreen from '../../myActivityScreen/MyActivityScreen';
import FavoritesScreen from '../../favoritesScreen/FavoritesScreen';
import AdvanceSearchScreen from '../../advanceSearchScreen/AdvanceSearchScreen';
import CustomSidebarMenu from '../../../components/CustomSideBar';

import {ScreensName} from '../../../assets/string/String';
import {COLORS} from '../../../assets/colors/color';

const Drawer = createDrawerNavigator();

const navHeaderHandler = navigation => ({
  headerShown: true,
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

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomSidebarMenu {...props} />}
      initialRouteName={ScreensName.BottomTabNavigation}
      screenOptions={navHeaderHandler}>
      <Drawer.Screen
        name={ScreensName.BottomTabNavigation}
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        name={ScreensName.FavoritesScreen}
        component={FavoritesScreen}
      />

      <Drawer.Screen
        name={ScreensName.AdvanceSearchScreen}
        component={AdvanceSearchScreen}
      />
      <Drawer.Screen
        name={ScreensName.MyActivityScreen}
        component={MyActivityScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
