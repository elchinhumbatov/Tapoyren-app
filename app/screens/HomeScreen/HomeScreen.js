import React from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import MySafeAreaView from "../../components/MySafeAreaView/MySafeAreaView";
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <MySafeAreaView>
      <ScrollView style={s.container}>
        <Text>This is Home Screen!</Text>
        <View style={s.box}></View>
        <View style={s.box}></View>
        <View style={s.box}></View>
        <View style={s.box}></View>
        <View style={s.box}></View>
        <View style={s.box}></View>
        <View style={s.box}></View>
        <View style={s.box}></View>
        <View style={s.box}></View>
        <View style={s.box}></View>
        <View style={s.box}></View>
      </ScrollView>
    </MySafeAreaView>
  );
};

export default HomeScreen;
// export default withSafeAreaViewScreens(HomeScreen);

const s = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: "yellow",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "lightgreen",
    borderBottomWidth: 1,
  },
});
