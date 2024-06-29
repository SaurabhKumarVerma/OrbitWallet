import { StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "../../Base/Text/CustomText";
import { colors } from "../../Theme/colors";
import CustomTextInput from "../../Base/TextInput/CustomTextInput";

const SearchBar = () => {
  return (
    <View>
      <View style={{ marginBottom: 20 }}>
        <CustomText
          text={"Discover the world"}
          preset="heading"
          style={{ color: colors.aquamarineDark }}
        />
      </View>
      <CustomTextInput placeholder="Search" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
