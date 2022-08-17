import { createStore } from "redux";

// element 변수 정의
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// action 이름 정의
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성함수 작성
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 프로젝트에서 사용할 초기값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// reducer 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// store 생성
const store = createStore(reducer);

// render 함수 생성
const render = () => {
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.innerText = state.counter;
};

render();

// subscribe
store.subscribe(render);

// action 발생시키기
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(12));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
