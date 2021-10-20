import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

const CategoryScreens = ({data=[], numColumns=1, columnStyle=false, CBfunc=null, SomeComponent=null }) => {
  const renderItem = ({ item }) => (
    <SomeComponent item={item} onPress={CBfunc} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.flatlist}
      numColumns={numColumns}
      columnWrapperStyle={columnStyle}
      ListEmptyComponent={<Text>Please try again</Text>}
      keyExtractor={(item) => item.id && item.id}
    />
  );
};

export default CategoryScreens;

const styles = StyleSheet.create({
  flatlist: {
    padding: 25,
  }
});
