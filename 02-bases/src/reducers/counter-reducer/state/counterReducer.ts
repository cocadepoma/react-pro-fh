import { CounterAction } from "../actions/counter.actions";
import { CounterState } from "../interfaces/counter.interfaces";

export const counterReducer = (state: CounterState, action: CounterAction) => {
  const { counter, changes } = state;
  switch (action.type) {

    case 'increaseBy':
      return {
        ...state,
        counter: action.payload.value + counter,
        previous: counter,
        changes: changes + 1,
      };

    case 'decreaseBy':
      return {
        ...state,
        counter: counter - action.payload.value,
        previous: counter,
        chaanges: changes + 1,
      }

    case 'reset':
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };

    default:
      return state;
  }
}
