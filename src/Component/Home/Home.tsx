import {
  FlatList,
  View,
  useWindowDimensions,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import Reels from "./Reels";
import { CONSTANT_HEIGHT } from "../../Constant/height";
import { STATUSBAR_HEIGHT } from "../../Utils/statusbarHeight";
import { IReelsData } from "../../types/data.interface";
import axios from "axios";
import CustomText from "../../Base/Text/CustomText";

const MAX_TOTAL_LIST: number = 90;
const Home = () => {
  const { height } = useWindowDimensions();
  const [reelsList, setReelsList] = useState<IReelsData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const itemHeight: number =
    height - CONSTANT_HEIGHT + Math.round(STATUSBAR_HEIGHT);

  useEffect(() => {
    getListVideo();
  }, [page]);

  const getListVideo = () => {
    setLoading(true);
    axios
      .get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      .then((response) => {
        if (reelsList.length < MAX_TOTAL_LIST && !dataLoaded) {
          setReelsList([...reelsList, ...response.data]);
          setLoadingMore(false);
        } else {
          setDataLoaded(true);
          setLoadingMore(false);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setLoadingMore(false);
      });
  };

  const renderItem = (item: IReelsData) => {
    return (
      <View>
        <Reels
          authorName={item?.author as string}
          imageSource={item.download_url}
        />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
        }}
      >
        {loadingMore ? (
          <ActivityIndicator size={"small"} color={"red"} />
        ) : null}

        {dataLoaded ? (
          <CustomText
            text={"All reels Loaded"}
            style={{ textAlign: "center" }}
            size="xxs"
          />
        ) : null}
      </View>
    );
  };

  const fetchMoreData = () => {
    if (reelsList?.length <= MAX_TOTAL_LIST && !dataLoaded) {
      setPage((prev) => prev + 1);
      setLoadingMore(true);
    }
  };

  return (
    <View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={"green"} />
        </View>
      ) : null}
      <FlatList
        data={reelsList}
        style={{
          height: itemHeight,
        }}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item, index) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        decelerationRate={"fast"}
        getItemLayout={(_, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMoreData}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
  },
});
