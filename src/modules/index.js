// 작성한 리덕스 모듈을 하나로 묶어서 사용
// redux 모듈에서 combineReducers를 가져옴
// redux와 react-redux 두 개 설치 후 사용
import { combineReducers } from "redux";

// 작성한 리덕스 모듈을 가져옴
import counter from "./counter";
import todos from "./todos";
import counterAsync from "./counterAsync";

const rootReducer = combineReducers({
  counter,
  counterAsync,
  todos,
});

export default rootReducer;
