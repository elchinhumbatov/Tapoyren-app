import React, { useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import { refresh } from "./api/accountScreenAPI";

import { AuthContext } from "./context/authContext";
import AppTabNavigator from "./navigators/AppTabNavigator";
import Loader from "./components/Loader/Loader";

const PosApp = () => {
  const [tokenIsFetched, setTokenIsFetched] = useState(false);
  const { login, logout, getAccessToken } = useContext(AuthContext);

  const fetchToken = async () => {
    let token = await getAccessToken();
    console.log('posapp init', token);
    if (token) {
      try {
        let res = await refresh();
        let data = await res.data;
        console.log('posApp ', data)
        if (data.isAuthenticated) {
          await login(data.token);
        } else {
          logout();
        }
        
      } catch (error) {
        console.log("error from app.js", error);
      } finally {
        setTokenIsFetched(true);
      }
    }
    setTokenIsFetched(true);
  };

  useEffect(() => {
    let mounted = true;
    if(mounted) fetchToken();
    return () => {
      mounted = false;
    }
  }, []);

  return (
    <>
      {tokenIsFetched ? <AppTabNavigator /> : <Loader /> }
    </>
  );
};

export default PosApp;

const styles = StyleSheet.create({});
