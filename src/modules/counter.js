// 리덕스 사용을 위한 초기 상태와 리듀서 함수 만들기

// 액션 : 액션 이름 = "모듈이름/액션이름" 으로 구성
// 대문자로 작성된 변수 이름의 특징 : 변하지 않는 값일 때 = 상수 ,ex) 3.14.... = PI
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const SET_DIFF = "counter/SET_DIFF";
const INCREASE_DIFF = "counter/INCREASE_DIFF";

// 액션 함수 : 액션에 들어갈 값이 바뀔 때 쉽게 사용하기 위함
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 값을 가져오는 함수는 매개변수 값을 넣어서 작성: (diff) => ({ type: SET_DIFF, payload: diff });
export const setDiff = (diff) => ({ type: SET_DIFF, payload: diff });
export const increDiff = () => ({ type: INCREASE_DIFF });

// 초기 상태
const initalState = {
  number: 0,
  diff: 0,
};

// 리듀서함수, 상태값을 변화시키는 함수
// 이때 state는 기본값을 넣어서 사용
function counter(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      };
    case SET_DIFF:
      return {
        ...state,
        diff: parseInt(action.payload),
      };
    case INCREASE_DIFF:
      return {
        ...state,
        number: state.number + state.diff,
      };
    default:
      return state;
  }
}

export default counter;
