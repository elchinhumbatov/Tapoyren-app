import axios from 'axios';
import * as SecureStore from 'expo-secure-store';


const axiosClient = axios.create({
  baseURL: `http://tapoyren.morooq.az/`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  // withCredentials: true
});
export const authAxiosClient = axios.create({
  baseURL: `http://tapoyren.morooq.az/`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

authAxiosClient.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync('token');
    console.log('interceptor token ',token)
    if (token) config.headers.Authorization = `Bearer ${token}`;
    console.log('config.headers is ', config.headers);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

authAxiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    let res = error.response;
    if (res.status == 401) {
      console.log('error interceptors 401 code ')
      // window.location.href = “https://example.com/login”;
      // refresh token ()
    }
    console.error('Looks like there was a problem. Status Code: ' + res.status);
    return Promise.reject(error);
  }
);

export default axiosClient;