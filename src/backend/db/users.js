import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullname: "Adarsh Balika",
    username: "adarshbalika",
    email: "adarshBalika@gmail.com",
    password: "adarshBalika123",
    profileImage: "https://i.imgur.com/hRwELzq.png",
    bio: "Pop Art Icon",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    fullname: "Jenny Felicitas",
    username: "JoyfulJenny",
    email: "jenny123@gmail.com",
    password: "jenny123@",
    profileImage: "https://i.imgur.com/3koLVx8.png",
    bio: "Contemporary Artist",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
