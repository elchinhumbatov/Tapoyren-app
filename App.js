import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigatorTheme from './app/config/navigatorTheme'
import AppTabNavigator from "./app/navigators/AppTabNavigator";


export default function App() {
  return (
    <NavigationContainer theme={navigatorTheme}>
      <AppTabNavigator />
    </NavigationContainer>
  );
}
