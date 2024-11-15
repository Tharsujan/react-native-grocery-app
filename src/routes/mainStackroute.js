import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavbar from '../components/bottomNavBar';
import ProductDetailScreen from '../screens/ProductDetailScreen/productDetailScreen'; // Import ProductDetailScreen
import CategoryProductsScreen from '../screens/CategoryProductItem/categoryProductsScreen';
import OrderAcceptedScreen from '../screens/orderAcceptedScreen/orderAcceptedScreen';

const MainStack = createStackNavigator();

export default function MainStackRoute() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="BottomNavbar" component={BottomNavbar} />
      <MainStack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <MainStack.Screen
        name="CategoryProductsScreen"
        component={CategoryProductsScreen}
      />
      <MainStack.Screen
        name="OrderAcceptedScreen"
        component={OrderAcceptedScreen}
      />
    </MainStack.Navigator>
  );
}
