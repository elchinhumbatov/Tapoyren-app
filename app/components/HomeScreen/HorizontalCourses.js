import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import commonStyles from '../../config/commonStyles';


const HorizontalCourses = ({ data, handleCourse }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleCourse(item.courseId, item.courseTitle)}>
        <View style={[styles.course, commonStyles.shadow]}>
          <Image style={styles.img} source={{ uri: item.courseImageUrl }} />
          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={2}>
              {item.courseTitle}
            </Text>
            <View style={styles.priceRating}>
              <Text style={{ fontSize: 16 }}>&#8380; {item.price}</Text>
              <Text style={{ fontSize: 16 }}>
                <Ionicons name="time-outline" size={16} />{" "}
                {(item.courseDuration / 3600).toFixed(2)} saat
              </Text>
              <Text style={{ fontSize: 16 }}>
                {item.rating}{" "}
                <Ionicons name="star" color={colors.primary} size={18} />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      keyExtractor={(item) => "" + item.courseId}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default HorizontalCourses;

const styles = StyleSheet.create({
  course: {
    flexDirection: "row",
    width: Dimensions.get("screen").width - 45,
    marginHorizontal: 7,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 7,
  },
  info: {
    padding: 7,
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "600",
    fontSize: 17,
  },
  img: {
    width: 80,
    height: 90,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7
  },
  priceRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
