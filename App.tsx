import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { customFont } from "./src/Theme/typography";
import { colors } from "./src/Theme/colors";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./src/Navigator/BottomNavigator/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeScreen from "./src/Screen/HomeScreen/HomeScreen";
import SearchScreen from "./src/Screen/SearchScreen/SearchScreen";
import { appTheme } from "./src/Theme/theme";

export default function App() {
  const [isFontLoaded, fontLoadError] = useFonts(customFont);

  if (!isFontLoaded && !fontLoadError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer theme={appTheme}>
        <BottomNavigator />
      </NavigationContainer>
      <StatusBar hidden />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.aliceBlue,
  },
});
