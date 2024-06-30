export interface ISectionData {
  title: string;
  data: ITrendingHashtagData[] | ITopCommunityData[] | ITopNomadsData[];
}

export interface ITrendingHashtagData {
  key: string;
  text: string;
  uri: string;
  hashtagText: string;
  totalViews: number;
}

export interface ITopCommunityData {
  key: string;
  text: string;
  uri: string;
  countryName: string;
  totalPostTagNumber: number;
  message: string;
}

export interface ITopNomadsData {
  key: string;
  text: string;
  uri: string;
  nomadsName: string;
  followerCount: number;
}

export interface IReelsData {
  id: string;
  author: string;
  url: string;
  download_url: string
}
