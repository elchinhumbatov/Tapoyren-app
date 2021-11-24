import React, {useState, useEffect} from "react";
import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, ScrollView, FlatList } from "react-native";
import Fuse from 'fuse.js'

import MySafeAreaView from "../../components/MySafeAreaView/MySafeAreaView";
import commonStyles from '../../config/commonStyles'
import { getCourses } from "../../api/searchScreenAPI";
import Loader from '../../components/Loader/Loader';
import CategoryScreens from "../../components/CategoryComponents/CategoryScreens";
import CourseComponent from '../../components/CategoryComponents/CourseComponent';

const SearchScreen = ({ route, navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [courses, setCourses] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [noCourses, setNoCourses] = useState(false);
  const [options] = useState({
    includeScore: true,
    threshold: .4,
    keys: ['courseTitle']
  });

  const handleCourse = (id, title) => {
    navigation.navigate("CourseScreen", { id, title });
  };

  const handleChange = (text) => {
    if (text.trim() === '') {
      setInputValue(text);
      setCourses([]);
      return;
    }
    setInputValue(text);
    let result = fuse.search(inputValue);
    if (result.length === 0) {
      setNoCourses(true)
    }
    setNoCourses(false);
    setCourses(result.map(i => i.item));
  }

  const fetchCourses = async () => {
    try {
      setisLoading(true);
      let res = await getCourses(1);
      let data = await res.data;
      // setFuse(new Fuse([{id: 0, courseTitle: 'title 1'}, {id: 1, courseTitle: 'title 2'}, {id: 2, courseTitle: 'pzdc'}], options));
      setFuse(new Fuse(data, options));
    } catch (error) {
      console.log('searchscreen', error)
    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  if (isLoading) return <Loader />
  
  return (
    <MySafeAreaView>
      <Text style={ commonStyles.screenTitle }>Search</Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TextInput 
            style={[styles.searchInput, {borderColor: isFocused ? 'blue' : 'silver'}]}
            placeholder='Type here...'
            clearButtonMode
            value={inputValue}
            onChangeText={handleChange}
            onFocus={()=> setIsFocused(true)}
            onBlur={()=> setIsFocused(false)}
          />
        </View>
      </TouchableWithoutFeedback>
        {noCourses && <Text>No courses for this request...</Text>}
        <CategoryScreens
          data={courses}
          numColumns={2}
          columnStyle={{ justifyContent: "space-between" }}
          CBfunc={handleCourse}
          SomeComponent={CourseComponent}
          myKey='courseId'
          handleRefresh={fetchCourses}
        />
    </MySafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  flatlist: {
    padding: 10,
    borderWidth: 1
  }
});
