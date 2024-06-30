/**
 * Social component
 *
 * This component renders a list of social media icons using FlatList.
 * It imports social data from socialData.js and uses IconButton component to display each icon.
 *
 * @returns {JSX.Element} A View component containing a FlatList of social media icons
 */

import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { socialData } from "./socialData";
import IconButton from "../../Base/Icons/Icons";
import { colors } from "../../Theme/colors";

const Social = () => {
  const renderItem = ({ item }: any) => {
    return (
      <View style={{ paddingVertical: 6 }}>
        <IconButton
          icon={item?.iconName}
          size="big"
          iconColor={colors.whiteSmoke}
          iconFamily={"FontAwesome5"}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={socialData}
        renderItem={renderItem}
        keyExtractor={(item, index) => item?.id.toString()}
      />
    </View>
  );
};

export default Social;

const styles = StyleSheet.create({});
