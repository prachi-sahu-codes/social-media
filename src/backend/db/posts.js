import { formatDate } from "../utils/authUtils";

export const posts = [
  {
    _id: "skdjeo903_kds3_ksd8s_ksd83",
    content: "Capturing the beauty of nature.",
    image: "https://i.imgur.com/07fk2I9.png",
    likes: {
      likeCount: 82,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "kdiw8s3_ksd9s_ksd38_ksd2",
        username: "fridakahlo",
        image: "https://i.imgur.com/hRwELzq.png",
        text: "Amazing artwork!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    fullName: "Vincent van Gogh",
    username: "vangogh",
    occupation: "Post-Impressionist Painter",
    description: "Vibrant colors, emotional brushstrokes.",
    createdAt: "2023-06-01T10:55:01+18:30",
    updatedAt: formatDate(),
  },

  {
    _id: "kdiw8s3_ksd9s_ksd38_ksd2",
    content: "Exploring abstract expressions.",
    image: "https://i.imgur.com/hRwELzq.png",
    likes: {
      likeCount: 65,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Frida Kahlo",
    username: "fridakahlo",
    occupation: "Surrealist Painter",
    description: "Bold self-portraits, symbolic imagery.",
    createdAt: "2023-06-03T18:20:10+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "ksd2k3_ksdo29_2ksd_ksdj2",
    content: "A masterpiece in progress.",
    image: "https://i.imgur.com/YmpQzMV.png",
    likes: {
      likeCount: 112,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "ksdoi30_2kd3i9_kd3i",
        image: "https://i.imgur.com/dGLRy0M.png",
        username: "picasso",
        text: "Incredible work!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    fullName: "Leonardo da Vinci",
    username: "leonardodavinci",
    occupation: "Renaissance Polymath",
    description: "Masterpieces in art, science.",
    createdAt: "2023-06-05T12:45:30+02:00",
    updatedAt: formatDate(),
  },

  {
    _id: "ksdoi30_2kd3i9_kd3i",
    content: "Finding inspiration in nature's colors.",
    image: "https://i.imgur.com/dGLRy0M.png",
    likes: {
      likeCount: 48,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Pablo Picasso",
    username: "picasso",
    occupation: "Cubist Painter, Sculptor",
    description: "Abstracted forms, shattered perspectives.",
    createdAt: "2023-06-08T09:10:20+08:00",
    updatedAt: formatDate(),
  },

  {
    _id: "sod9s_23ksd8_ksdjw",
    content: "Expressing emotions through sculpture.",
    image: "https://i.imgur.com/RcLQNaA.png",
    likes: {
      likeCount: 95,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "kdoe9d3_ksd83k_ksd32",
        username: "claudemonet",
        image: "https://i.imgur.com/usR4cPn.png",
        text: "Great job!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    fullName: "Georgia O'Keeffe",
    username: "georgiaokeeffe",
    occupation: "Modernist Painter",
    description: "Enlarged flowers, desert landscapes.",
    createdAt: "2023-06-10T16:35:55+10:00",
    updatedAt: formatDate(),
  },

  {
    _id: "kdoe9d3_ksd83k_ksd32",
    content: "Enjoying the art festival!",
    image: "https://i.imgur.com/usR4cPn.png",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    fullName: "Claude Monet",
    username: "claudemonet",
    occupation: "Impressionist Painter",
    description: "Light, color, fleeting moments.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
