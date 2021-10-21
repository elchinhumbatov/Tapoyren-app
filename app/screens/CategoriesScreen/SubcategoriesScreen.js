import React from "react";
import { StyleSheet } from "react-native";
import CategoryScreens from "../../components/CategoryComponents/CategoryScreens";
import SubcategoryComponent from "../../components/CategoryComponents/SubcategoryComponent";

import { SUBCATEGORIES as subcats } from "../../data/dummy-data";

const SubcategoriesScreen = ({ route, navigation }) => {
  const handleSubcategory = ({id, title}) => {
    navigation.navigate("SubcategoryCourses", { subcatId: id, title });
  };
  return (
    <CategoryScreens
      data={subcats.filter((i) => i.categoryId === route.params.categoryId)}
      CBfunc={handleSubcategory}
      SomeComponent={SubcategoryComponent}
    />
  );
};

export default SubcategoriesScreen;

const styles = StyleSheet.create({});
