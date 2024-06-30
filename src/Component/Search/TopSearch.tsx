import { View } from "react-native";
import React from "react";
import Card from "../../Base/Card/Card";
import { ECARDTYPE } from "../../types/types";

const TopSearch = () => {
  return (
    <View style={{}}>
      <Card
        imageSource={{ uri: "https://picsum.photos/id/144/2448/2448" }}
        hashtagText="Top search of the day"
        type={ECARDTYPE.FULL_WIDTH}
      />
    </View>
  );
};

export default TopSearch;
