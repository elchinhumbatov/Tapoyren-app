import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { AirbnbRating } from "react-native-ratings";
import LottieView from 'lottie-react-native';

import commonStyles from "../../config/commonStyles";
import { COURSE as course } from "../../data/dummy-data";
import { COURSES as courses } from "../../data/dummy-data";
import colors from "../../config/colors";
import CourseComponent from "../../components/CategoryComponents/CourseComponent";


const CourseScreen = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseObj, setCourseObj] = useState({});
  const title = route.params.title || "Course";
  const id = route.params.id || "m1";

  useEffect(() => {
    setCourseObj(course.find((i) => i.id === id));
  }, [course, id]);

  const handlePress = (id, title) => {
    navigation.navigate("CourseScreen", { title, id });
  };
  const handleRate = (val) => {
    setModalVisible(true)
    console.log(val);
  };
  return (
    <ScrollView style={styles.container}>
      <View
        style={[styles.wrapper, { flexDirection: "row" }, commonStyles.shadow]}
      >
        <Image style={styles.img} source={{ uri: courseObj.img }} />
        <View style={styles.info}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.instructor}>{courseObj.instructor}</Text>
            <Text style={styles.secondary}>Telimchi</Text>
          </View>
          <TouchableHighlight
            onPress={() => navigation.navigate("CourseWatch", { title })}
            style={styles.btn}
          >
            <Text style={{ color: colors.white }}>Bashla</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={[styles.wrapper, commonStyles.shadow]}>
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>Kurs haqqında</Text>
          <Text style={styles.text}>
            ACCA FM Financial Management (F9) BPP Revision Kit suallarının
            izahlı həllərini burada göstəririk. (Qeyd olaraq istəyənlər üçün
            bütün kursların olduğu ACCA tam paketi linki: ACCA Paketi -
            tıklayın)
          </Text>
          <Text style={styles.text}>
            Bir çoxlarınız sualların həllərini anlamaqda çətinlik çəkirsiniz, bu
            kurs sizə kömək edəcəkdir. Çünkü imtahanlarda da burada verilmiş
            testlərə oxşar testlər olacaqdır və əgər siz həlləri anlayarsınızsa
            imtahanları da rahat keçərsiniz.
          </Text>
        </View>
      </View>
      <Text style={[styles.aboutTitle, { paddingLeft: 10 }]}>
        Diger Kurslar
      </Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <CourseComponent item={item} onPress={handlePress} />
        )}
        horizontal
      />
      <View style={[styles.wrapper, { marginBottom: 15 }, commonStyles.shadow]}>
        <Text style={styles.aboutTitle}>Tələbələrin fikirləri</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <AirbnbRating
            showRating={false}
            defaultRating={0}
            selectedColor={colors.primary}
            size={30}
            onFinishRating={handleRate}
            ratingContainerStyle={{width: '50%'}}
          />
          <Text>4.5</Text>
          <Modal 
            visible={modalVisible}
            animationType='fade'
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={[styles.modalView, commonStyles.shadow]}>
                <LottieView
                  source={require("../../assets/animations/rating-star.json")}
                  style={{
                    width: 130,
                    height:130
                  }}
                  autoPlay
                  loop={false}
                  onAnimationFinish={() => setModalVisible(false)}
                />
                <Text>Thanks!</Text>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // paddingHorizontal: 5,
  },
  wrapper: {
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  instructor: {
    fontWeight: "700",
    fontSize: 24,
  },
  btn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 7,
  },
  text: {
    marginVertical: 5,
    lineHeight: 18,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0, .7)'
  },
  modalView: {
    width: 150,
    height: 150,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
    paddingBottom: 10
  }
});
