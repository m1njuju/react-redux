import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// 액션 타입
const GET_NEWS_START = "newsapiSaga/GET_NEWS_START";
const GET_NEWS = "newsapiSaga/GET_NEWS";
const GET_NEWS_SUCCESS = "newsapiSaga/GET_NEWS_SUCCESS";
const GET_NEWS_FAILURE = "newsapiSage/GET_NEWS_FAILURE";

// 액션함수
export const getNewsStart = () => ({ type: GET_NEWS_START });

// 제너럴 함수 (사가에서 실행될 함수)
function* getNewsSaga() {
  // 로딩시작
  yield put({ type: GET_NEWS });
  // try catch를 통해서 axios에서 값을 가져옴
  try {
    // saga에서 api를 사용할 때는 call을 사용해서 함수를 실행한다 (async-await 대신)
    // call( 실행할 함수, 함수의 인자값(옵션))
    // api폴더와 파일 따로 만들어서 export해서 사용 api.newsget()
    const response = yield call(() =>
      axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c4c09dd0ba45435cb60e93cd10259c2a"
      )
    );
    console.log(response.data.articles);
    yield put({
      type: GET_NEWS_SUCCESS,
      payload: response.data.articles,
    });
  } catch (e) {
    yield put({
      type: GET_NEWS_FAILURE,
      payload: e,
    });
  }
  // 성공: GET_NEWS_SUCCESS로 값 전달
  // 실패: GET_NEWS_FAILURE로 오류 전달
}

// 작성한 제너럴 함수를 묶어주는 사가
export function* newsapiSaga() {
  yield takeLatest(GET_NEWS_START, getNewsSaga);
}

//초기값
const initalState = {
  loading: {
    GET_NEWS: false,
  },
  news: null,
};

//리듀셔값 작성
const newsapiSagaReducer = (state = initalState, action) => {
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

export default newsapiSagaReducer;
