// 타이머 함수를 이용해서 1초 늦게 증가하는 카운터 모듈
// Thunk 생성함수 만들어서 사용
// 미들웨어는 모든 dispatch가 실행되기 전에 호출된다 ex)logger

// Thunk의 경우 실행되었을 때
// 함수로 감싸져 있다면 미들웨어의 내용을 실행하고
// 함수로 감싸져 있지 않다면 바로 dispatch를 실행한다

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 함수 : 액션에 들어갈 값이 바뀔 때 쉽게 사용하기 위함
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 비동기 함수 > Thunk생성함수: 함수를 한번 감싸서 내보내줌
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

// 초기 상태
const initalState = {
  number: 0,
};

// 리듀서함수, 상태값을 변화시키는 함수
// 이때 state는 기본값을 넣어서 사용
function counterAsync(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return { number: state.number + 1 };
    case DECREASE:
      return { number: state.number - 1 };
    default:
      return state;
  }
}

export default counterAsync;
