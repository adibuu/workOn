import axios from "axios";

import { API_URL } from "@/data";

const fetcher = (endpoint) =>
  axios.get(`${API_URL}${endpoint}`).then(({ data }) => data);

export default fetcher;
