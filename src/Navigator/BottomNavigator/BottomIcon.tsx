import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../Theme/colors";
import IconButton from "../../Base/Icons/Icons";
import CustomText from "../../Base/Text/CustomText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
interface IBottomIcon {
  isFocused: boolean;
  routeName: string;
  index: number;
}

/**
 * A clickable icon that displays a given route name and its corresponding icon. The icon name is determined by the `routeName` prop and a map of route names to icon names. If the icon is currently selected, the container will have a black background color, and the route name will be displayed below the icon. If the icon is not selected, the container will have a transparent background color and the route name will not be displayed.
 *
 * @param {IBottomIcon} props - The component props.
 * @param {boolean} props.isFocused - A boolean value that indicates whether the icon is currently selected.
 * @param {string} props.routeName - A string that represents the name of the route associated with the icon.
 * @param {number} props.index - An index that can be used to differentiate between multiple icons.
 */

const BottomIcon = (props: IBottomIcon) => {
  const insets = useSafeAreaInsets();
  const routeMap = {
    Home: "home",
    Search: "search",
  };

  const routeName = (name: string) => {
    const defaultIconName = "home";
    const iconName = routeMap[name];
    return iconName || defaultIconName;
  };

  return (
    <View style={styles.iconContainer}>
      <View
        style={[
          styles.container,
          { paddingBottom: insets.bottom, paddingTop: insets.top },
        ]}
      >
        <IconButton
          icon={routeName(props.routeName)}
          size={"big"}
          iconColor={colors.black}
        />
        <CustomText
          preset="formLabel"
          style={[styles.routeNameStyle, { color: colors.black }]}
        >
          {props.routeName}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: "center",
  },
  routeNameStyle: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "500",
    overflow: "hidden",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

export default BottomIcon;
