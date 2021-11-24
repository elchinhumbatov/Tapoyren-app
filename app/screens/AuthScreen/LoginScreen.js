import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button, CheckBox, Input, Overlay } from "react-native-elements";

import colors from "../../config/colors";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignIn = () => {
    let user = { username, password, rememberMe };
    console.log(user);
  };
  const handleResetPassword = () => {
    // console.log(user);
  };
  return (
    <View>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        leftIcon={{ type: "ionicon", name: "person", color: "gray" }}
        // errorMessage='ENTER A VALID ERROR HERE'
        // inputContainerStyle={{borderBottomColor: 'red'}}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        leftIcon={{ type: "ionicon", name: "lock-closed", color: "gray" }}
        secureTextEntry
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
      />

      {/* ------- modal ------- */}

      <Pressable
        style={{ marginTop: 20 }}
        onPress={() => setModalVisible(true)}
      >
        <Text>Forget Passwor?</Text>
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
