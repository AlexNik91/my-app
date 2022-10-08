import { newsAPI } from "../../API/APInews";

const SET_NEWS = "newsReducer/SET_NEWS";
const SET_HANDLE_SHOW_MORE = "newsReducer/SET_HANDLE_SHOW_MORE";

let inicialState = {
  news: [],
  showItems: 10,
};

const NewsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.articles,
      };
    case SET_HANDLE_SHOW_MORE:
      return {
        ...state,
        showItems:
          state.showItems >= state.news.length
            ? state.showItems
            : state.showItems + 10,
      };

    default:
      return state;
  }
};

export const setNews = (articles) => ({
  type: SET_NEWS,
  articles,
});
export const handleShowMore = (showItems) => ({
  type: SET_HANDLE_SHOW_MORE,
  showItems,
});

export const getNewsThunkCreator = () => async (dispatch) => {
  let data = await newsAPI.news();

  dispatch(setNews(data));
};

export default NewsReducer;

// const dataArr = Object.keys(data);
