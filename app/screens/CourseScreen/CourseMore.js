import React, {useContext, useState} from "react";
import { Pressable, Share, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Overlay, Rating } from "react-native-elements";
import LottieView from 'lottie-react-native';

import colors from "../../config/colors";
import {AuthContext} from "../../context/authContext"
import { setCourseRating } from "../../api/courseScreenAPI";


const CourseMore = ({ course, navigation }) => {
  const [rateModalVisible, setRateModalVisible] = useState(false);
  const [rateAnim, setRateAnim] = useState(true)
  const {isAuth, userData} = useContext(AuthContext);

  const handleShare = async () => {
    // console.log('init')
    try {
      // console.log('before async')
      const result = await Share.share({
        message: `Hey, check this course out! ${course.title}, https://tapoyren.com/course/${course.courseId}`,
        url: `https://tapoyren.com/course/${course.courseId}`,
      });
      // console.log('after async')
    } catch (error) {
      alert(error.message);
    }
  };

  const handleRateComplete = async (val) => {
    let data = {
      courseId: course.id,
      studentId: +userData.id,
      rating: val.toString(),
    }
    try {
      let res = await setCourseRating(data);
      if (res.status === 200) {
        setRateAnim(false);
      }
    } catch (error) {
      console.log('error rate comlete ', error.message)
    }
  }
  const handleAnimFinish = () => {
    setRateModalVisible(false);
    setRateAnim(true);
  }
  const handleRate = () => { isAuth ? setRateModalVisible(true) : toLogin() }
  const toLogin = () => { navigation.navigate('Account', { screen: 'AuthScreen' }) }
  const handleFavorite = () => {};

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
      {/* <Pressable onPress={handleBug}>
        <View style={styles.itemWrap}>
          <Ionicons name="bug-outline" size={20} />
          <Text style={styles.itemTxt}>Find a bug? Tell us about it</Text>
        </View>
      </Pressable> */}
      <Overlay isVisible={rateModalVisible} onBackdropPress={handleAnimFinish}>
        { rateAnim ? <View style={styles.rateModal}>
            <View style={styles.rateTitle}>
              {/* <Ionicons name='star-half-outline' size={30} /> */}
              <Text style={styles.rateTitleTxt}>{course.rating}</Text> 
              <Text style={{fontSize: 20}}>/5</Text>
            </View>
            <Text style={{paddingVertical: 10}}>Do you like this course?</Text>
            <Rating
              type='custom'
              ratingColor={colors.primary}
              startingValue={0}
              tintColor={colors.white}
              ratingBackgroundColor='silver'
              // fractions={1}
              onFinishRating={handleRateComplete}
            />
          </View> : 
          <LottieView
            autoPlay
            loop={false}
            style={{
              width: 400,
              height: 400,
              backgroundColor: '#eee',
            }}
            source={require('../../assets/animations/rating-star.json')}
            onAnimationFinish={handleAnimFinish}
          />
        }
      </Overlay>
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
  rateModal: {
    padding: 10,
  },
  rateTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateTitleTxt: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.primary,
    marginLeft: 7
  }
});

