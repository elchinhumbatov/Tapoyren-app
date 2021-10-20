import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MySafeAreaView from '../../components/MySafeAreaView/MySafeAreaView';

const CourseScreen = ({route}) => {
  return (
    <MySafeAreaView>
      <Text>course screen {route.params.id}</Text>
    </MySafeAreaView>
  )
}

export default CourseScreen

const styles = StyleSheet.create({})
