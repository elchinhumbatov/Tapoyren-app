import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigatorTheme from "./app/config/navigatorTheme";
import { AuthProvider } from "./app/context/authContext";
import PosApp from "./app/PosApp";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer theme={navigatorTheme}>
        <PosApp />
      </NavigationContainer>
    </AuthProvider>
  );
}
