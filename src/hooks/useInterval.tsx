import { useEffect, useRef } from 'react';

export default function useInterval(
  callback: () => void,
  delay: number,
  current: number
) {
  const savedCallback = useRef(callback);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      intervalId.current = setInterval(tick, delay);
    }
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [delay]);

  // Reset the interval when 'current' changes
  useEffect(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(savedCallback.current, delay);
    }
  }, [current, delay]);

  return intervalId;
}
