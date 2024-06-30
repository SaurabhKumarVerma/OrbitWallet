/**
 * App theme configuration file
 *
 * This file exports a custom theme object that extends the default theme from @react-navigation/native.
 * It overrides the background color with a custom color from the colors module.
 */

import { DefaultTheme } from "@react-navigation/native";
import { colors } from "./colors";

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.aliceBlue,
  },
};
