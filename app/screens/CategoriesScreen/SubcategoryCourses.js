import React from "react";
import { StyleSheet } from "react-native";

import { COURSES as courses } from "../../data/dummy-data";
import CoursesComponent from "../../components/CategoryComponents/CoursesComponent";
import CategoryScreens from "../../components/CategoryComponents/CategoryScreens";

const SubcategoryCourses = ({ navigation, route }) => {
  const handleCourse = (id, title) => {
    navigation.navigate("CourseScreen", { id, title });
  };

  return (
    <CategoryScreens
      data={courses}
      numColumns={2}
      columnStyle={{ justifyContent: "space-between" }}
      CBfunc={handleCourse}
      SomeComponent={CoursesComponent}
    />
  );
};

export default SubcategoryCourses;

const styles = StyleSheet.create({});
