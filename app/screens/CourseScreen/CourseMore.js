import React from "react";
import { Pressable, Share, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CourseMore = ({ courseId, title }) => {
  const handleShare = async () => {
    console.log('init')
    try {
      console.log('before async')
      const result = await Share.share({
        message: `Hey, check this course out! ${title}, https://tapoyren.com/course/${courseId}`,
        url: `https://tapoyren.com/course/${courseId}`,
      });
      console.log('after async')
    } catch (error) {
      alert(error.message);
    }
  };

  const handleRate = () => {console.log('asd')};
  const handleFavorite = () => {};
  const handleBug = () => {};

  return (
    <View style={styles.container}>
      <Pressable onPress={handleShare}>
        <View style={styles.itemWrap}>
          <Ionicons name="share-outline" size={20} />
          <Text style={styles.itemTxt}>Share this course</Text>
        </View>
      </Pressable>
      <Pressable onPress={handleRate}>
        <View style={styles.itemWrap}>
          <Ionicons name="star-outline" size={20} />
          <Text style={styles.itemTxt}>Rate this course</Text>
        </View>
      </Pressable>
      <Pressable onPress={handleFavorite}>
        <View style={styles.itemWrap}>
          <Ionicons name="heart-outline" size={20} />
          <Text style={styles.itemTxt}>Add to favorites</Text>
        </View>
      </Pressable>
      <Pressable onPress={handleBug}>
        <View style={styles.itemWrap}>
          <Ionicons name="bug-outline" size={20} />
          <Text style={styles.itemTxt}>Find a bug? Tell us about it</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CourseMore;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  itemWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  },
  itemTxt: {
    fontSize: 16,
    marginLeft: 5,
  },
});

