import React, {createContext, useState} from 'react';
// import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

import TokenService from '../service/token.service'

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});

  const setAccessToken = async (token) => {
    await TokenService.setLocalAccessToken(token);
    // await SecureStore.setItemAsync('token', token);
  }
  const getAccessToken = async () => {
    let result = await TokenService.getLocalAccessToken();
    // let result = await SecureStore.getItemAsync('token');
    // console.log('result', result)
    return result;
  }
  const refreshAccessToken = async () => {
    let data = await TokenService.refreshLocalAccessToken();
    if (data?.isAuthenticated) {
      login(data.token);
    } else {
      logout();
    }
    return true;
  }

  const login = async (token) => {
    console.log('token from authcontext login ', token)
    if (token) {
      await TokenService.setLocalAccessToken(token);
      let decoded = await jwtDecode(token);
      setUserData(decoded);
      // setAccessToken(token);
      setIsAuth(true);
    }
  }

  const logout = async () => {
    setIsAuth(false);
    setUserData({});
    await TokenService.removeLocalAccessToken();
    // setAccessToken('');
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