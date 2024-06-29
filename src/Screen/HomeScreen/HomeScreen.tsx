import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../../Component/Home/Home";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
