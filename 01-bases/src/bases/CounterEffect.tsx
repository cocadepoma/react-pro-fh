import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAX_COUNT = 10;

export const CounterEffect = () => {

  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (counter < 10) return;
    console.log('%cCounterEffect', 'color: #ff0000; font-weight: bold; font-size: 7px;');

    const tl = gsap.timeline();
    tl.to(counterElement.current, { y: -10, x: 100, duration: 1, ease: 'ease.out' })
      .to(counterElement.current, { y: 0, x: 0, duration: 1, ease: 'bounce.out' });

    // gsap.to(counterElement.current, { y: -10, x: 100, duration: 1, ease: 'ease.out' }).then(() => {
    //   gsap.to(counterElement.current, { y: 0, x: 0, duration: 1, ease: 'bounce.out' });
    // })
  }, [counter]);

  const handleClick = () => {
    // if (counter >= MAX_COUNT) return;

    setCounter((count) => Math.min(count + 1, MAX_COUNT));
  };

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElement} style={{ display: 'inline-block' }}>{counter}</h2>
      <button onClick={handleClick}>+ 1</button>
    </>
  );
}; 
