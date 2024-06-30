/**
 * NomadsCard component
 *
 * A reusable card component for displaying nomad information, including an avatar, username, and follower count.
 *
 * Props:
 * @prop {imageSource}: The source of the avatar image
 * @prop {nomadsName}: Show name of Nomads
 * @prop {nomadsFollowers}: Show Total Number of Nomads Followers
 *
 * Uses the useWindowDimensions hook to dynamically set the width of the card based on the screen size.
 */
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import React from "react";
import Avatar from "../Avatar/Avatar";
import CustomText from "../Text/CustomText";
import { formatNumber } from "../../Utils/suffix";

interface INomadsCard {
  imageSource: ImageSourcePropType;
  nomadsName: string | undefined;
  nomadsFollowers: number | undefined;
}

const NomadsCard = (props: INomadsCard) => {
  return (
    <View style={[styles.container]}>
      <Avatar source={props.imageSource} />
      <CustomText
        text={`@${props?.nomadsName}`}
        preset="medium"
        style={styles.userTextStyle}
      />
      <CustomText
        text={`${formatNumber(props?.nomadsFollowers)} followers`}
        size="xxs"
        style={{ marginTop: 2 }}
      />
    </View>
  );
};

export default NomadsCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  userTextStyle: {
    marginTop: 6,
    flexShrink: 1,
  },
});
