import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

import { getCategories } from "../../api/categoryScreenAPI";
import CategoryComponent from "../../components/CategoryComponents/CategoryComponent";
import CategoryScreens from "../../components/CategoryComponents/CategoryScreens";
import Loader from "../../components/Loader/Loader";
import MySafeAreaView from "../../components/MySafeAreaView/MySafeAreaView";
import commonStyles from "../../config/commonStyles";
import i18n from "../../service/i18n";

const CategoriesHome = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      let res = await getCategories();
      let data = await res.data;
      setCategories(data);
    } catch (error) {
      console.log('error is ', error.message);
      setCategories([{myErr: 'Oops, something went wrong, pls try again later'}]);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    let mounted = true;
    if(mounted) fetchCategories();
    return () => {
      mounted = false;
    }
  }, []);

  const handleCategory = (categoryId, categoryTitle) => {
    navigation.navigate("Subcategories", { categoryId, title: categoryTitle });
  };

  if (isLoading) return <Loader />

  return (
    <MySafeAreaView>
      <Text style={commonStyles.screenTitle}>{i18n.t('categories.title')}</Text>
      <CategoryScreens
        data={categories}
        CBfunc={handleCategory}
        SomeComponent={CategoryComponent}
        numColumns={2}
        columnStyle={{ justifyContent: "space-between" }}
        myKey='parentCategoryId'
        handleRefresh={fetchCategories}
      />
    </MySafeAreaView>
  );
};

export default CategoriesHome;

const styles = StyleSheet.create({});
