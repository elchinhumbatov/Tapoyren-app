import { authAxiosClient } from './apiClient';


export const signUp = (user) => {
  return authAxiosClient.post(`/api/User/register`, user)
}
export const signIn = async (user) => {
  return authAxiosClient.post(`/api/User/token`, user)
}
export const refresh = async () => {
  return authAxiosClient.post(`/api/User/refresh-token`)
}

