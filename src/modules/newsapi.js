import axios from "axios";

// 액션
const GET_NEWS = "newsapi/GET_NEWS";
const GET_NEWS_SUCCESS = "newsapi/GET_NEWS_SUCCESS";
const GET_NEWS_FAILURE = "newsapi/GET_NEWS_FAILURE";

// Thunk 미들웨어를 통해 실행
// 액션 함수 > axios로 받아오기 위해 비동기로 작성
export const getNews = () => async (dispatch) => {
  // 액션타입을 객체로 바로 보내줌
  dispatch({ type: GET_NEWS });
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c4c09dd0ba45435cb60e93cd10259c2a"
    );
    console.log(response.data.articles);
    dispatch({
      type: GET_NEWS_SUCCESS,
      payload: response.data.articles,
    }); // 요청성공
  } catch (e) {
    dispatch({
      type: GET_NEWS_FAILURE,
      payload: e,
      error: true,
    }); // 에러발생 알림
    throw e; // 에러를 넘겨줌
  }
};

// 초기 state 선언
const initalState = {
  loading: {
    GET_NEWS: false,
  },
  news: null,
};

// 리듀서 함수 작성
const newsapi = (state = initalState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, loading: { GET_NEWS: true } };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: { GET_NEWS: false },
        news: action.payload,
      };
    case GET_NEWS_FAILURE:
      return {
        ...state,
        loading: { GET_NEWS: false },
      };
    default:
      return state;
  }
};

export default newsapi;
