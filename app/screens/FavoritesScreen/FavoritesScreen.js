import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import sanitize from 'sanitize-html';

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
    let dirty = "<p>some text</p><a>some link</a>";
    let clean = sanitize(dirty, {
      // allowedTags: [],
      // allowedAttributes: [],
      transformTags: {
        'a' : ','
      }
    });
    console.log(clean)
  }, [])

  return (
    <MySafeAreaView>
      <Text style={ commonStyles.screenTitle }>Favorites</Text>
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

const styles = StyleSheet.create({})
