import React from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const CourseWatch = ({route}) => {
  console.log(route)
  return (
    <View style={styles.w}>
      <View style={styles.a}></View>
      <View style={styles.b}>
        <ScrollView>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CourseWatch;

const styles = StyleSheet.create({
  w: {
    flex: 1,
  },
  a: {
    backgroundColor: 'yellow',
    flex: 2,
  },
  b: {
    backgroundColor: 'lightgreen',
    flex: 3,
  },
  box: {
    height: 100,
    borderBottomWidth: 2,
    width: 100,
    backgroundColor: 'red'
  }
});
