import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import TopSearch from "./TopSearch";

const SearchBarHeader = () => {
  return (
    <View>
      <View style={{ marginHorizontal: 30, marginTop: 30 }}>
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

const styles = StyleSheet.create({});
