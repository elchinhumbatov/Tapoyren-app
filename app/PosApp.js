import React, { useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import { refresh } from "./api/accountScreenAPI";

import { AuthContext } from "./context/authContext";
import AppTabNavigator from "./navigators/AppTabNavigator";
import { AppLoading } from "expo-app-loading";
import Loader from "./components/Loader/Loader";

const PosApp = () => {
  const [tokenIsFetched, setTokenIsFetched] = useState(false);
  const { login, getAccessToken } = useContext(AuthContext);

  const fetchToken = async () => {
    let token = await getAccessToken();
    if (token) {
      try {
        let res = await refresh();
        let data = await res.data;
        console.log('posApp ', data)
        await login(data.token);
      } catch (error) {
        console.log("error from app.js", error);
      } finally {
        setTokenIsFetched(true);
      }
    }
    setTokenIsFetched(true);
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <>
      {tokenIsFetched ? <AppTabNavigator /> : <Loader /> }
    </>
  );
};

export default PosApp;

const styles = StyleSheet.create({});
