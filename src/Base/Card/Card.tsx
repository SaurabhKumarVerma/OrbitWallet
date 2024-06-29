/** 
    This is a reusable card component. It can display different types of cards based on the type prop, which can be ECARDTYPE.COMMUNITY, ECARDTYPE.HASHTAG, or ECARDTYPE.FULL_WIDTH.

The component accepts the following props:

* @param {imageSource}: The source of the image to be displayed in the card.
* @param {type}: The type of the card, which determines its layout and content.
* @param {countryName}: The name of the country for community cards.
* @param {totalPostTagNumber}: The number of posts per day for community cards.
* @param {message}: A message to be displayed below the country name for community cards.
* @param {hashtagText}: The text of the hashtag for hashtag and full-width cards.

**/

import {
  StyleSheet,
  View,
  useWindowDimensions,
  ImageURISource,
} from "react-native";
import React from "react";
import { AutoImage } from "../AutoImage/AutoImage";
import { colors } from "../../Theme/colors";
import CustomText from "../Text/CustomText";
import { ECARDTYPE } from "../../types/types";
import { formatNumber } from "../../Utils/suffix";

interface ICardSourceProps {
  imageSource: ImageURISource;
}

type ICardTypesProps =
  | {
      type: ECARDTYPE.COMMUNITY;
      countryName: string;
      totalPostTagNumber: number;
      message: string;
    }
  | {
      type: ECARDTYPE.HASHTAG;
      hashtagText: string;
      totalViews: number;
    }
  | {
      type: ECARDTYPE.FULL_WIDTH;
      hashtagText: string;
    };

type ICardProps = ICardSourceProps & ICardTypesProps;

const Card = (props: ICardProps) => {
  const { width } = useWindowDimensions();

  const fullWidth =
    props.type === ECARDTYPE.FULL_WIDTH ? width - 30 : width - 200;
  const imageHeight = props.type === ECARDTYPE.FULL_WIDTH ? 190 : 150;

  const imageFooter = () => {
    if (props.type === ECARDTYPE.COMMUNITY) {
      return (
        <View style={styles.hashtag}>
          <CustomText
            text={props.message}
            preset="medium"
            style={styles.messageTextStyle}
          />
          <CustomText
            text={props.countryName?.toUpperCase()}
            preset="bold"
            style={styles.countryTextStyle}
          />
        </View>
      );
    } else {
      return (
        <View style={[styles.hashtag, { flexDirection: "row" }]}>
          <CustomText
            text={`# ${props.hashtagText}`}
            preset="formLabel"
            style={styles.hashtagTextStyle}
            numberOfLines={1}
          />
          {props.type === ECARDTYPE.HASHTAG ? (
            <View
              style={{
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <CustomText
                text={formatNumber(props.totalViews)}
                preset="smallBold"
                style={[
                  styles.hashtagTextStyle,
                  { marginLeft: 12, marginTop: 6 },
                ]}
              />
            </View>
          ) : null}
        </View>
      );
    }
  };

  return (
    <View style={[styles.container, { width: fullWidth }]}>
      <View style={styles.imageContainer}>
        <AutoImage
          source={props.imageSource}
          style={{ width: fullWidth, height: imageHeight }}
          resizeMode="stretch"
        />

        {props.type === ECARDTYPE.COMMUNITY && props.totalPostTagNumber ? (
          <View style={styles.postContainer}>
            <CustomText
              preset="smallBold"
              style={{ color: colors.white, flexShrink: 1 }}
            >
              {`${props.totalPostTagNumber}posts/day`}
            </CustomText>
          </View>
        ) : null}

        <View>{imageFooter()}</View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    paddingHorizontal: 16,
  },
  hashtag: {
    position: "absolute",
    marginLeft: 4,
    bottom: 8,
    // justifyContent: "flex-end",
  },
  postContainer: {
    position: "absolute",
    marginTop: 8,
    alignSelf: "flex-end",
    paddingRight: 8,
  },
  messageTextStyle: {
    color: colors.white,
    flexShrink: 1,
    letterSpacing: 1,
  },
  countryTextStyle: {
    color: colors.white,
    flexShrink: 1,
    letterSpacing: 3,
  },
  hashtagTextStyle: {
    color: colors.white,
    flexShrink: 1,
  },
});
