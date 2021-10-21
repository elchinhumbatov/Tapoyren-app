import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigatorTheme from './app/config/navigatorTheme'
import SplashScreen from "./app/screens/SplashScreen/SplashScreen";
import AppTabNavigator from "./app/navigators/AppTabNavigator";


export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  setTimeout(() => {
    setIsLoaded(true);
  }, 1000);

  if (!isLoaded) return <SplashScreen />;

  return (
    <NavigationContainer theme={navigatorTheme}>
      <AppTabNavigator />
    </NavigationContainer>
  );
}
