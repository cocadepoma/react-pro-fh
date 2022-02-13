import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 1, initialCount = 0 }) => {
  const [counter, setCounter] = useState(initialCount);
  const elementToAnimate = useRef<any>(null);

  const tl = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, { y: -10, x: 100, duration: 1, ease: 'ease.out' })
      .to(elementToAnimate.current, { y: 0, x: 0, duration: 1, ease: 'bounce.out' })
      .pause();
  }, []);

  useEffect(() => {
    if (counter < maxCount) return;
    console.log('%cCounterEffect', 'color: #ff0000; font-weight: bold; font-size: 7px;');
    tl.current.play(0);
  }, [counter]);

  const handleClick = () => {
    setCounter((count) => Math.min(count + 1, maxCount));
  };

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
}
