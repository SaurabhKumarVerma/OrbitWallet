/**

This file imports and exports custom font configurations for the Fira Code font family.
It defines a customFont object that contains the imported font weights and a typography object that uses these fonts. */

import {
  FiraCode_300Light as FiraLight,
  FiraCode_400Regular as FiraRegular,
  FiraCode_500Medium as FiraMedium,
  FiraCode_600SemiBold as FiraSemiBold,
  FiraCode_700Bold as FiraBold,
} from "@expo-google-fonts/fira-code";

export const customFont = {
  FiraLight,
  FiraRegular,
  FiraMedium,
  FiraSemiBold,
  FiraBold,
};

const fonts = {
  firaFonts: {
    light: "FiraLight",
    normal: "FiraRegular",
    medium: "FiraMedium",
    semiBold: "FiraSemiBold",
    bold: "FiraBold",
  },
};

export const typography = {
  primary: fonts.firaFonts,
};
