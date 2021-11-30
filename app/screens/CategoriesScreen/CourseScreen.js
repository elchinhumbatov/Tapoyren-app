import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Rating } from "react-native-ratings";
import { VimeoPlayer } from "@mindtechapps/rn-vimeo-player";
import { Tab, TabView } from "react-native-elements";
import sanitize from 'sanitize-html';

import colors from "../../config/colors";
import { getCourse } from "../../api/courseScreenAPI";
import Loader from "../../components/Loader/Loader";
import MySafeAreaView from "../../components/MySafeAreaView/MySafeAreaView";
import CourseSections from "../../components/CategoryComponents/CourseSections";

const CourseScreen = ({ route, navigation }) => {
  const [videoId, setVideoId] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [isLoading, setisLoading] = useState(false);
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

  useEffect(() => {
    fetchCourse();
  }, [route.params.id]);

  if (isLoading) return <Loader />;

  return (
    <MySafeAreaView>
      <ScrollView>
        <View style={styles.playerWrap}>
          {videoId && (
            <View style={{ height: 220 }}>
              <VimeoPlayer videoId={videoId} loaderColor={colors.primary} />
            </View>
          )}
        </View>
        <View style={styles.content}>
          <View style={styles.priceRating}>
            <Text style={styles.price}>
              &#10969;{course.priceMonthly}{" "}
              <Text style={{ fontSize: 14 }}>aylıq</Text>
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Rating
                type='custom'
                ratingColor={colors.primary}
                startingValue={course.rating}
                tintColor={colors.white}
                ratingBackgroundColor='silver'
                imageSize={25}
                fractions={1}
                readonly
              />
              <Text style={{marginLeft: 5, fontSize: 18, color: colors.primary, fontWeight: '500'}}>{course.rating}</Text>
            </View>
          </View>
          <View style={styles.instructorBlock}>
            <View style={styles.instructorWrap}>
              <Image
                resizeMode='contain'
                style={[styles.instructorImg, {backgroundColor: 'silver' }]}
                source={ course.instructorAvatar ? { uri: course.instructorAvatar } : require('../../assets/img/logo.png')}
              />
              <Text style={styles.instructor}>{course.instructorName}</Text>
            </View>
            <TouchableWithoutFeedback>
              <Text style={styles.profileBtn}>Profile</Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.tabsWrap}>
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
            <TabView value={tabIndex} onChange={setTabIndex} style={{backgroundColor: 'yellow'}}>
              <TabView.Item style={{ width: "100%" }}>
                {tabIndex === 0 && <CourseSections setVideoId={setVideoId} courseId={route.params.id} />}
              </TabView.Item>
              <TabView.Item style={{ width: "100%", padding: 10, flex: 1 }}>
                {tabIndex === 1 && <Text h1>{sanitize(course.about, {allowedTags: [], allowedAttributes: []})}</Text>}
              </TabView.Item>
              <TabView.Item style={{ backgroundColor: "lightgreen", width: "100%" }}>
                <Text h1>Cart</Text>
              </TabView.Item>
            </TabView>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.enrollBtnWrap}>
        <Text style={styles.enrollBtn}>Enroll</Text>
      </TouchableOpacity>
    </MySafeAreaView>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  playingVideo: {
    fontSize: 20,
    fontWeight: "600",
    padding: 10
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
  instructorBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "gray",
    padding: 15,
  },
  instructorWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  instructorImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 7,
  },
  instructor: {
    fontWeight: "600",
    fontSize: 20,
  },
  profileBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.primary,
    color: colors.primary,
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
    justifyContent:'center'
  },
  enrollBtn: {
    color: colors.white,
    textAlign: 'center',
    paddingVertical: 12,
    fontWeight: '600',
    fontSize: 18,
  },
});
