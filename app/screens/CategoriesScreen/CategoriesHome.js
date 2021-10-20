import React from "react";
import { StyleSheet, Text } from "react-native";
import CategoryComponent from "../../components/CategoryComponents/CategoryComponent";
import CategoryScreens from "../../components/CategoryComponents/CategoryScreens";

import MySafeAreaView from "../../components/MySafeAreaView/MySafeAreaView";
import commonStyles from "../../config/commonStyles";
import { CATEGORIES as cats } from "../../data/dummy-data";

const CategoriesHome = ({ navigation }) => {
  // const renderItem = ({ item }) => (
  //   <CategoryComponent item={item} onPress={handleCategory} />
  // );

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
      {/* <FlatList
        data={cats}
        renderItem={renderItem}
        contentContainerStyle={styles.flatlist}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ListEmptyComponent={<Text>Please try again</Text>}
        keyExtractor={(item) => item.id}
      /> */}
    </MySafeAreaView>
  );
};

export default CategoriesHome;

const styles = StyleSheet.create({});
