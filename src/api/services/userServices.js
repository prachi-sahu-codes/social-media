import axios from "axios";

import { USERS_URL } from "../apiUrls";

export const usersService = () => axios.get(USERS_URL);
