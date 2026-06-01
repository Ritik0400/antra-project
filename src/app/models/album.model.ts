export interface Album {
  collectionId: number;
  collectionName: string;
  artworkUrl100: string;
  artistName: string;
}

export interface ItunesSearchResponse {
  resultCount: number;
  results: Album[];
}
