/**
 * Avatar component
 *
 * A reusable component to display an avatar image.
 * It wraps the AutoImage component from react-native-fast-image and provides a default style for the image.
 *
 * Props:
 * @param {source}: The image source to display (FastImageProps)
 * @param {avatarStyle}: Optional custom style for the image (ImageStyle)
 */

import { StyleSheet, View } from "react-native";
import React from "react";
import { AutoImage } from "../AutoImage/AutoImage";
import { FastImageProps, ImageStyle } from "react-native-fast-image";

interface IAvatar {
  source: FastImageProps;
  avatarStyle?: ImageStyle;
}

const Avatar = (props: IAvatar) => {
  return (
    <View>
      <AutoImage
        source={props.source}
        style={props.avatarStyle ? props.avatarStyle : styles.imageStyle}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  imageStyle: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
});
