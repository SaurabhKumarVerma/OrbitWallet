import {
  Dimensions,
  StyleSheet,
  TextInput as DefaultTextInput,
  TextInputProps as DefaultTextInputProps,
  View,
} from "react-native";
import React from "react";
import { colors } from "../../Theme/colors";
import { typography } from "../../Theme/typography";
import IconButton from "../Icons/Icons";

const windowWidth = Dimensions.get("screen").width;

interface ITextInput extends DefaultTextInputProps {
  placeholder: string;
  isIcon?: boolean;
}

const CustomTextInput = (props: ITextInput) => {
  const { isIcon, placeholder, ...DefaultTextInputProps } = props;
  return (
    <View style={styles.container}>
      {isIcon ? <IconButton icon="search" /> : null}

      <DefaultTextInput
        {...DefaultTextInputProps}
        placeholder={placeholder}
        style={[styles.input]}
        placeholderTextColor={colors.black}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 48,
    backgroundColor: colors.white,
  },
  input: {
    height: 58,
    width: windowWidth - 40,
    fontFamily: typography.primary.light,
    fontSize: 14,
    color: colors.black,
  },
});
