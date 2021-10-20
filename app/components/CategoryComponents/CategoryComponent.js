import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import commonStyles from '../../config/commonStyles'

const CategoryComponent = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={[styles.category, commonStyles.shadow, { backgroundColor: item.color }]}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryComponent

const styles = StyleSheet.create({
  category: {
    width: 150,
    height: 150,
    padding: 10,
    borderRadius: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginVertical: 10,
  },
})
