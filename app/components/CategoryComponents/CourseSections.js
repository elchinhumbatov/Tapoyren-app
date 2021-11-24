import React, { useState, useEffect } from "react";
import {
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { getCourseSections } from "../../api/courseScreenAPI";
import Loader from "../Loader/Loader";
import CourseSection from "./CourseSection";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../config/colors";

const SectionHeader = ({ section }) => {
  return (
    <View style={styles.sectionHeader}>
      <Text numberOfLines={2} style={styles.sectionHeaderTitle}>
        {section.title}
      </Text>
      <Text>{(section.timescale / 3600).toFixed(2)}</Text>
    </View>
  );
};

const SectionItem = ({
  item,
  setVideoId,
  selectedItemId,
  setSelectedItemId,
}) => {
  const handlePlay = () => {
    if (item.preview) {
      setVideoId(438371246);
      setSelectedItemId(item.id);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePlay}>
      <View
        style={[
          styles.sectionItem,
          {
            backgroundColor:
              item.id === selectedItemId ? "rgba(110, 195, 255, .3)" : null,
          },
        ]}
      >
        <Ionicons
          name={item.preview ? 'play-circle-outline' : 'lock-closed'}
          color={colors.primary}
          size={24}
          style={{ marginRight: 5 }}
        />
        <View style={styles.videoInfo}>
          <Text style={styles.sectionItemTitle}>{item.title}</Text>
          <Text style={{ color: "gray" }}>
            {(item.timescale / 3600).toFixed(2)}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const CourseSections = ({ setVideoId, courseId }) => {
  const [courseSections, setCourseSections] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      setisLoading(true);
      let res = await getCourseSections(courseId);
      let data = await res.data;
      let newData = data.map((i) => ({ ...i, data: i.courseVideos }));
      setCourseSections(newData);
    } catch (error) {
      console.log("CourseScreen ", error);
    } finally {
      setisLoading(false);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <SectionList
      style={styles.list}
      sections={courseSections}
      renderItem={({ item }) => (
        <SectionItem
          item={item}
          setVideoId={setVideoId}
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
        />
      )}
      renderSectionHeader={({ section }) => <SectionHeader section={section} />}
      extraData={selectedItemId}
      keyExtractor={(item) => item.title}
    />
  );
};

export default CourseSections;

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  sectionHeaderTitle: {
    flex: 1,
    fontWeight: "600",
  },
  sectionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  videoInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionItemTitle: {
    flex: 1,
    fontSize: 15,
  },
});

// <FlatList
//   data={courseSections}
//   renderItem={({ item }) => (
//     <CourseSection
//       sectionItem={item}
//       setVideoId={setVideoId}
//       handleSelection={handleSelection}
//       selectedItem={selectedItem}
//     />
//   )}
//   keyExtractor={(item) => item.id.toString()}
// />
