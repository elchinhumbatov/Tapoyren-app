import React, {createContext, useState} from 'react';
import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});

  const setAccessToken = async (token) => {
    await SecureStore.setItemAsync('token', token);
  }
  const getAccessToken = async () => {
    let result = await SecureStore.getItemAsync('token');
    return result;
  }

  const login = async (token) => {
    console.log('token from auth login func ', token)
    if (token) {
      let decoded = await jwtDecode(token);
      setUserData(decoded);
      setAccessToken(token);
      setIsAuth(true);
    }
  }

  const logout = async () => {
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