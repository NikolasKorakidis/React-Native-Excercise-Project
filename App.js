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
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const handlePress = () => console.log("hi there");
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello!</Text>
      <View
        style={{
          backgroundColor: "blue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>

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
