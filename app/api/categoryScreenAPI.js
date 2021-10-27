import axiosClient from './apiClient';

export const getCategories = (langId=1) => {
  return axiosClient.get(`/api/Category/GetParentCategoriesByLanguageId?languageid=${langId}`)
}

export const getSubcategories = (catId, langId=1) => {
  return axiosClient.get(`/api/Category/GetSubcategoryByParentId/${catId}/${langId}`)
}
export const getCourses = (subcatId, langId=1) => {
  return axiosClient.get(`api/Course/GetByCategory/${subcatId}/${langId}`)
}
