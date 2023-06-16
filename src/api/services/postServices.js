import axios from "axios";

import { POSTS_URL } from "../apiUrls";

export const postsService = () => axios.get(POSTS_URL);
