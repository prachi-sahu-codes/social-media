import axios from "axios";

import { SIGNUP_URL, LOGIN_URL } from "../apiUrls";

export const loginService = (input) => axios.post(LOGIN_URL, input);

export const signupService = (input) => axios.post(SIGNUP_URL, input);
