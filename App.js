import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useDimensions } from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableHighlight,
  Dimensions,
  Button,
} from "react-native";
import { preventAutoHide } from "expo/build/launch/SplashScreen";
import { Input, withTheme } from "react-native-elements";

export default function App() {
  console.log("App executed");
  // console.log(Dimensions.get("screen"));
  const [message, setMessage] = useState("");
  const [translation, setTranslation] = useState("");

  // const string = "hey I'm new at this";

  const handleChange = (value) => {
    setMessage(value);
  };

  const handleReset = () => {
    setMessage("");
  };
  const handleSubmit = () => {
    handleTranslate(message);
    setMessage(handleTranslate);
    // handleTranslate(message);
  };
  const handleTranslate = (string) => {
    const firstVowel = string.match(/[aeiou]/);
    const firstIndex = string.indexOf(firstVowel);
    const trans = "";
    if (firstIndex > 0) {
      return string.slice(firstIndex) + string.slice(0, firstIndex) + "ay";
    }
    return string + "way";
    // setTranslation(trans)
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          width: 250,
          height: 102,

          uri: "https://i.imgur.com/kmQcMoF.png?1",
        }}
      />
      <Text style={styles.text}>The cutest Pig Latin translator</Text>
      {/* <Image source={require("./assets/icon.png")} /> */}

      <Image
        source={{
          width: 200,
          height: 200,
          uri: "https://i.imgur.com/9927Hg8.png",
        }}
      />
      <TextInput
        style={styles.text}
        placeholder="enter your message"
        value={message}
        onChangeText={handleChange}
      />
      <Text>Oink: {translation}</Text>
      <Button
        style={buttonStyles.button}
        title="Translate"
        onPress={handleSubmit}
      />
      <Button style={buttonStyles.button} title="Reset" onPress={handleReset} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    color: "#FFFF",
    textShadowColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    marginVertical: 10,
    color: "#FFFF",
    textShadowColor: "#ffff",
    fontWeight: "500",
    fontSize: 12,

    // fontFamily: "Lilita One",
  },

  input: {
    backgroundColor: "#ffff",
    padding: 6,
    margin: 20,
    width: 300,
    borderColor: "#ffff",
    borderBottomWidth: 2,
    padding: 2,
  },
});
const buttonStyles = StyleSheet.create({
  button: {
    marginVertical: 10,
    color: "#FFFF",
    textShadowColor: "#ffff",
    fontWeight: "500",
    fontSize: 19,
    // fontFamily: "Lilita One",
  },
});
