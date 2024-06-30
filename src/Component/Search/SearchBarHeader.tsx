import { StyleSheet, View } from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import TopSearch from "./TopSearch";

const SearchBarHeader = () => {
  return (
    <View>
      <View style={styles.container}>
        <SearchBar />
      </View>
      <View
        style={{
          marginTop: 25,
          alignItems: "center",
        }}
      >
        <TopSearch />
      </View>
    </View>
  );
};

export default SearchBarHeader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 30,
  },
});
