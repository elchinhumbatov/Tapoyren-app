import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesHome from "./CategoriesHome";
import SubcategoriesScreen from "./SubcategoriesScreen/SubcategoriesScreen";
import SubcategoryCourses from "./SubcategoryCourses";
import CourseScreen from './CourseScreen';

const Stack = createNativeStackNavigator();

const CategoriesNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="CategoriesHome">
      <Stack.Screen
        name="CategoriesHome"
        component={CategoriesHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Subcategories" component={SubcategoriesScreen} />
      <Stack.Screen name="SubcategoryCourses" component={SubcategoryCourses} />
      <Stack.Screen name="CourseScreen" component={CourseScreen} />
    </Stack.Navigator>
  );
};

export default CategoriesNavigator;

const styles = StyleSheet.create({});
