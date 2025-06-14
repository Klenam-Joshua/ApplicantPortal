import { useEffect, useState } from "react";

export const useDebounce = (
  value,
  debounceTime = 300,
  onTimeOut = () => {}
) => {
  const [prevTimeoutId, setPrevTimeoutId] = useState(null);
  useEffect(() => {
    if (prevTimeoutId) {
      clearTimeout(prevTimeoutId);
    }

    const timeoutId = setTimeout(() => {
      if (value) {
        onTimeOut(value);
      }
    }, debounceTime);

    setPrevTimeoutId(timeoutId);

    return () => clearTimeout(prevTimeoutId);
  }, [value, debounceTime]);
};
