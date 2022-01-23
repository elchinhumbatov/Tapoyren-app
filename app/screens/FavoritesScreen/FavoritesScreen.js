import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native';

import MySafeAreaView from '../../components/MySafeAreaView/MySafeAreaView';
import commonStyles from '../../config/commonStyles';
import CategoryScreens from '../../components/CategoryComponents/CategoryScreens';
import CourseComponent from '../../components/CategoryComponents/CourseComponent';


const FavoritesScreen = ({navigation}) => {

  const fetchCourses = () => {
    // side effect
  };
  
  const handleCourse = (id, title) => {
    navigation.navigate("CourseScreen", { id, title });
  };

  useEffect(() => {
  
  }, [])

  return (
    <MySafeAreaView>
      <Text style={ commonStyles.screenTitle }>Favorites</Text>
      <View style={styles.emptyWrap}>
        <Image source={require('../../assets/img/paper.png')} style={styles.img} resizeMode='contain' />
        <Text style={styles.title}>You favorites are emty</Text>
        <Text>Search or browse categories to find a course for you.</Text>
      </View>
      {/* <CategoryScreens
          data={courses} // data?
          numColumns={2}
          columnStyle={{ justifyContent: "space-between" }}
          CBfunc={handleCourse}
          SomeComponent={CourseComponent}
          myKey='courseId'
          handleRefresh={fetchCourses}
        /> */}
    </MySafeAreaView>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  emptyWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  img: {
    width: 100,
    height: 150,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 10
  },
})
