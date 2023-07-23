import { ImageBackground, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import { colors } from "../../constants/colors";

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const loginAsDocHandler = async () => {
    // Reset previous error messages
    setEmailError("");
    setPasswordError("");

    // Field validation
    if (!email.trim()) {
      setEmailError("Email is required.");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      return;
    }

    const response =  await fetch("http://127.0.0.1:9000/doctor/login",{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => response.json)

    // If all fields are filled, proceed to login
    navigation.navigate("DoctorDashboard", {});
  };

  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <ImageBackground
          source={require("../../assets/images/signupbg.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.textContainer}>
          <TextInput
            style={styles.inputContainer}
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              console.log("Email Typed:", text);
              setEmail(text);
            }}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          <TextInput
            style={styles.inputContainer}
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              console.log("Password Typed:", password);
              
            }}
            secureTextEntry
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={loginAsDocHandler}>
            Login
          </Button>
        </View>
      </Card>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    marginTop: 40,
    width: 250,
    height: 200,
  },
  cardContainer: {
    marginTop: 200,
    height: 200,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: "#D9D9D9",
  },
  textContainer: {
    padding: 20,
    justifyContent: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 60,
    borderRadius: 12,
  },
  buttonContainer: {
    padding: 10,
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkpurple,
    width: 250
  },
});
