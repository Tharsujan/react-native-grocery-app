import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ShopScreen from '../screens/ShopScreen/shopScreen';
import ExploreScreen from '../screens/ExploreScreen/ExploreScreen';
import CartScreen from '../screens/CartScreen/cartScreen';
import FavouriteScreen from '../screens/FavouriteScreen/favouriteScreen';
import AccountScreen from '../screens/AccountScreen/accountScreen';

const Tab = createBottomTabNavigator();

function BottomNavbar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconColor = focused ? '#53B175' : '#181725';

          if (route.name === 'Shop') {
            iconName = focused ? 'storefront' : 'storefront-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Favourite') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={24} color={iconColor} />;
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 5,
          //   fontWeight: '600',
          //   fontFamily: 'Gilroy',
        },
        tabBarStyle: {
          height: 70,
          paddingTop: 5,
          paddingBottom: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
        },
        tabBarLabel: ({focused}) => (
          <Text style={{color: focused ? '#0DB06D' : '#000'}}>
            {route.name}
          </Text>
        ),
      })}>
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default BottomNavbar;
