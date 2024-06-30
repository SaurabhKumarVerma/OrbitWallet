/**
 * Reels component
 *
 * This component displays a reel with an image, a heading, social media icons, and a caption.
 * The image takes up the full width and height of the screen minus a constant height.
 * The heading is positioned absolutely at the top center of the screen.
 * The social media icons are positioned absolutely at the top right of the screen.
 * The caption is positioned absolutely at the bottom of the screen.
 *
 * @returns {JSX.Element} The Reels component
 */

import { Platform, StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import { AutoImage } from "../../Base/AutoImage/AutoImage";
import { images } from "../../../assets/images/images";
import CustomText from "../../Base/Text/CustomText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../Theme/colors";
import Social from "./Social";
import { CONSTANT_HEIGHT } from "../../Constant/height";
import { STATUSBAR_HEIGHT, VIEW_HEIGHT } from "../../Utils/statusbarHeight";

interface IReels {
  imageSource: string;
  authorName: string;
}

const Reels = (props: IReels) => {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const topValue = Platform.OS === "ios" ? 0 : 32;
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <AutoImage
          source={{ uri: props.imageSource }}
          style={{
            width: width,
            height: height - CONSTANT_HEIGHT + Math.round(STATUSBAR_HEIGHT),
          }}
        />
        <View style={[styles.textHeading, {}]}>
          <CustomText
            text={"For You"}
            preset="light"
            style={{
              color: colors.whiteSmoke,
              paddingTop: insets.top,
              top: topValue,
            }}
          />
        </View>

        <View style={styles.socialContainer}>
          <Social />
        </View>
      </View>

      <View style={[styles.bottomTextContainer]}>
        <CustomText
          text={"caption"}
          preset="light"
          style={{ color: colors.white }}
        />
        <CustomText
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
          preset="light"
          style={{ color: colors.white, flexShrink: 1 }}
          size="xs"
        />
        <CustomText
          text={`#unioon #bala @${props?.authorName}`}
          preset="light"
          style={{ color: colors.white, flexShrink: 1 }}
          size="xs"
        />
      </View>
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  textHeading: {
    position: "absolute",
    alignSelf: "center",
  },
  socialContainer: {
    position: "absolute",
    alignSelf: "flex-end",
    zIndex: 99,
    flex: 1,
    right: "4%",
    top: VIEW_HEIGHT,
  },
  bottomTextContainer: {
    position: "absolute",
    alignSelf: "flex-end",
    flex: 1,
    width: "90%",
    marginLeft: 20,
    paddingBottom: 10,
  },
});
