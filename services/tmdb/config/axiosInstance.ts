import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIES_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIES_API_KEY}`,
  },
});

export { axiosInstance as axios };
