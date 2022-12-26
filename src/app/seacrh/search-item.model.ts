type ImageInfoType = {
  "url": string,
  "width": number,
  "height": number
}

export type SearchItem = {
  "kind": "youtube#video",
  "etag": string,
  "id": string,
  "snippet": {
    "publishedAt": string,
    "channelId": string,
    "title": string
    "description": string,
    "thumbnails": {
      "default": ImageInfoType,
      "medium": ImageInfoType,
      "high": ImageInfoType,
      "standard": ImageInfoType,
      "maxres": ImageInfoType
    },
    "channelTitle": string,
    "tags": string[],
    "categoryId": string,
    "liveBroadcastContent": "none",
    "defaultLanguage"?: string,
    "localized": {
      "title": string,
      "description": string,
    },
    "defaultAudioLanguage": string
  },
  "statistics": {
    "viewCount": string,
    "likeCount": string,
    "dislikeCount": string,
    "favoriteCount": string,
    "commentCount": string
  }
};
