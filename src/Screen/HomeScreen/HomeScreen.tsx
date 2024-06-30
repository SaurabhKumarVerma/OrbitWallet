import { StyleSheet, View } from "react-native";
import React from "react";
import Home from "../../Component/Home/Home";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
