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
        onPress={() => console.log("Tapped")}
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
