import { StyleSheet, View } from "react-native";
import React from "react";
import Card from "../../Base/Card/Card";
import { images } from "../../../assets/images/images";
import { ECARDTYPE } from "../../types/types";

const TopSearch = () => {
  return (
    <View style={{}}>
      <Card
        imageSource={images.test}
        hashtagText="Top search of the day"
        type={ECARDTYPE.FULL_WIDTH}
      />
    </View>
  );
};

export default TopSearch;

const styles = StyleSheet.create({});
