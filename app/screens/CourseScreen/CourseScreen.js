import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { VimeoPlayer } from "@mindtechapps/rn-vimeo-player";
import { Tab, TabView } from "react-native-elements";
import sanitize from "sanitize-html";
import WebView from "react-native-webview";
import * as FileSystem from 'expo-file-system';

import colors from "../../config/colors";
import { getCourse } from "../../api/courseScreenAPI";
import Loader from "../../components/Loader/Loader";
import MySafeAreaView from "../../components/MySafeAreaView/MySafeAreaView";
import CourseSections from "../../components/CategoryComponents/CourseSections";
import CourseMore from "./CourseMore";
import InstructorInfo from "../../components/CourseComponents/instructorInfo";


const CourseScreen = ({ route, navigation }) => {
  const [{ videoId, videoTitle }, setVideoId] = useState({});
  const [tabIndex, setTabIndex] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [course, setCourse] = useState({});

  const fetchCourse = async () => {
    try {
      setisLoading(true);
      let res = await getCourse(route.params.id);
      let data = await res.data;
      setCourse(data[0]);
    } catch (error) {
      console.log("Error from course screen ", error);
    } finally {
      setisLoading(false);
    }
  };

  const handleDownload = () => {
    // const uri = `https://player.vimeo.com/video/${videoId}`
    const uri = 'http://techslides.com/demos/sample-videos/small.mp4'
    let fileUri = FileSystem.documentDirectory + "small.mp4";
    FileSystem.downloadAsync(uri, fileUri)
    .then(({ uri }) => {
      console.log('first', uri);
    })
    .catch(error => {
      console.error(error);
    })
  }
  // const saveFile = async (fileUri) => {
  //   const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  //   if (status === "granted") {
  //       const asset = await MediaLibrary.createAssetAsync(fileUri)
  //       await MediaLibrary.createAlbumAsync("Download", asset, false)
  //   }
  // }

  const goToEnroll = () => {
    const prices = {
      priceMonthly: course.priceMonthly,
      priceQuarterly: course.priceQuarterly,
      priceSemianually: course.priceSemianually,
      priceAnually: course.priceAnually,
    }
    // console.log(prices);
    navigation.navigate("Enroll", { title: course.title, prices });
  };

  useEffect(() => {
    fetchCourse();
  }, [route.params.id]);

  if (isLoading) return <Loader />;

  return (
    <MySafeAreaView>
      {videoId && (
        <View>
          <View style={{height: Dimensions.get("window").width / 1.78}}>
            {/* <VimeoPlayer videoId={videoId} loaderColor={colors.primary} /> */}
            <WebView 
              source={{
                uri: `https://player.vimeo.com/video/${videoId}`, 
                headers: {"Referer": "https://tapoyren.com"}
              }} 
              onLoadStart={() => setIsVideoLoading(true)} 
              onLoadEnd={() => setIsVideoLoading(false)}
              onError={(err) => console.warn('error from video webview', err)}
            />
            {isVideoLoading && <View style={styles.videoLoader}><Loader /></View>}
          </View>
          <View style={styles.playingTitle}>
            <Text style={{ fontSize: 17 }}>{videoTitle}</Text>
            <Button onPress={handleDownload} title="Save" />
          </View>
        </View>
      )}
      {!videoId && <InstructorInfo navigation={navigation} course={course} courseId={route.params.id} />}
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
      {/* <ScrollView> */}
        <TabView value={tabIndex} onChange={setTabIndex}>
          <TabView.Item style={{ width: "100%"}} onMoveShouldSetResponder={e => e.stopPropagation()}>
            <CourseSections
              setVideoId={setVideoId}
              courseId={route.params.id}
            />
          </TabView.Item>
          <TabView.Item onMoveShouldSetResponder={e => e.stopPropagation()}>
            <ScrollView style={{padding: 10}}>
              {videoId && (
                <InstructorInfo navigation={navigation} course={course} />
              )}
              <Text h1>
                {sanitize(course.about, {
                  allowedTags: [],
                  allowedAttributes: [],
                })}
              </Text>
            </ScrollView>
          </TabView.Item>
          <TabView.Item onMoveShouldSetResponder={e => e.stopPropagation()}>
            <CourseMore course={course} navigation={navigation} />
          </TabView.Item>
        </TabView>
      {/* </ScrollView> */}
      <TouchableOpacity
        style={styles.enrollBtnWrap}
        onPress={() => goToEnroll()}
      >
        <Text style={styles.enrollBtn}>Enroll</Text>
      </TouchableOpacity>
    </MySafeAreaView>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  videoLoader: {
    position: 'absolute',
    // top: Dimensions.get("window").width / (1.78 * 2) - 40,
    // left: Dimensions.get("window").width / 2 - 40,
    width: '100%',
    height: '100%',
    backgroundColor: '#eee'
  },
  playingVideo: {
    fontSize: 20,
    fontWeight: "600",
    padding: 10,
  },
  playingTitle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "silver",
  },
  priceRating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  price: {
    color: colors.primary,
    fontSize: 20,
  },
  tabTitle: {
    color: "#000",
    textTransform: "capitalize",
    paddingVertical: 1,
  },
  tabContainer: {
    backgroundColor: "#eee",
  },
  enrollBtnWrap: {
    backgroundColor: colors.primary,
    justifyContent: "center",
  },
  enrollBtn: {
    color: colors.white,
    textAlign: "center",
    paddingVertical: 12,
    fontWeight: "600",
    fontSize: 18,
  },
});
