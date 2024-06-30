import React, { FC } from "react";
import { Pressable, StyleProp, ViewStyle, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../Theme/colors";

/**

IconButton component for React Native.
This file exports a customizable IconButton component that can be used in React Native applications.
The component provides various options for customization, including:
Icon library: Supports multiple icon libraries such as Feather, FontAwesome, and Ionicons.
Icon family: Allows selection of the icon family (e.g., Feather,FontAwesome etc.).
Variant: Supports three variants - contained, text, and outline.
Size: Offers three size options - small, medium, and big.
Icon color: Allows customization of the icon color.
Roundness: Provides three roundness levels - full, medium, and small.
Style: Supports custom styles through the 'style' prop.
onPress: Handles press events through the 'onPress' prop.
The component uses the Pressable component from React Native and applies various styles based on the props provided.
It also includes a set of predefined styles for different variants, sizes, and roundness levels. */

export type IconLibrary = {
  [key: string]: () => React.ComponentType<any>;
};

const ICON_LIBRARIES: IconLibrary = {
  Feather: () => Feather,
  FontAwesome: () => FontAwesome,
  IonIcons: () => Ionicons,
  FontAwesome5: () => FontAwesome5,
};

export type IconButtonProps = {
  icon: string;
  iconFamily?: "Feather" | "FontAwesome" | "Ionicons" | "FontAwesome5";
  variant?: "text" | "contained" | "outline";
  size?: "small" | "medium" | "big";
  iconColor?: string;
  roundness?: "full" | "medium" | "small";
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  isButtonDisable?: boolean;
};

const IconButton: FC<IconButtonProps> = ({
  icon,
  iconFamily = "Feather",
  variant = "contained",
  size = "medium",
  iconColor = colors.black,
  roundness = "medium",
  style = {},
  onPress,
  isButtonDisable,
}: IconButtonProps) => {
  const Icon = ICON_LIBRARIES[iconFamily]();
  const iconSize = size === "big" ? 24 : size === "medium" ? 18 : 12;
  const buttonSize = size === "big" ? 48 : size === "medium" ? 36 : 24;

  const buttonStyles = [
    styles.button,
    styles[`${variant}Button`],
    styles[`${roundness}Roundness`],
    { width: buttonSize, height: buttonSize },
    style,
  ] as StyleProp<ViewStyle>;

  return (
    <Pressable
      disabled={isButtonDisable}
      onPress={onPress}
      style={({ pressed }) => [
        buttonStyles,
        pressed && styles.buttonPressed,
        pressed && styles.shadow,
      ]}
    >
      <Icon name={icon} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.9,
  },
  containedButton: {
    backgroundColor: colors.transparent,
  },
  textButton: {
    backgroundColor: colors.black,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#2196F3",
  },
  fullRoundness: {
    borderRadius: 100,
  },
  mediumRoundness: {
    borderRadius: 20,
  },
  smallRoundness: {
    borderRadius: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
