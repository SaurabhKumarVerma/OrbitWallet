import { Dimensions, Platform } from "react-native";

export const STATUSBAR_HEIGHT: number = Platform.OS === "ios" ? 0 : 0;

export const VIEW_HEIGHT = Dimensions.get("window").height * 0.4;
