import { createAction, handleActions } from "redux-actions";

// 액션 타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성함수 정의
/* old version without redux-actions lib
 export const increase = () => ({ type: INCREASE });
 export const decrease = () => ({ type: DECREASE });
 */
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 state 생성
const initialState = {
  number: 0,
};

// 초기 reducer 함수 생성
/* old version with out handleActions 
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };

    default:
      return state;
  }
}
*/

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
