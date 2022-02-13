import { useReducer } from "react";
import { counterReducer } from "../reducers/counter-reducer/state/counterReducer";
import { CounterState } from "../reducers/counter-reducer/interfaces/counter.interfaces";
import { doDecreaseBy, doIncreaseBy, doReset } from "../reducers/counter-reducer/actions/counter.actions";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {

  const [{ counter, previous, changes }, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const increaseBy = (value: number) => {
    dispatch(doIncreaseBy(value));
  };

  const decreaseBy = (value: number) => {
    dispatch(doDecreaseBy(value));
  };

  const handleReset = () => {
    dispatch(doReset());
  };

  return (
    <>
      <h2>Counter Reducer: {counter}</h2>
      <h2>Previous: {previous}</h2>
      <h2>Changes: {changes}</h2>

      <button onClick={() => increaseBy(1)}>+ 1</button>
      <button onClick={() => increaseBy(5)}>+ 5</button>

      <button onClick={() => decreaseBy(1)}>- 1</button>
      <button onClick={() => decreaseBy(5)}>- 5</button>
      <button onClick={handleReset}>Reset</button>

    </>
  );
}; 
