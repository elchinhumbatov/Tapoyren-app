import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { getSubcategories } from "../../api/categoryScreenAPI";
import CategoryScreens from "../../components/CategoryComponents/CategoryScreens";
import SubcategoryComponent from "../../components/CategoryComponents/SubcategoryComponent";
import Loader from "../../components/Loader/Loader";


const SubcategoriesScreen = ({ route, navigation }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSubCategories = async () => {
    setIsLoading(true);
    try {
      let res = await getSubcategories(route.params.categoryId);
      let data = await res.data;
      setSubCategories(data);
    } catch (error) {
      console.log('subcatScreen', error.message);
      setCategories([{myErr: 'Oops, something went wrong, pls try again later'}]);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);


  const handleSubcategory = (id, title) => {
    navigation.navigate("SubcategoryCourses", { subcatId: id, title });
  };

  if (isLoading) return <Loader />

  return (
    <CategoryScreens
      data={subCategories}
      CBfunc={handleSubcategory}
      SomeComponent={SubcategoryComponent}
      myKey='subcategoryId'
      handleRefresh={fetchSubCategories}
    />
  );
};

export default SubcategoriesScreen;

const styles = StyleSheet.create({});
