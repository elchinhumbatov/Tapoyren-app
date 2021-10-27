import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

const CategoryScreens = ({
  data = [],
  numColumns = 1,
  columnStyle = false,
  CBfunc = null,
  SomeComponent = null,
  myKey,
  handleRefresh
}) => {
  const renderItem = ({ item }) => (
    <SomeComponent item={item} onPress={CBfunc} />
  );
  const onRefresh = () => (
    handleRefresh()
  );


  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.flatlist}
      numColumns={numColumns}
      columnWrapperStyle={columnStyle}
      ListEmptyComponent={<Text>Please try again later</Text>}
      keyExtractor={(item) => item[myKey]}
      refreshing={false}
      onRefresh={onRefresh}
    />
  );
};

export default CategoryScreens;

const styles = StyleSheet.create({
  flatlist: {
    padding: 25,
  },
});
