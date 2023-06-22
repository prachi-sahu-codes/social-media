// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "jKs3o9dKl5",
    fullname: "David Wilson",
    username: "dwilson77",
    email: "dwilson77@gmail.com",
    password: "willll456@",
    profileImage: "https://i.imgur.com/RUgHMHR.png",
    profileBgImage: "",
    bio: "Pop Art Icon",
    createdAt: "2023-05-02T10:55:01+18:30",
    updatedAt: formatDate(),
    websiteLink: "https://furn.netlify.app/",
    bookmarks: [],
    followers: [
      {
        _id: "zXc8bN9mL0",
        fullname: "Noah Thompson",
        username: "Noah_Thompson",
        profileImage: "https://i.imgur.com/Rytba1u.png",
      },
    ],
    following: [
      {
        _id: "sLdk9e02s7",
        fullname: "Jenny Felicitas",
        username: "JoyfulJenny",
        profileImage: "https://i.imgur.com/3koLVx8.png",
      },
    ],
  },
  {
    _id: "sLdk9e02s7",
    fullname: "Jenny Felicitas",
    username: "JoyfulJenny",
    email: "jenny123@gmail.com",
    password: "jenny123@",
    profileImage: "https://i.imgur.com/3koLVx8.png",
    profileBgImage: "",
    bio: "Contemporary Artist",
    createdAt: "2022-09-15T08:30:45+05:00",
    updatedAt: formatDate(),
    websiteLink: "",
    bookmarks: [],
    followers: [
      {
        _id: "jKs3o9dKl5",
        fullname: "David Wilson",
        username: "dwilson77",
        profileImage: "https://i.imgur.com/RUgHMHR.png",
      },
      {
        _id: "gYh4lOeD2",
        fullname: "Amelia Carter",
        username: "carterAmii",
        profileImage: "https://i.imgur.com/hRwELzq.png",
      },
      {
        _id: "pQs8fKd39e",
        fullname: "Michael Davis",
        username: "mikedavis456",
        profileImage: "https://i.imgur.com/usR4cPn.png",
      },
    ],
    following: [
      {
        _id: "pQs8fKd39e",
        fullname: "Michael Davis",
        username: "mikedavis456",
        profileImage: "https://i.imgur.com/usR4cPn.png",
      },
    ],
  },
  {
    _id: "pQs8fKd39e",
    fullname: "Michael Davis",
    username: "mikedavis456",
    email: "davis4@gmail.com",
    password: "mikedavis4@",
    profileImage: "https://i.imgur.com/usR4cPn.png",
    profileBgImage: "",
    bio: "Impressionist Painter",
    createdAt: "2022-12-25T18:45:10-03:00",
    updatedAt: formatDate(),
    websiteLink: "",
    bookmarks: [],
    followers: [
      {
        _id: "sLdk9e02s7",
        fullname: "Jenny Felicitas",
        username: "JoyfulJenny",
        profileImage: "https://i.imgur.com/3koLVx8.png",
      },
    ],
    following: [
      {
        _id: "sLdk9e02s7",
        fullname: "Jenny Felicitas",
        username: "JoyfulJenny",
        profileImage: "https://i.imgur.com/3koLVx8.png",
      },
      {
        _id: "dOp9wE8sK4",
        fullname: "Georgia O'Keeffe",
        username: "georgiaokeeffe",
        profileImage: "https://i.imgur.com/RcLQNaA.png",
      },
    ],
  },
  {
    _id: "dOp9wE8sK4",
    fullname: "Georgia O'Keeffe",
    username: "georgiaokeeffe",
    email: "georgia@gmail.com",
    password: "georgia6@",
    profileImage: "https://i.imgur.com/RcLQNaA.png",
    profileBgImage: "",
    bio: "Modernist Painter",
    createdAt: "2023-05-10T16:35:55+10:00 ",
    updatedAt: formatDate(),
    websiteLink: "https://furn.netlify.app/",
    bookmarks: [],
    followers: [
      {
        _id: "pQs8fKd39e",
        fullname: "Michael Davis",
        username: "mikedavis456",
        profileImage: "https://i.imgur.com/usR4cPn.png",
      },
    ],
    following: [],
  },
  {
    _id: "sJd4kE3oP9",
    fullname: "William Hughes",
    username: "HugesSiliam",
    email: "hugesSiliam@gmail.com",
    password: "Siliam3@",
    profileImage: "https://i.imgur.com/dGLRy0M.png",
    profileBgImage: "",
    bio: "Cubist Painter, Sculptor",
    createdAt: "2023-05-08T09:10:20+08:00",
    updatedAt: formatDate(),
    websiteLink: "",
    bookmarks: [],
    followers: [
      {
        _id: "gYh4lOeD2",
        fullname: "Amelia Carter",
        username: "carterAmii",
        profileImage: "https://i.imgur.com/hRwELzq.png",
      },
    ],
    following: [
      {
        _id: "gYh4lOeD2",
        fullname: "Amelia Carter",
        username: "carterAmii",
        profileImage: "https://i.imgur.com/hRwELzq.png",
      },
    ],
  },
  {
    _id: "gYh4lOeD2",
    fullname: "Amelia Carter",
    username: "carterAmii",
    email: "carterAmii@gmail.com",
    password: "carterAmii56@",
    profileImage: "https://i.imgur.com/hRwELzq.png",
    profileBgImage: "",
    bio: "Surrealist Painter",
    createdAt: "2023-05-03T18:20:10+05:30",
    updatedAt: formatDate(),
    websiteLink: "https://furn.netlify.app/",
    bookmarks: [],
    followers: [
      {
        _id: "sJd4kE3oP9",
        fullname: "William Hughes",
        username: "HugesSiliam",
        profileImage: "https://i.imgur.com/dGLRy0M.png",
      },
    ],
    following: [
      {
        _id: "sJd4kE3oP9",
        fullname: "William Hughes",
        username: "HugesSiliam",
        profileImage: "https://i.imgur.com/dGLRy0M.png",
      },
      {
        _id: "sLdk9e02s7",
        fullname: "Jenny Felicitas",
        username: "JoyfulJenny",
        profileImage: "https://i.imgur.com/3koLVx8.png",
      },
    ],
  },
  {
    _id: "aSd7eL9qP0",
    fullname: "Liam Parker",
    username: "_liam_parker_",
    email: "liam123@gmail.com",
    password: "liam123@",
    profileImage: "https://i.imgur.com/07fk2I9.png",
    profileBgImage: "",
    bio: "Post-Impressionist Painter",
    createdAt: "2023-05-01T10:55:01+18:30",
    updatedAt: formatDate(),
    websiteLink: "",
    bookmarks: [],
    followers: [
      {
        _id: "zXc8bN9mL0",
        fullname: "Noah Thompson",
        username: "Noah_Thompson",
        profileImage: "https://i.imgur.com/Rytba1u.png",
      },
    ],
    following: [
      {
        _id: "zXc8bN9mL0",
        fullname: "Noah Thompson",
        username: "Noah_Thompson",
        profileImage: "https://i.imgur.com/Rytba1u.png",
      },
    ],
  },
  {
    _id: "zXc8bN9mL0",
    fullname: "Noah Thompson",
    username: "Noah_Thompson",
    email: "noah77@gmail.com",
    password: "noah456@",
    profileImage: "https://i.imgur.com/Rytba1u.png",
    profileBgImage: "",
    bio: "Renaissance Polymath",
    createdAt: "2023-05-05T12:45:30+02:00",
    updatedAt: formatDate(),
    websiteLink: "https://furn.netlify.app/",
    bookmarks: [],
    followers: [
      {
        _id: "aSd7eL9qP0",
        fullname: "Liam Parker",
        username: "_liam_parker_",
        profileImage: "https://i.imgur.com/07fk2I9.png",
      },
    ],
    following: [
      {
        _id: "aSd7eL9qP0",
        fullname: "Liam Parker",
        username: "_liam_parker_",
        profileImage: "https://i.imgur.com/07fk2I9.png",
      },
      {
        _id: "jKs3o9dKl5",
        fullname: "David Wilson",
        username: "dwilson77",
        profileImage: "https://i.imgur.com/RUgHMHR.png",
      },
    ],
  },
];
