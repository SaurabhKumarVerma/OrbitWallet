import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Search from "../../Component/Search/Search";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
