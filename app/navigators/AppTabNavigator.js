import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import colors from '../config/colors';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import CategoriesNavigator from './CategoriesNavigator';


const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {paddingBottom: 5},
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="CategoriesNavigator" component={CategoriesNavigator} options={{title: 'Categories'}} />
        <Tab.Screen name="Favorite" component={SearchScreen} />
        <Tab.Screen name="Account" component={SearchScreen} />
      </Tab.Navigator>
  )
}

export default AppTabNavigator

const styles = StyleSheet.create({})
