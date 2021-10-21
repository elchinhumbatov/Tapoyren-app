import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import commonStyles from '../../config/commonStyles'

const SubcategoryComponent = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={[styles.subcategory, commonStyles.shadow]}>
        <Text numberOfLines={1} style={styles.subcatTitle}>{item.title}</Text>
        <Text>13 courses</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SubcategoryComponent

const styles = StyleSheet.create({
  subcategory: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subcatTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  }
})
