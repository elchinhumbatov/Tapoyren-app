import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { COURSES as courses } from '../../data/dummy-data'
import CoursesComponent from '../../components/CategoryComponents/CoursesComponent';

const SubcategoryCourses = ({navigation}) => {
  const renderItem = ({item}) => <CoursesComponent item={item} onPress={handleCourse} />

  const handleCourse = (id) => {
    navigation.navigate('CourseScreen', {id})
  }

  return (
    <FlatList 
      data={courses}
      renderItem={renderItem}
      contentContainerStyle={styles.flatlist}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
    />
  )
}

export default SubcategoryCourses

const styles = StyleSheet.create({
  flatlist: {
    padding: 25,
  },
})
