import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../../Base/Text/CustomText";
import { colors } from "../../Theme/colors";
import Card from "../../Base/Card/Card";
import { images } from "../../../assets/images/images";
import Avatar from "../../Base/Avatar/Avatar";
import NomadsCard from "../../Base/NomadsCard/NomadsCard";
import { ECARDTYPE } from "../../types/types";

const data = [
  {
    id: 1,
    name: "John",
    followers: 10000000,
    img: images.test,
  },
  {
    id: 1,
    name: "John",
    followers: 100000,
    img: require("../../../assets/images/AD.png"),
  },
  {
    id: 1,
    name: "John",
    followers: 10000000,
    img: require("../../../assets/images/AD.png"),
  },
  {
    id: 1,
    name: "John",
    followers: 10000000,
    img: require("../../../assets/images/AD.png"),
  },
  {
    id: 1,
    name: "John",
    followers: 10000000,
    img: require("../../../assets/images/AD.png"),
  },
  {
    id: 1,
    name: "John",
    followers: 10000000,
    img: require("../../../assets/images/AD.png"),
  },
  {
    id: 1,
    name: "John",
    followers: 1000000,
    img: require("../../../assets/images/AD.png"),
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={{ marginHorizontal: 18 }}>
      <NomadsCard
        imageSource={item.img}
        nomadsFollowers={item.followers}
        nomadsName={item.name}
      />
    </View>
  );
};

const Home = () => {
  return (
    <View>
      <CustomText>Home</CustomText>
      {/* <Avatar source={images.test} /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
