import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    initialCount: 0,
    maxCount: 15,
  });

  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={elementToAnimate} style={{ display: 'inline-block' }}>{counter}</h2>
      <button onClick={handleClick}>+ 1</button>
    </>
  );
}; 
