import React, { useState, useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button, CheckBox, Input, Overlay } from "react-native-elements";

import colors from "../../config/colors";

const LoginScreen = ({loginFromParent}) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  // const {setUser} = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    // username validation
    // if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(username)) return setUsernameError('Email is invalid')
    // else setUsernameError('')
    // password validation
    // if(password.length < 8) return setPasswordError('Password less than 8 charcters')
    // else setPasswordError('')
    let user = {
        email: username,
        name: "Elchin",
        password,
        type: "student",
    }
    loginFromParent(user, setLoading);

    // try {
    //   setLoading(true);
    //   let res = await signIn(user);
    //   let data = res.data;
    //   console.log('data', data);
    //   login(data.token);
    // } catch (error) {
    //   console.log('error from login ', error.message);
    // } finally {
    //   setLoading(false);
    // }
  };
  const handleResetPassword = () => {
    // console.log(user);
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) return setEmailError('Email is invalid')
    else setEmailError('')
  };
  return (
    <View>
      <Input
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
        leftIcon={{ type: "ionicon", name: "person", color: "gray" }}
        errorMessage={usernameError}
        inputContainerStyle={usernameError && {borderBottomColor: 'red'}}
      />
      <Input
        placeholder="Password"
        value={password}
        // onChangeText={setPassword}
        onChangeText={(e) => setPassword(prev => prev = e.toString())}
        leftIcon={{ type: "ionicon", name: "lock-closed", color: "gray" }}
        secureTextEntry
        errorMessage={passwordError}
        inputContainerStyle={passwordError && {borderBottomColor: 'red'}}
      />
      <CheckBox
        title="Remember me"
        checked={rememberMe}
        textStyle={{ fontWeight: "500", fontSize: 16 }}
        containerStyle={{ backgroundColor: null }}
        onPress={() => setRememberMe((prev) => !prev)}
      />
      <Button
        title="Sign In"
        buttonStyle={{ backgroundColor: colors.primary, marginTop: 15 }}
        onPress={handleSignIn}
        disabled={username.trim() && password.trim() ? false : true}
        loading={loading}
      />

      {/* ------- forget pass modal ------- */}

      <Pressable
        style={{ marginTop: 20 }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{fontSize: 17}}>Forget Passwor?</Text>
      </Pressable>
      <Overlay
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        overlayStyle={{ width: "95%" }}
      >
        <View style={styles.modalContent}>
          <Input
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
            leftIcon={{ type: "ionicon", name: "mail", color: "gray" }}
            errorMessage={emailError}
            inputContainerStyle={emailError && {borderBottomColor: 'red'}}
          />
          <Button
            title="Reset Password"
            buttonStyle={{ backgroundColor: colors.primary, marginTop: 15 }}
            onPress={handleResetPassword}
            disabled={email.trim() ? false : true}
          />
        </View>
      </Overlay>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  modalContent: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
});
