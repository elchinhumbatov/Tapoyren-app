import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import colors from '../config/colors';
import CategoriesNavigator from './CategoriesNavigator';
import SearchNavigator from './SearchNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import HomeNavigator from './HomeNavigator';
import AccountNavigator from './AccountNavigator';


const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: Platform.OS === 'ios' ? null : {paddingBottom: 5},
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = focused ? "ios-home" : "ios-home-outline";
                break;
              case "Search":
                iconName = focused ? "search" : "search-outline";
                break;
              case "CategoriesNavigator":
                iconName = focused ? "grid" : "grid-outline";
                break;
              case "Favorite":
                iconName = focused ? "heart" : "heart-outline";
                break;
              case "Account":
                iconName = focused ? "person" : "person-outline";
                break;
              default:
                iconName = focused ? "alert-circle" : "alert-circle-outline";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Search" component={SearchNavigator} />
        <Tab.Screen name="CategoriesNavigator" component={CategoriesNavigator} options={{title: 'Categories'}} />
        <Tab.Screen name="Favorite" component={FavoritesNavigator} />
        <Tab.Screen name="Account" component={AccountNavigator} />
      </Tab.Navigator>
  )
}

export default AppTabNavigator

const styles = StyleSheet.create({})
