import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { VimeoPlayer } from "@mindtechapps/rn-vimeo-player";
import { Tab, TabView } from "react-native-elements";

import MySafeAreaView from "../../components/MySafeAreaView/MySafeAreaView";
import { getCourseSections } from "../../api/courseScreenAPI";
import Loader from "../../components/Loader/Loader";
import CourseSection from "../../components/CategoryComponents/CourseSection";

const CourseWatch = ({ route }) => {
  const [videoId, setVideoId] = useState(null);
  const [sections, setSections] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const handleSelection = (title) => {
    setSelectedItem(title);
  };

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      setisLoading(true);
      let res = await getCourseSections(route.params.id);
      let data = await res.data;
      setSections(data);
      // setSections([
      //   {
      //     id: "1",
      //     title: "firstsadasdsad sdasdsada dsadsadsad asdasda",
      //     courseVideos: [{ title: "video1" }, { title: "video2" }],
      //   },
      //   {
      //     id: "2",
      //     title: "second",
      //     courseVideos: [
      //       { title: "video3asdasdasdsadsad sadsad asd sad sasda" },
      //       { title: "video4" },
      //     ],
      //   },
      //   {
      //     id: "3",
      //     title: "third",
      //     courseVideos: [{ title: "video5" }, { title: "video6" }],
      //   },
      //   {
      //     id: "3",
      //     title: "third",
      //     courseVideos: [{ title: "video5" }, { title: "video6" }],
      //   },
      //   {
      //     id: "3",
      //     title: "third",
      //     courseVideos: [{ title: "video5" }, { title: "video6" }],
      //   },
      //   {
      //     id: "3",
      //     title: "third",
      //     courseVideos: [{ title: "video5" }, { title: "video6" }],
      //   },
      //   {
      //     id: "3",
      //     title: "third",
      //     courseVideos: [{ title: "video5" }, { title: "video6" }],
      //   },
      //   {
      //     id: "3",
      //     title: "third",
      //     courseVideos: [{ title: "video5" }, { title: "video6" }],
      //   },
      //   {
      //     id: "3",
      //     title: "third",
      //     courseVideos: [{ title: "video5" }, { title: "video6" }],
      //   },
      //   {
      //     id: "3",
      //     title: "third",
      //     courseVideos: [{ title: "video5" }, { title: "video6" }],
      //   },
      //   {
      //     id: "3",
      //     title: "third",
      //     courseVideos: [{ title: "video5" }, { title: "video6" }],
      //   },
      //   {
      //     id: "3",
      //     title: "third",
      //     courseVideos: [{ title: "video5" }, { title: "video6" }],
      //   },
      //   {
      //     id: "3",
      //     title: "third",
      //     courseVideos: [{ title: "video5" }, { title: "video6" }],
      //   },
      // ]);
    } catch (error) {
      console.log("CourseScreen ", error);
    } finally {
      setisLoading(false);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <MySafeAreaView>
      <View style={styles.playerWrap}>
        {videoId ? (
          <VimeoPlayer videoId={videoId} loaderColor="blue" />
        ) : (
          <View style={styles.prevView}>
            <Text style={styles.prevText}>{route.params.title}</Text>
            {/* <Text style={styles.prevText}>{"route.params.title"}</Text> */}
          </View>
        )}
      </View>
      <View style={styles.courseSectionsWrap}>
        <Text>ISsada {selectedItem}</Text>

        <Tab
          value={tabIndex}
          onChange={setTabIndex}
          indicatorStyle={{ backgroundColor: "blue" }}
        >
          <Tab.Item
            title="Videos"
            titleStyle={styles.tabTitle}
            containerStyle={styles.tabContainer}
          />
          <Tab.Item
            title="About"
            titleStyle={styles.tabTitle}
            containerStyle={styles.tabContainer}
          />
          <Tab.Item
            title="More"
            titleStyle={styles.tabTitle}
            containerStyle={styles.tabContainer}
          />
        </Tab>

        <ScrollView>
          <TabView value={tabIndex} onChange={setTabIndex}>
            <TabView.Item style={{ width: "100%" }}>
              <FlatList
                data={sections}
                renderItem={({ item }) => (
                  <CourseSection
                    sectionItem={item}
                    setVideoId={setVideoId}
                    handleSelection={handleSelection}
                    selectedItem={selectedItem}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: "yellow", width: "100%" }}>
              <Text h1>Favorite</Text>
            </TabView.Item>
            <TabView.Item
              style={{ backgroundColor: "lightgreen", width: "100%" }}
            >
              <Text h1>Cart</Text>
            </TabView.Item>
          </TabView>
        </ScrollView>
      </View>
    </MySafeAreaView>
  );
};

export default CourseWatch;

const styles = StyleSheet.create({
  playerWrap: {
    flex: 1,
  },
  courseSectionsWrap: {
    flex: 2,
  },
  prevView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  prevText: {
    color: "silver",
    fontWeight: "600",
    fontSize: 20,
  },
  tabTitle: {
    color: "#000",
    textTransform: "capitalize",
  },
  tabContainer: {
    backgroundColor: "#eee",
  },
});
