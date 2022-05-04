type Url = string;
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

type TProductId = string;

type TProductAttributes = {
  description: string;
  shape: string;
  hardiness: string;
  taste: string;
};

type TProduct = {
  id: TProductId;
  name: string;
  sku: string;
  price: number;
  image: Url;
  attributes: TProductAttributes;
};

type TAPIAVODetailResponse = TProduct;

type TAPIAvoResponse = {
  lenght: number;
  data: TProduct[];
  error?: string;
};
type TVideoProp = {
  url: string;
  file: Object;
};
/* anime */
/* type TAnimeId = string;

type videoHeaders = Object;
type TCapitule = {
  id: anime_id;
  title: string;
  number: number;
  video: string;
  video_headers: videoHeaders;
};

type imagesObject = {
  cover: string;
  banner: string;
};
type genres = Array;
type TAnime = {
  id: TAnimeId;
  title: string;
  episodes: string;
  score: number;
  categories: genres;
  description: string;
  type: string;
  images: imagesObject;
  status: any;
};
type TAnimeList = {
  page: number;
  data: TAnime[];
  length: number;
};
type TCapituleList = {
  page: number;
  data: TCapitule[];
  length: number;
};
 */
