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
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";
import { preventAutoHide } from "expo/build/launch/SplashScreen";
import { Input, withTheme } from "react-native-elements";

export default function App() {
  console.log("App executed");
  // console.log(Dimensions.get("screen"));
  const [message, setMessage] = useState("");

  const handleChange = (value) => {
    setMessage(value);
  };

  const handleReset = () => {
    setMessage("");
  };
  // const handleSubmit = () => {
  //   handleTranslate(message);
  //   setMessage(handleTranslate);
  //   // handleTranslate(message);
  // };

  const handleWords = (message) => {
    message = message.toLowerCase();
    message = message.replace(/ ?([.?!,]) ?/g, " $1 ");
    var array = message.split(" ");
    var word = "";
    for (var i = 0; i < array.length; i++) {
      word = array[i];
      if (isWord(word)) array[i] = handleTranslate(array[i]);
    }
    message = array.join(" ");
    message.replace(/ ([!?.,]+)/g, "$1");
    return message;
  };

  function isWord(text) {
    return text.match(/[^a-zA-Z\-']/gi) === null;
  }

  const handleTranslate = (string) => {
    if (string.slice(0, 1).match(/[aeiou]/gi) !== null) return string + "yay";
    // if they don't match, move 1st group of consonants to end and append ay

    return string.replace(/([b-df-hj-np-tv-z]+)(.+)/gi, "$2$1ay");

    // first solution
    // const firstVowel = string.match(/[aeiou]/);
    // const firstIndex = string.indexOf(firstVowel);
    // const trans = "";
    // if (firstIndex > 0) {
    //   return (
    //     string.toLowerCase().slice(firstIndex) +
    //     string.slice(0, firstIndex) +
    //     "ay"
    //   );
    // } else if (!string === "") {
    //   return string + "way";
    // }
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
      <Text style={styles.subtitle}>The cutest Pig Latin translator</Text>
      {/* <Image source={require("./assets/icon.png")} /> */}

      <Image
        source={{
          width: 200,
          height: 200,
          uri: "https://i.imgur.com/9927Hg8.png",
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your message"
        value={message}
        onChangeText={handleChange}
        textAlignVertical="top"
      />
      <Text style={styles.text} placeholder="Oink Oink">
        {" "}
        Translation Here: {handleWords(message)}
      </Text>
      {/* <Button
        style={buttonStyles.button}
        title="Translate"
        onPress={handleSubmit}
      /> */}
      <Button
        color="white"
        fontWeight="500"
        title="Reset"
        onPress={handleReset}
      />

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

  subtitle: {
    marginVertical: 10,
    color: "#FFFF",
    textShadowColor: "#ffff",
    fontWeight: "500",
    fontSize: 15,
    // fontFamily: "LilitaOne-Regular",
  },
  text: {
    marginVertical: 10,
    color: "#FFFF",
    textShadowColor: "#ffff",
    fontWeight: "500",
    fontSize: 25,
    // fontFamily: "LilitaOne-Regular",
  },

  input: {
    backgroundColor: "#ffff",
    padding: 6,
    margin: 20,
    width: 300,
    height: 50,
    flex: 0.25,
    flexDirection: "column",
    // flexDirection: "column",
    flexWrap: "wrap",
    // flexShrink: 1,
    borderColor: "#ffff",
    borderBottomWidth: 2,
    padding: 2,
  },
});
const buttonStyles = StyleSheet.create({
  button: {
    marginVertical: 10,
    color: "#ffff",
    textShadowColor: "#ffff",
    fontWeight: "500",
    fontSize: 19,
    // fontFamily: "Lilita One",
  },
});

{
  /* <TouchableOpacity
        style={buttonStyles.button}
        title="Reset"
        onPress={handleReset}
      >
        <Text> Reset </Text>
      </TouchableOpacity> */
}
