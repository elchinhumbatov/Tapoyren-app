import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FavoritesScreen from "../screens/FavoritesScreen/FavoritesScreen";
import CourseScreen from "../screens/CategoriesScreen/CourseScreen";

const Stack = createNativeStackNavigator();

const FavoritesNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="FavoritesScreen">
      <Stack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="CourseScreen"
        component={CourseScreen}
        options={({ route }) => ({ title: route.params.title })}
      /> */}
    </Stack.Navigator>
  );
};

export default FavoritesNavigator;

const styles = StyleSheet.create({});
