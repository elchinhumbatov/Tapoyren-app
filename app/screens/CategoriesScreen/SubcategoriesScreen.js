import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryScreens from "../../../components/CategoryComponents/CategoryScreens";
import SubcategoryComponent from "../../../components/CategoryComponents/SubcategoryComponent";

import { SUBCATEGORIES as subcats } from "../../../data/dummy-data";

const SubcategoriesScreen = ({ route, navigation }) => {
  // const renderItem = ({ item }) => <SubcategoryComponent item={item} onPress={handleSubcategory} />

  const handleSubcategory = (subcatId) => {
    navigation.navigate("SubcategoryCourses", { subcatId });
  };
  return (
    <CategoryScreens
      data={subcats.filter((i) => i.categoryId === route.params.categoryId)}
      CBfunc={handleSubcategory}
      SomeComponent={SubcategoryComponent}
    />
  );
  // return (
  //   <FlatList
  //     data={subcats.filter(i => i.categoryId === route.params.categoryId)}
  //     renderItem={renderItem}
  //     contentContainerStyle={{ padding: 25, backgroundColor: '#eee', flex: 1 }}
  //     keyExtractor={item => item.id}
  //   />
  // );
};

export default SubcategoriesScreen;

const styles = StyleSheet.create({});
