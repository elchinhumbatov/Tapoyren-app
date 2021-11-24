import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "../screens/SearchScreen/SearchScreen";
import CourseScreen from "../screens/CategoriesScreen/CourseScreen";

const Stack = createNativeStackNavigator();

const SearchNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="SearchScreen">
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CourseScreen"
        component={CourseScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;

const styles = StyleSheet.create({});
