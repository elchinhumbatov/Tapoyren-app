import React, {createContext, useState} from 'react';
import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

import { refresh } from '../api/accountScreenAPI';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});

  const setAccessToken = async (token) => {
    await SecureStore.setItemAsync('token', token);
  }
  const getAccessToken = async () => {
    let result = await SecureStore.getItemAsync('token');
    console.log('result', result)
    return result;
  }
  const refreshAccessToken = async () => {
    let token = await getAccessToken();
    if (token) {
      try {
        let res = await refresh();
        let data = await res.data;
        console.log('authcontext data ', data)
        if (data.isAuthenticated) {
          login(data.token);
        } else {
          logout();
        }
      } catch (error) {
        console.log("error from authcontext", error);
      } finally {
        return true
      }
    }
  }

  const login = async (token) => {
    console.log('token from authcontext login ', token)
    if (token) {
      let decoded = await jwtDecode(token);
      setUserData(decoded);
      setAccessToken(token);
      setIsAuth(true);
    }
  }

  const logout = async () => {
    setUserData({});
    setAccessToken('');
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        userData,
        setAccessToken,
        getAccessToken,
        refreshAccessToken,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};

// const [authState, setAuthState] = useState({
  //   accessToken: null,
  //   refreshToken: null,
  //   authenticated: null,
  // });

        // authState,
        // getAccessToken,
        // setAuthState,
        // logout,

//logout()
    // setAuthState({
    //   accessToken: null,
    //   refreshToken: null,
    //   authenticated: false,
    // });