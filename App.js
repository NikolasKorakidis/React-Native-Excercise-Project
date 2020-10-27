import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("hi there");

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello!</Text>
      <TouchableOpacity onPress={() => console.log("hi here")}>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "http://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => console.log("hi here")}>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "http://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
