import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const posts = [
  {
    _id: "skdjeo903_kds3_ksd8s_ksd83",
    content: "Capturing the beauty of nature.",
    image: "art1.jpg",
    likes: {
      likeCount: 82,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksjd93_ksjd29_ksdjiw9",
        username: "ArtEnthusiast",
        text: "Amazing artwork!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "Artist1",
    createdAt: "2023-06-01T10:55:01+18:30",
    updatedAt: formatDate(),
  },

  {
    _id: "kdiw8s3_ksd9s_ksd38_ksd2",
    content: "Exploring abstract expressions.",
    image: "art2.jpg",
    likes: {
      likeCount: 65,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "ArtisticSoul",
    createdAt: "2023-06-03T18:20:10+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "ksd2k3_ksdo29_2ksd_ksdj2",
    content: "A masterpiece in progress.",
    image: "art3.jpg",
    likes: {
      likeCount: 112,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "kjnd3832_jw93j_k3js",
        username: "ArtAdmirer",
        text: "Incredible work!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "CreativeArtist",
    createdAt: "2023-06-05T12:45:30+02:00",
    updatedAt: formatDate(),
  },

  {
    _id: "ksdoi30_2kd3i9_kd3i",
    content: "Finding inspiration in nature's colors.",
    image: "art4.jpg",
    likes: {
      likeCount: 48,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "ArtExplorer",
    createdAt: "2023-06-08T09:10:20+08:00",
    updatedAt: formatDate(),
  },

  {
    _id: "sod9s_23ksd8_ksdjw",
    content: "Expressing emotions through sculpture.",
    image: "art5.jpg",
    likes: {
      likeCount: 95,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "kdoe9d3_ksd83k_ksd32",
        username: "ArtLover123",
        text: "Great job!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "CreativeMind",
    createdAt: "2023-06-10T16:35:55+10:00",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Enjoying the art festival!",
    image: "art6.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
