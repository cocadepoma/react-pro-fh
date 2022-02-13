import { useState } from "react";

interface Props {
  initialValue?: number;
};

interface CounterState {
  count: number;
  clicks: number;
};

export const CounterBy = ({ initialValue = 5 }: Props) => {

  const [counter, setCounter] = useState<CounterState>({
    count: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number) => {
    setCounter(({ clicks, count }) => ({
      count: count + value,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter.count}</h1>
      <h1>Clicks: {counter.clicks}</h1>

      <button onClick={() => handleClick(1)}>+ 1</button>
      <button onClick={() => handleClick(5)}>+ 5</button>
    </>
  );
}; 
