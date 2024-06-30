/**

This file imports and exports custom font configurations for the Roboto Code font family.
It defines a customFont object that contains the imported font weights and a typography object that uses these fonts. 
*/

import {
  Roboto_300Light as RobotoLight,
  Roboto_400Regular as RobotoRegular,
  Roboto_500Medium as RobotoMedium,
  Roboto_700Bold as RobotoSemiBold,
  Roboto_900Black as RobotoBold,
} from "@expo-google-fonts/roboto";

export const customFont = {
  RobotoLight,
  RobotoRegular,
  RobotoMedium,
  RobotoSemiBold,
  RobotoBold,
};

const fonts = {
  robotoFonts: {
    light: "RobotoLight",
    normal: "RobotoRegular",
    medium: "RobotoMedium",
    semiBold: "RobotoSemiBold",
    bold: "RobotoBold",
  },
};

export const typography = {
  primary: fonts.robotoFonts,
};
