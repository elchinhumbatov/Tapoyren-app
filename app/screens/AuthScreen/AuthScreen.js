import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import MySafeAreaView from "../../components/MySafeAreaView/MySafeAreaView";
import colors from "../../config/colors";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";

const AuthScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <MySafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoWrap}>
            <Image
              style={styles.logo}
              source={{ uri: "https://tapoyren.com/public/images/logo.png" }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.toggleBtns}>
            <Pressable
              style={[
                styles.toggleBtn,
                { backgroundColor: isLogin ? colors.primary : null, borderTopLeftRadius: 15 },
              ]}
              onPress={() => setIsLogin(true)}
            >
              <Text style={[styles.toggleBtnText, {color: isLogin ? '#fff': '#000'}]}>Sign in</Text>
            </Pressable>
            <Pressable
              style={[
                styles.toggleBtn,
                { backgroundColor: !isLogin ? colors.primary : null, borderBottomRightRadius: 15 },
              ]}
              onPress={() => setIsLogin(false)}
            >
              <Text style={[styles.toggleBtnText, {color: !isLogin ? '#fff': '#000'}]}>Sign up</Text>
            </Pressable>
          </View>
          {isLogin ? <LoginScreen /> : <RegistrationScreen /> }
        </View>
      </ScrollView>
    </MySafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 10,
  },
  logoWrap: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: "60%",
    height: (Dimensions.get("screen").width * 0.6) / 3,
  },
  toggleBtns: {
    flexDirection: "row",
    marginVertical: 50,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: "center",
  },
  toggleBtnText: {
    fontSize: 16
  },
});