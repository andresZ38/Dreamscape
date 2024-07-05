import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import SVGImages from "../../assets/images/SVGIcons";
import InputComponent from "../../components/InputComponent/InputComponent";
import { router } from "expo-router";
import ThemeContext from "../../theme/ThemeContext";
import CheckBox from "react-native-check-box";

const Login = () => {
  const theme = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SVGImages.Logo style={styles.logo} />

        <View style={styles.inputContainer}>
          <InputComponent
            label="Email"
            placeholder="jennywiliams.s1@gmail.com"
            value={email}
            onChangeText={setEmail}
          />

          <InputComponent
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <View style={styles.rememberMeContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => setToggleCheckBox(!toggleCheckBox)}
                isChecked={toggleCheckBox}
                rightText="Remember Me"
                checkBoxColor={theme.checkedboxcolor}
                rightTextStyle={{ color: theme.color }}
              />
              <TouchableOpacity onPress={() => router.push("ForgotPassword")}>
                <Text
                  style={[styles.forgotPasswordText, { color: theme.color }]}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.signInButtons}>
            <TouchableOpacity
              onPress={() => {}}
              style={[styles.signInBtn, { backgroundColor: theme.signInBtn }]}
            >
              <SVGImages.GoogleIcon />
              <Text style={[styles.signInBtnText, { color: theme.color }]}>
                Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={[styles.signInBtn, { backgroundColor: theme.signInBtn }]}
            >
              <SVGImages.FacebookIcon />
              <Text style={[styles.signInBtnText, { color: theme.color }]}>
                Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomButtons}>
        <CustomButton
          text="Create Account"
          onPress={() => router.push("CreateAccount")}
        />
        <View style={{ marginVertical: 10 }} />
        <CustomButton text="Sign In" onPress={() => router.push("Home")} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  rememberMeText: {
    marginLeft: 10,
    fontSize: 16,
  },
  forgotPasswordText: {
    fontSize: 16,
    textDecorationLine: "underline", // Optional for better visibility
  },
  inputContainer: {
    marginTop: 20,
    width: "100%",
  },
  signInButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
  signInBtn: {
    flexDirection: "row",
    width: "48%",
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  signInBtnText: {
    marginLeft: 10,
    fontSize: 16,
  },
  bottomButtons: {
    marginBottom: 20,
  },
});
