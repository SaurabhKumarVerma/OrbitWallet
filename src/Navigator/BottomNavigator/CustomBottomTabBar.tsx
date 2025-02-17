import { StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import BottomIcon from "./BottomIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../Theme/colors";
import { CONSTANT_HEIGHT } from "../../Constant/height";

/**
 * The CustomBottomTabBar component is a custom tab bar that displays three tabs with the respective icons
 * Home,and  Search.
 *
 * This component uses the `state`, `descriptors`, and `navigation` props to handle the rendering and user interactions
 * for each tab. The layout, style, and size of the tab bar are predefined by using the `StyleSheet` and `LinearGradient` components.
 *
 * Each tab is represented by a `Pressable` component, which allows the user to tap on the tab to navigate to the corresponding screen.
 * The `BottomIcon` component is used to render the tab icons and determine whether the tab is currently focused or not.
 */

const CustomBottomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { width } = useWindowDimensions();
  const MARGIN = 0;
  return (
    <LinearGradient
      colors={colors.lightBlueGradientColor}
      start={{ x: 1, y: -0.6 }}
      end={{ x: 1, y: 0.6 }}
      style={[styles.container, { width: width, bottom: MARGIN }]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={index.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              paddingBottom: 10,
            }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <View style={[styles.content]}>
              <BottomIcon
                isFocused={isFocused}
                routeName={route.name}
                index={state.index}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
};

export default CustomBottomTabBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    position: "absolute",
    height: CONSTANT_HEIGHT,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    overflow: "hidden",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
