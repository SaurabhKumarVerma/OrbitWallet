/**
 * Search component that displays a list of search results categorized by sections.
 *
 * The component uses a SectionList to render a list of sections, each containing a header with a title and a FlatList of items.
 * The items are rendered using a Card component for communities and hashtags, and a NomadsCard component for nomads.
 *
 * The search data is provided by the searchData array, which contains objects with a title and an array of data items.
 *
 * The component also includes a SearchBarHeader component as the list header and different top search such as Top Community or Top Nomads and Top Trending Hashtag.
 */
import { FlatList, SectionList, StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "../../Base/Text/CustomText";
import SearchBarHeader from "./SearchBarHeader";
import { searchData } from "./searchData";
import { colors } from "../../Theme/colors";
import Card from "../../Base/Card/Card";
import {
  ITopCommunityData,
  ITopNomadsData,
  ITrendingHashtagData,
} from "../../types/data.interface";
import { ECARDTYPE } from "../../types/types";
import NomadsCard from "../../Base/NomadsCard/NomadsCard";

const Search = () => {
  const renderItem = (
    item: ITopCommunityData | ITopNomadsData | ITrendingHashtagData,
    title: string
  ) => {
    if (title === ECARDTYPE.COMMUNITY) {
      return (
        <Card
          imageSource={{ uri: item?.uri }}
          type={ECARDTYPE.COMMUNITY}
          countryName={"countryName" in item ? item?.countryName : ''}
          message={"message" in item ? item?.message : ''}
          totalPostTagNumber={"totalPostTagNumber" in item ? item?.totalPostTagNumber : 0 as number}
        />
      );
    } else if (title === ECARDTYPE.HASHTAG) {
      return (
        <Card
          imageSource={{ uri: item.uri }}
          type={ECARDTYPE.HASHTAG}
          hashtagText={"hashtagText" in item ? item?.hashtagText : ''}
          totalViews={"totalViews" in item ? item?.totalViews : 0 as number}
        />
      );
    } else if (title === ECARDTYPE.NOMADS) {
      return (
        <View style={{ marginHorizontal: 10 }}>
          <NomadsCard
            imageSource={{ uri: item.uri }}
            nomadsFollowers={"followerCount" in item ? item?.followerCount : 0 as number}
            nomadsName={"nomadsName" in item ? item?.nomadsName : 'anonymous' as string}
          />
        </View>
      );
    }
  };

  const header = () => {
    return (
      <View>
        <SearchBarHeader />
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <SectionList
        contentContainerStyle={{ paddingBottom: 90 }}
        ListHeaderComponent={header}
        sections={searchData}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section }) => (
          <>
            <View style={styles.subHeadingContainer}>
              <CustomText
                preset="heading"
                style={{ color: colors.aquamarineDark }}
              >
                {section?.title}
              </CustomText>
              <CustomText
                preset="light"
                style={{ color: colors.aquamarineDark, marginRight: 10 }}
              >
                See all
              </CustomText>
            </View>

            <FlatList
              horizontal
              data={section.data}
              renderItem={({ item }) => renderItem(item, section.title)}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ marginLeft: 10 }}
            />
          </>
        )}
        renderItem={({ item, section }) => {
          return null;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  subHeadingContainer: {
    paddingVertical: 18,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
