import axiosClient from './apiClient';

export const getCourse = (id) => {
  return axiosClient.get(`api/Course/GetById/${id}`)
}
export const getInstructorCourses = (id) => {
  return axiosClient.get(`api/Course/GetByInstructor/${id}`);
}
export const getCourseSections = (id) => {
  return axiosClient.get(`api/CourseSection/GetByCourseId/${id}`);
}
export const setCourseRating = (data) => {
  return axiosClient.post(`/api/CourseRating`, data);
}

