import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import commonStyles from "../../config/commonStyles";
import colors from "../../config/colors";

const CourseComponent = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.courseId, item.courseTitle)}>
      <View style={[styles.course, commonStyles.shadow]}>
        <Image
          style={styles.courseImg}
          source={{ uri: item.courseImageUrl }}
          defaultSource={ require("../../assets/img/logo.png") }
        />
        <View style={styles.infoWrap}>
          <Text numberOfLines={2} style={styles.title}>
            {item.courseTitle}
          </Text>
          <View style={styles.info}>
            <Text style={{}}>&#8380; 9.99</Text>
            <Text style={{}}>
              {item.rating} <Ionicons name="star" color={colors.primary} />
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseComponent;

const styles = StyleSheet.create({
  course: {
    flex: 1,
    width: 150,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  courseImg: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'gray'
  },
  infoWrap: {
    flex: 1,
    padding: 5,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
});
