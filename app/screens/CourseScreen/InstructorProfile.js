import React, {useState} from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const InstructorProfile = ({ route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.instructorWrap}>
        <View style={styles.instructorImgWrap}>
          <Image
            resizeMode="contain"
            style={[styles.instructorImg, { backgroundColor: "silver" }]}
            source={
              route.params.img
                ? { uri: route.params.img }
                : require("../../assets/img/logo.png")
            }
          />
        </View>
        <View>
          <Text style={styles.instructor}>{route.params.instructorName}</Text>
          <Text style={{}}>Təlimçi</Text>
        </View>
      </View>
      <View style={styles.about}>
        <TextInfo  title={'About'} txt={`Having a bachelor's degree at Qafqaz University, MBA majored in Finance at ADA University, being qualified with ADVANCED DIPLOMA IN ACCOUNTING AND BUSINESS of ACCA combining with my interests as well as my motivation lie in financial analysis and cost control accountant. Meanwhile working at Aztexnika LLC as a cost controller and financial analyst, I have attained several achievements such as maintaining the inventory of spare parts, the database of customers, financial reports influencing the decision-making process. Moreover, while studying at ADAU as a final project our team worked with "Baku International Sea Trade Port" (BISTP) on feasibility analysis "RORO Terminal" part of the new project of "ALAT Trade Port" which is then represented to several banks and M`} />
      </View>
      <View style={styles.courses}>
        <Text style={styles.h2}>Courses</Text>
      </View>
    </View>
  );
};

export default InstructorProfile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  h2: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10
  },
  instructorWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  instructorImgWrap: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 15,
    overflow: "hidden",
  },
  instructorImg: {
    width: 120,
    height: 120,
  },
  instructor: {
    fontWeight: "600",
    fontSize: 20,
  },
});

const TextInfo = ({txt, title}) => {
  const [show, setShow] = useState(false);

  const toggleText = () => {
    setShow(prev => !prev)
  }
  return (
    <View style={{}}>
      <Text style={styles.h2}>{title}</Text>
      <Text numberOfLines={show ? null : 2} style={{fontSize: 16}}>{txt}</Text>
      <Pressable onPress={toggleText}><Text style={{textAlign: 'right'}}>show {show ? 'less' : 'more'}</Text></Pressable>
    </View>
  )
}