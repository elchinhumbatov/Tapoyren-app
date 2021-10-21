import React from 'react'
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import commonStyles from '../../config/commonStyles'
import colors from '../../config/colors';

const CoursesComponent = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.id, item.title)}>
      <View style={[styles.course, commonStyles.shadow]}>
        <Image style={styles.courseImg} source={{uri: item.imageUrl}} />
        <View style={styles.infoWrap}>
          <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
          <View style={styles.info}>
            <Text style={{}}>&#8380; {item.price}</Text>
            <Text style={{}}>4.5 <Ionicons name='star' color={colors.primary} /></Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CoursesComponent

const styles = StyleSheet.create({
  course: {
    flex: 1,
    width: 150,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  courseImg: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoWrap: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  }
})
