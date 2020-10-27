import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  View,
  Alert,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("hi there");

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello!</Text>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert("My Tile", "Message", [
            {
              text: "yes",
              onPress: () => console.log("Yes"),
            },
            { text: "no", onPress: () => console.log("No") },
          ])
        }
      />
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.prompt("title", "msg", (text) => console.log(text))
        }
      />

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
