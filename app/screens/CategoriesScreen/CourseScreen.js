import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import commonStyles from '../../config/commonStyles';
import { COURSE as course } from '../../data/dummy-data';
import colors from '../../config/colors';

const CourseScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.wrapper, commonStyles.shadow]}>
        <Image style={styles.img} source={{uri: course.img}} />
        <View style={styles.info}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.instructor}>{course.instructor}</Text>
            <Text style={styles.secondary}>Telimchi</Text>
          </View>
          <TouchableHighlight onPress={()=> navigation.navigate('CourseWatch')} style={styles.btn}>
            <Text style={{color: colors.white}}>Bashla</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  )
}

export default CourseScreen

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5, 
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  img: {
    width: 100, 
    height: 100,
    borderRadius: 50
  },
  info: {
    // flex: 1,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  instructor: {
    fontWeight: '700',
    fontSize: 24,
  },
  btn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
  }
})
