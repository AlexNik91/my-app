import * as axios from "axios";

const instance = axios.create({
  baseURL:
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2022-09-28&" +
    "sortBy=popularity&" +
    "apiKey=3d3ea6f2e6da4ff3818fdbb52486b6a5",
});

export const newsAPI = {
  news() {
    return instance
      .get()

      .then((response) => response.data.articles);
  },
};
