import React from "react";
import { StyleSheet, Text } from "react-native";

import CategoryComponent from "../../components/CategoryComponents/CategoryComponent";
import CategoryScreens from "../../components/CategoryComponents/CategoryScreens";
import MySafeAreaView from "../../components/MySafeAreaView/MySafeAreaView";
import commonStyles from "../../config/commonStyles";
import { CATEGORIES as cats } from "../../data/dummy-data";

const CategoriesHome = ({ navigation }) => {
  const handleCategory = ({ id, title }) => {
    navigation.navigate("Subcategories", { categoryId: id, title });
  };

  return (
    <MySafeAreaView>
      <Text style={commonStyles.screenTitle}>Categories</Text>
      <CategoryScreens
        data={cats}
        CBfunc={handleCategory}
        SomeComponent={CategoryComponent}
        numColumns={2}
        columnStyle={{ justifyContent: "space-between" }}
      />
    </MySafeAreaView>
  );
};

export default CategoriesHome;

const styles = StyleSheet.create({});
