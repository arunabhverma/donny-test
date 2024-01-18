import React from "react";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <Link href="/chat">Chat</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
