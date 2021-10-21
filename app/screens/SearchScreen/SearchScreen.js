import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MySafeAreaView from "../../components/MySafeAreaView/MySafeAreaView";

const SearchScreen = ({ route, navigation }) => {
  return (
    <MySafeAreaView>
      <View style={styles.container}>
        <Text>This is search screen</Text>
      </View>
    </MySafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
