import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen/HomeScreen";
import SearchScreen from "./app/screens/SearchScreen/SearchScreen";
import SplashScreen from "./app/screens/SplashScreen/SplashScreen";
import CategoriesNavigator from "./app/screens/CategoriesScreen/CategoriesNavigator";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  if (!isLoaded) return <SplashScreen />;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
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
        <Tab.Screen name="CategoriesNavigator" component={CategoriesNavigator} />
        <Tab.Screen name="Favorite" component={SearchScreen} />
        <Tab.Screen name="Account" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
