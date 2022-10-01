import { newsAPI } from "../../API/APInews";

const SET_NEWS = "newsReducer/SET_NEWS";

let inicialState = {
  news: [],
};

const NewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.articles,
      };

    default:
      return state;
  }
};

export const setNews = (articles) => ({
  type: SET_NEWS,
  articles,
});

export const getNewsThunkCreator = () => async (dispatch) => {
  let data = await newsAPI.news();

  dispatch(setNews(data));
};

export default NewsReducer;

// const dataArr = Object.keys(data);
